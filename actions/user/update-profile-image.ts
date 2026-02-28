'use server';

import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

export const updateUserProfileImage = async (formData: FormData) => {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session?.user) {
    return { ok: false, message: 'No autenticado' };
  }

  try {
    const file = formData.get('image') as File | null;
    if (!file) {
      return { ok: false, message: 'No se envió ninguna imagen' };
    }

    // Convert image to base64 string
    let secureUrl: string | undefined;

    if (file.size > 0) {
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      const mimeType = file.type || 'image/png';

      const base64String = buffer.toString('base64');
      secureUrl = `data:${mimeType};base64,${base64String}`;
    }

    if (!secureUrl) {
      return { ok: false, message: 'Hubo un error al procesar la imagen' };
    }

    return {
      ok: true,
      url: secureUrl,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: 'Revisar los logs, no se pudo procesar la imagen',
    };
  }
};
