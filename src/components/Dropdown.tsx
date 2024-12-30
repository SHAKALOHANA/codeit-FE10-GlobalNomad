'use client'

import React, { useState, useRef, useEffect } from 'react';
import Image from "next/image";
import * as styles from './Dropdown.css';
import pic from '../../public/icons/arrow_down.svg'

interface DropdownItem {
  label: string;
  value: string;
}

interface DropdownButtonProps {
  onClick: () => void;
  label: string;
}

interface DropdownMenuProps {
  items: DropdownItem[];
  onSelect: (value: string) => void;
  isVisible: boolean;
}

interface DropdownProps {
  items: DropdownItem[];
}

const DropdownButton: React.FC<DropdownButtonProps> = ({ onClick, label }) => (
  <button onClick={onClick} className={styles.dropdownButton}>
    {label} <Image src={pic} alt=" " width={13} height={8} />
  </button>
);

const DropdownMenu: React.FC<DropdownMenuProps> = ({ items, onSelect, isVisible }) => (
  <ul className={`${styles.dropdownMenu} ${isVisible ? styles.dropdownMenuVisible : ''}`}>
    {items.map((item) => (
      <li
        key={item.value}
        onClick={() => onSelect(item.value)}
        className={styles.dropdownItem}
      >
        {item.label}
      </li>
    ))}
  </ul>
);

const Dropdown: React.FC<DropdownProps> = ({ items }) => {
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
      <DropdownButton onClick={handleButtonClick} label={selectedLabel} />
      <DropdownMenu items={items} onSelect={handleItemSelect} isVisible={isMenuOpen} />
    </div>
  );
};

export default Dropdown;