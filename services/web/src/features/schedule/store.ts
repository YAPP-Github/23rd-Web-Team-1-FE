import { ContactData } from '@app/my/contact/types/contact';
import { atom } from 'jotai';

export const selectedContactsAtom = atom<ContactData[]>([]);
