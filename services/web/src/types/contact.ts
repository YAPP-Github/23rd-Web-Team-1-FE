import { TagDTO } from '@/types/tag';

export interface ContactInfo {
  id: number;
  name: string;
  profileImgUrl: string | null;
  phoneNumber: string;
  job: string;
  association: string;
  tags: TagDTO[];
}
