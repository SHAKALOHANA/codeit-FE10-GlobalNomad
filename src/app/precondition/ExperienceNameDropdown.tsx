'use client';

import React, { useState, useEffect } from 'react';
import {
  DropDownContainer,
  DropDownBoxWrap,
  CategoryMenuBox,
  ListItem,
} from './ExperienceNameDropdown.css';

interface ExperienceNameDropDownProps {
  onCategorySelect: (category: string) => void;
}

const ExperienceNameDropdown = ({
  onCategorySelect,
}: ExperienceNameDropDownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] =
    useState<string>('체험을 선택하세요');
  const [titles, setTitles] = useState<string[]>([]);

  const fetchTitles = async () => {
    try {
      const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTM2MSwidGVhbUlkIjoiMTAtMSIsImlhdCI6MTczNjcwODA2MSwiZXhwIjoxNzM2NzA5ODYxLCJpc3MiOiJzcC1nbG9iYWxub21hZCJ9.WTy11QmdbrKRBd9RZeGhNImJfM4hKuHC_NOsjByDzlI';

      const response = await fetch(
        'https://sp-globalnomad-api.vercel.app/10-1/my-activities?size=40',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch titles: ${response.statusText}`);
      }

      const data = await response.json();

      const fetchedTitles = data.activities.map(
        (activity: { title: string }) => activity.title
      );

      setTitles(fetchedTitles);
    } catch (error) {
      console.error('Error fetching titles:', error);
    }
  };

  useEffect(() => {
    fetchTitles();
  }, []);

  const onToggle = () => setIsOpen(!isOpen);

  const onOptionClicked = (value: string) => {
    setSelectedCategory(value);
    setIsOpen(false);
    onCategorySelect(value); // 선택된 카테고리를 부모 컴포넌트로 전달
  };

  return (
    <div style={{ position: 'relative' }}>
      <div className={CategoryMenuBox} onClick={onToggle}>
        <p
          style={{
            fontSize: '14px',
            color:
              selectedCategory === '체험을 선택하세요' ? '#a1a1a1' : '#000000',
          }}
        >
          {selectedCategory}
        </p>
        <img
          src="../../../icons/chevron_down.svg"
          alt="Chevron Down"
          width={24}
          height={24}
          style={{ cursor: 'pointer' }}
        />
      </div>

      {isOpen && (
        <div className={DropDownBoxWrap}>
          <ul className={DropDownContainer}>
            {titles.map((title, index) => (
              <li
                key={index}
                className={ListItem}
                onClick={() => onOptionClicked(title)}
              >
                {title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ExperienceNameDropdown;

