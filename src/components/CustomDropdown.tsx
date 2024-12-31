'use client'

import React, { useState, useRef, useEffect } from 'react';
import type { CustomDropdownMode } from '@/types/CustomDropdownMode';
import * as styles from './Dropdown.css';
import DropdownBox from './Dropdown/DropdownBox';
import DropdownMenu from './Dropdown/DropdownMenu';


interface DropdownItem {
  label: string;
  value: string;
}

interface DropdownProps {
  items: DropdownItem[];
}

interface MenuProps extends DropdownProps {
  list: { id: number; value: string }[];
}

const clickDropdown = (isOpen: boolean, menuOpen: ()=> void, dropdownRef: React.RefObject<HTMLDivElement | null>,) => {
  // useEffect(() => {
  //   const handleClickPoint = (event: MouseEvent) => {
  //     if(isOpen && dropdownRef.current &&
  //       !dropdownRef.current.contains(event.target as Node)) {
  //         menuOpen();
  //     }
  //   };
  //   document.addEventListener('click', handleClickPoint);
  //   return () => {
  //     document.removeEventListener('click', handleClickPoint);
  //   };
  // }, [isOpen, menuOpen, dropdownRef]);
};

/**
 * 드롭다운 명세
 * 0. select 태그의 다른 컴포넌트
 * 1. 드롭다운 버튼을 클릭 시 드롭다운 메뉴가 열린다.
 * 열린 상태에서 다시 드롭다운 버튼을 누르거나 외부 영역을 누르면 메뉴가 닫힌다.
 * 여기서 외부 영역이란: 1. 드롭다운 자체(버튼과 메뉴가 포함된) 외의 모든 영역 / 2. 드롭다운 메뉴 외의 영역
 * 2. 드롭다운 메뉴의 아이템 클릭시 해당하는 아이템의 value를 가진다.
 * 선택된 value를 부모 컴포넌트 혹은 외부에서 알 수 있거나 접근할 수 있어야 한다.
 * 위와 같이 드롭다운 동작 명세에 대한 정의가 필요해보임
 */

/**
 * 1. 드롭다운 명세 정의
 * 2. 드롭다운 UI 코딩
 * 3. 드롭다운 명세에 맞춰 기능 개발
 * 4. 테스트
 */
const CustomDropdown: React.FC<DropdownProps> = ({ items }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleButtonClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleItemSelect = (value: string) => {
    setSelectedValue(value);
    setIsMenuOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const selectedLabel =
    items.find((item) => item.value === selectedValue)?.label || '가격';

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <DropdownBox onClick={handleButtonClick} label={selectedLabel} />
      <DropdownMenu items={items} onSelect={handleItemSelect} isVisible={isMenuOpen} />
    </div>
  );
};

export default CustomDropdown;