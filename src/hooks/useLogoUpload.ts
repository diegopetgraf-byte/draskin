/**
 * Local logo upload hook — no Supabase, saves via Next.js API route to /public/uploads/
 */

import { useState, useCallback } from 'react';

interface UploadResult {
  success: boolean;
  url?: string;
  error?: string;
}

export const useLogoUpload = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const uploadLogo = useCallback(async (file: File): Promise<UploadResult> => {
    setIsUploading(true);
    setUploadProgress(0);

    try {
      setUploadProgress(30);

      const formData = new FormData();
      formData.append('file', file);

      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      setUploadProgress(80);

      if (!res.ok) {
        const data = await res.json();
        return { success: false, error: data.error || 'Upload failed' };
      }

      const data = await res.json();
      setUploadProgress(100);
      return { success: true, url: data.url };
    } catch (err) {
      return { success: false, error: 'Unexpected upload error.' };
    } finally {
      setIsUploading(false);
    }
  }, []);

  const deleteLogo = useCallback(async (_url: string): Promise<boolean> => {
    // Local files are not actively deleted — just return true
    return true;
  }, []);

  return { uploadLogo, deleteLogo, isUploading, uploadProgress };
};
