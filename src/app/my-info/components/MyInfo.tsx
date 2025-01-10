'use client';

import React, { useState, useEffect } from 'react';
import { AxiosError } from 'axios';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { instance } from '../../../../apis/instance';
import * as S from './MyInfo.css';
import CustomInput from '@/components/CustomInput';
import CustomButton from '@/components/CustomButton';

interface ErrorData {
  message: string; // 혹은 message?: string
}

interface MyInfoProps {
  id: number;
  email: string;
  nickname: string;
  profileImageUrl: string | null;
  createdAt: string;
  updatedAt: string;
}

interface PatchResponse {
  id: number;
  email: string;
  nickname: string;
  profileImageUrl: string;
  createdAt: string;
  updatedAt: string;
}

type UpdateUserBody = Partial<{
  nickname: string;
  newPassword: string;
  profileImageUrl: string | null;
}>;

export default function MyInfo() {
  const queryClient = useQueryClient();

  const {
    data: myInfo = {} as MyInfoProps,
    isLoading,
    isFetching,
    error,
  } = useQuery<MyInfoProps, Error>({
    queryKey: ['myInfo'],
    queryFn: async () => {
      const { data } = await instance.get('/users/me');
      return data as MyInfoProps;
    },
  });

  const updateUserMutation = useMutation<
    PatchResponse,
    AxiosError<ErrorData>,
    UpdateUserBody
  >({
    mutationFn: async (updateBody: UpdateUserBody) => {
      const { data } = await instance.patch<PatchResponse>(
        '/users/me',
        updateBody
      );
      return data;
    },

    onSuccess: () => {
      alert('수정이 완료되었습니다.');
      queryClient.invalidateQueries({ queryKey: ['myInfo'] });
    },

    onError: (err) => {
      if (err instanceof AxiosError) {
        if (err.response?.status === 400) {
          const msg = err.response?.data?.message;
          alert(msg);
        }
      } else {
        console.error(err);
      }
    },
  });

  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  useEffect(() => {
    if (!isLoading && myInfo.nickname) {
      setNickname(myInfo.nickname);
    }
  }, [myInfo.nickname, isLoading]);

  const passwordsMatch = password === passwordConfirm;
  const isSaveButtonDisabled = password.length > 0 && !passwordsMatch;

  const handleSave = () => {
    const updateBody: UpdateUserBody = {};

    if (nickname && nickname !== myInfo.nickname) {
      updateBody.nickname = nickname;
    }

    if (password.length > 0) {
      updateBody.newPassword = password;
    }

    updateUserMutation.mutate(updateBody);
  };

  if (isLoading || isFetching) {
    return <div className={S.myInfoContainer}>로딩 중입니다...</div>;
  }

  if (error) {
    return (
      <div className={S.myInfoContainer}>
        오류가 발생했습니다: {error.message}
      </div>
    );
  }

  return (
    <div className={S.container}>
      <div className={S.myInfoContainer}>
        <div className={S.header}>
          <h2 className={S.headerTitle}>내 정보</h2>
          <CustomButton
            mode="save"
            onClick={handleSave}
            disabled={isSaveButtonDisabled}
          />
        </div>
        <div className={S.inputContainer}>
          <label className={S.labelStyle}>닉네임</label>
          <CustomInput
            mode="myNickname"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </div>
        <div className={S.inputContainer}>
          <label className={S.labelStyle}>이메일</label>
          <CustomInput mode="myEmail" value={myInfo.email} />
        </div>
        <div className={S.inputContainer}>
          <label className={S.labelStyle}>비밀번호</label>
          <CustomInput
            mode="myPassword"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={S.inputContainer}>
          <label className={S.labelStyle}>비밀번호 재입력</label>
          <CustomInput
            mode="myPasswordConfirm"
            type="password"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
          {password.length > 0 && !passwordsMatch && (
            <div style={{ color: 'red', marginTop: '4px' }}>
              비밀번호가 일치하지 않습니다.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
