'use client';

import { useState } from 'react';
import { IoDownloadOutline } from 'react-icons/io5';
import { getDownloadFile } from '@/actions';
import { Button } from '@/components/ui/button';

interface Props {
  orderId: string;
  productId: string;
}

export const DownloadButton = ({ orderId, productId }: Props) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = async () => {
    setIsLoading(true);

    try {
      const result = await getDownloadFile(orderId, productId);

      if (!result.ok || !result.base64) {
        alert(result.message || 'Download failed');
        return;
      }

      // Convert base64 to blob and trigger download
      const byteCharacters = atob(result.base64);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: result.mimeType });

      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = result.fileName || 'download.zip';
      document.body.appendChild(link);
      link.click();

      // Cleanup
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download error:', error);
      alert('An error occurred during download');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      onClick={handleDownload}
      disabled={isLoading}
      className="mt-2 inline-flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-50"
    >
      <IoDownloadOutline size={18} className={isLoading ? 'animate-bounce' : ''} />
      {isLoading ? 'Downloading...' : 'Download Resource'}
    </Button>
  );
};
