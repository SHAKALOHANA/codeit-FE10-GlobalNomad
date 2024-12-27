import React from 'react';
import {
  myInfoContainer,
  header,
  Container,
  headerTitle,
  inputContainer,
  labelStyle,
} from './myPage.css';
import CustomInput from '@/components/CustomInput';
import CustomButton from '@/components/CustomButton';

export default function MyPage() {
  return (
    <div className={Container}>
      <div className={myInfoContainer}>
        <div className={header}>
          <h2 className={headerTitle}>내 정보</h2>
          <CustomButton mode="save" />
        </div>
        <div className={inputContainer}>
          <label className={labelStyle}>닉네임</label>
          <CustomInput mode="myNickname" />
        </div>
        <div className={inputContainer}>
          <label className={labelStyle}>이메일</label>
          <CustomInput mode="myEmail" />
        </div>
        <div className={inputContainer}>
          <label className={labelStyle}>비밀번호</label>
          <CustomInput mode="myPassword" />
        </div>
        <div className={inputContainer}>
          <label className={labelStyle}>비밀번호 재입력</label>
          <CustomInput mode="myPasswordConfirm" />
        </div>
      </div>
    </div>
  );
}
