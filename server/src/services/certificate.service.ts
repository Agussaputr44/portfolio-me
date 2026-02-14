import { supabase } from '../config/supabase';
import { Certificate, CreateCertificateInput } from '../interfaces/certificate.interface';

export const getAllCertificates = async (): Promise<Certificate[]> => {
  const { data, error } = await supabase.from('certificates').select('*').order('year', { ascending: false });
  if (error) throw new Error(error.message);
  return data as Certificate[];
};

export const addCertificate = async (payload: any) => {
  const { data, error } = await supabase.from('certificates').insert(payload).select().single();
  if (error) throw new Error(error.message);
  return data;
};

export const getCertificateById = async (id: number) => {
  const { data, error } = await supabase
    .from('certificates')
    .select('*')
    .eq('id', id)
    .single();

  if (error) throw new Error(error.message);
  return data;
};