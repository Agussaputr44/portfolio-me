import { supabase } from '../config/supabase';

export const uploadProjectImage = async (file: Express.Multer.File): Promise<string> => {
  const filename = `${Date.now()}-${file.originalname.replace(/\s/g, '-')}`;

  const { data, error } = await supabase.storage
    .from('portfolio-image-overview')
    .upload(filename, file.buffer, {
      contentType: file.mimetype,
      upsert: false
    });

  if (error) {
    throw new Error(`Gagal upload gambar: ${error.message}`);
  }

  const { data: publicUrlData } = supabase.storage
    .from('portfolio-image-overview')
    .getPublicUrl(filename);

  return publicUrlData.publicUrl;
};