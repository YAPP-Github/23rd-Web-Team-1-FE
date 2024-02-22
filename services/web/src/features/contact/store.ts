import { Tag } from '@/types/contact';
import { atom } from 'jotai';

export const selectedTagsAtom = atom<Tag[]>([]);

export const isDisplaySelectTagAtom = atom(false);
