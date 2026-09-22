import { createContext, useContext, useState, ReactNode } from 'react';
import defaultProfilePhoto from '../assets/images/profile-photo.jpg';

interface ProfilePhotoContextType {
  photoUrl: string;
  isCustomPhoto: boolean;
  setPhotoFromFile: (file: File) => Promise<boolean>;
  resetToDefault: () => void;
}

const STORAGE_KEY = 'rakshak_exact_profile_photo';
const DEFAULT_PHOTO = defaultProfilePhoto;

const ProfilePhotoContext = createContext<ProfilePhotoContextType>({
  photoUrl: DEFAULT_PHOTO,
  isCustomPhoto: false,
  setPhotoFromFile: async () => false,
  resetToDefault: () => {},
});

export function ProfilePhotoProvider({ children }: { children: ReactNode }) {
  const [photoUrl, setPhotoUrl] = useState<string>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved || DEFAULT_PHOTO;
    } catch {
      return DEFAULT_PHOTO;
    }
  });

  const isCustomPhoto = photoUrl !== DEFAULT_PHOTO;

  const setPhotoFromFile = async (file: File): Promise<boolean> => {
    return new Promise((resolve) => {
      try {
        const reader = new FileReader();
        reader.onload = (e) => {
          const result = e.target?.result as string;
          if (result) {
            try {
              localStorage.setItem(STORAGE_KEY, result);
            } catch (err) {
              console.warn('Unable to persist to localStorage (file may be large):', err);
            }
            setPhotoUrl(result);
            resolve(true);
          } else {
            resolve(false);
          }
        };
        reader.onerror = () => resolve(false);
        reader.readAsDataURL(file);
      } catch {
        resolve(false);
      }
    });
  };

  const resetToDefault = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {}
    setPhotoUrl(DEFAULT_PHOTO);
  };

  return (
    <ProfilePhotoContext.Provider
      value={{
        photoUrl,
        isCustomPhoto,
        setPhotoFromFile,
        resetToDefault,
      }}
    >
      {children}
    </ProfilePhotoContext.Provider>
  );
}

export function useProfilePhoto() {
  return useContext(ProfilePhotoContext);
}
