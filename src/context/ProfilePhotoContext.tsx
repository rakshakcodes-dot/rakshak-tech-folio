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
          const rawResult = e.target?.result as string;
          if (!rawResult) {
            resolve(false);
            return;
          }

          // Scale and compress image using canvas to ensure safe localStorage size
          const img = new Image();
          img.onload = () => {
            try {
              const canvas = document.createElement('canvas');
              const maxDim = 800;
              let width = img.width;
              let height = img.height;
              if (width > maxDim || height > maxDim) {
                if (width > height) {
                  height = Math.round((height * maxDim) / width);
                  width = maxDim;
                } else {
                  width = Math.round((width * maxDim) / height);
                  height = maxDim;
                }
              }
              canvas.width = width;
              canvas.height = height;
              const ctx = canvas.getContext('2d');
              if (ctx) {
                ctx.drawImage(img, 0, 0, width, height);
                const compressed = canvas.toDataURL('image/jpeg', 0.88);
                try {
                  localStorage.setItem(STORAGE_KEY, compressed);
                } catch (err) {
                  console.warn('Storage quota reached:', err);
                }
                setPhotoUrl(compressed);
                resolve(true);
                return;
              }
            } catch (canvasErr) {
              console.warn('Canvas compression fallback:', canvasErr);
            }
            // Fallback if canvas fails
            try {
              localStorage.setItem(STORAGE_KEY, rawResult);
            } catch {}
            setPhotoUrl(rawResult);
            resolve(true);
          };
          img.onerror = () => {
            resolve(false);
          };
          img.src = rawResult;
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
