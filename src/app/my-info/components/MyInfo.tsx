import React from 'react';
import * as S from './MyInfo.css';
import CustomInput from '@/components/CustomInput';
import CustomButton from '@/components/CustomButton';

export default function MyInfo() {
  return (
    <div className={S.container}>
      <div className={S.myInfoContainer}>
        <div className={S.header}>
          <h2 className={S.headerTitle}>내 정보</h2>
          <CustomButton mode="save" />
        </div>
        <div className={S.inputContainer}>
          <label className={S.labelStyle}>닉네임</label>
          <CustomInput mode="myNickname" />
        </div>
        <div className={S.inputContainer}>
          <label className={S.labelStyle}>이메일</label>
          <CustomInput mode="myEmail" />
        </div>
        <div className={S.inputContainer}>
          <label className={S.labelStyle}>비밀번호</label>
          <CustomInput mode="myPassword" />
        </div>
        <div className={S.inputContainer}>
          <label className={S.labelStyle}>비밀번호 재입력</label>
          <CustomInput mode="myPasswordConfirm" />
        </div>
      </div>
    </div>
  );
}
