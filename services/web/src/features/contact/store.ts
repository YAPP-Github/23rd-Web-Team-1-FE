import { Tag } from '@/types/contact';
import { atom } from 'jotai';

export const selectedTagsAtom = atom<Tag[]>([]);
