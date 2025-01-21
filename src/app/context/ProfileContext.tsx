'use client';

import { createContext, useContext, useState } from 'react';

interface ProfileContextType {
  isLoggedIn: boolean;
  setIsLoggedIn: (status: boolean) => void;
  profileImageUrl: string;
  setProfileImageUrl: (url: string) => void;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export const ProfileProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profileImageUrl, setProfileImageUrl] = useState('');

  return (
    <ProfileContext.Provider value={{ isLoggedIn, setIsLoggedIn, profileImageUrl, setProfileImageUrl }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfileContext = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error('useProfileContext must be used within a ProfileProvider');
  }
  return context;
};
