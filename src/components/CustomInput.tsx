import React, { useId, useState } from 'react';
import Image from 'next/image';
import {
  baseInput,
  inputVariants,
  fileInputHidden,
  uploadLabelVariants,
  passwordInputWrapper,
  toggleIcon,
  errorOutline,
  errorMessage,
} from './CustomInput.css';
import type { CustomInputMode } from '@/types/CustomInput';
import { placeholderMap, typeMap, stepMap } from '@/types/CustomInput';
import { isValidEmail, isValidPassword } from '@/utils/validators';

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  mode?: CustomInputMode;
  passwordValue?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput: React.FC<CustomInputProps> = ({
  mode = 'email',
  placeholder,
  type,
  passwordValue,
  ...props
}) => {
  const uniqueId = useId();
  const step = stepMap[mode];

  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const [isVisible, setIsVisible] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);

    if (mode === 'email') {
      if (!isValidEmail(newValue)) {
        setError('잘못된 이메일입니다.');
      } else {
        setError('');
      }
    }

    if (mode === 'password' || mode === 'myPassword') {
      if (!isValidPassword(newValue)) {
        setError('8자 이상 입력해주세요.');
      } else {
        setError('');
      }
    }

    if (mode === 'passwordConfirm' || mode === 'myPasswordConfirm') {
      if (passwordValue && newValue !== passwordValue) {
        setError('비밀번호가 일치하지 않습니다.');
      } else {
        setError('');
      }
    }
  };

  const className = error
    ? [baseInput, inputVariants[mode], errorOutline].join(' ')
    : [baseInput, inputVariants[mode]].join(' ');

  // ─────────────────────────────────────────
  // password 모드 (비밀번호 표시/숨기기 토글)
  // ─────────────────────────────────────────

  if (
    mode === 'password' ||
    mode === 'passwordConfirm' ||
    mode === 'myPassword' ||
    mode === 'myPasswordConfirm'
  ) {
    const toggleVisibility = () => setIsVisible((prev) => !prev);

    return (
      <div>
        <div className={passwordInputWrapper}>
          <input
            id={uniqueId}
            className={className}
            placeholder={placeholder ?? placeholderMap[mode]}
            type={isVisible ? 'text' : 'password'}
            value={value}
            onChange={handleChange}
            {...props}
          />
          <Image
            width={44}
            height={44}
            src={!isVisible ? '/icons/eye_open.svg' : '/icons/eye_closed.svg'}
            alt="Toggle password visibility"
            className={toggleIcon}
            onClick={toggleVisibility}
          />
        </div>
        {error && <div className={errorMessage}>{error}</div>}
      </div>
    );
  }

  // ─────────────────────────────────────────
  // image / profile 모드 (파일 업로드)
  // ─────────────────────────────────────────

  if (mode === 'image' || mode === 'profile') {
    const labelClassName =
      mode === 'image'
        ? uploadLabelVariants.image
        : uploadLabelVariants.profile;

    return (
      <>
        <input
          id={uniqueId}
          className={fileInputHidden}
          type={type ?? typeMap[mode]}
          accept="image/*"
          {...props}
        />
        <label htmlFor={uniqueId} className={labelClassName}></label>
      </>
    );
  }

  // ─────────────────────────────────────────
  // email or 기본 모드
  // ─────────────────────────────────────────

  return (
    <div>
      <input
        id={uniqueId}
        className={className}
        placeholder={placeholder ?? placeholderMap[mode]}
        type={type ?? typeMap[mode]}
        value={value}
        onChange={handleChange}
        step={step}
        {...props}
      />
      {error && <div className={errorMessage}>{error}</div>}
    </div>
  );
};

export default CustomInput;
