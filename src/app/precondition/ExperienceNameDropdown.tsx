'use client';

import React, { useState, useEffect } from 'react';
import {
  DropDownContainer,
  DropDownBoxWrap,
  CategoryMenuBox,
  ListItem,
} from './ExperienceNameDropdown.css';

interface ExperienceNameDropDownProps {
  onCategorySelect: (categoryId: string) => void; // ID만 전달
}

interface Activity {
  id: string;
  title: string;
}

const ExperienceNameDropdown = ({
  onCategorySelect,
}: ExperienceNameDropDownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedTitle, setSelectedTitle] =
    useState<string>('체험을 선택하세요'); // 선택된 제목 표시
  const [activities, setActivities] = useState<Activity[]>([]); // ID와 Title 저장

  const fetchActivities = async () => {
    try {
      const token = ''; //토큰

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
        throw new Error(`Failed to fetch activities: ${response.statusText}`);
      }

      const data = await response.json();

      const fetchedActivities = data.activities.map((activity: any) => ({
        id: activity.id,
        title: activity.title,
      }));

      setActivities(fetchedActivities);
    } catch (error) {
      console.error('Error fetching activities:', error);
    }
  };

  useEffect(() => {
    fetchActivities();
  }, []);

  const onToggle = () => setIsOpen(!isOpen);

  const onOptionClicked = (id: string, title: string) => {
    setSelectedTitle(title);
    setIsOpen(false);
    onCategorySelect(id);
  };

  return (
    <div style={{ position: 'relative' }}>
      <div className={CategoryMenuBox} onClick={onToggle}>
        <p
          style={{
            fontSize: '14px',
            color:
              selectedTitle === '체험을 선택하세요' ? '#a1a1a1' : '#000000',
          }}
        >
          {selectedTitle}
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
            {activities.map((activity, index) => (
              <li
                key={index}
                className={ListItem}
                onClick={() => onOptionClicked(activity.id, activity.title)}
              >
                {activity.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ExperienceNameDropdown;

