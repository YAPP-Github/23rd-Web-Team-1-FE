import { useGetContactSearch } from '@app/contactSearch/hooks/useGetSearch';
import { ContactData } from '@app/my/contact/types/contact';
import { Icon, IconButton, Input, Profile, Spacing, TextButton, Txt } from '@linker/lds';
import { colors } from '@linker/styles';
import { useAtom } from 'jotai';
import { useForm, useWatch } from 'react-hook-form';

import {
  contactCard,
  contactCardInfo,
  contactInput,
  contactWrapper,
  container,
  inputWrapper,
  selectedContactCard,
  topWrapper,
} from './SearchContact.css';
import { selectedContactsAtom } from '../store';

interface Props {
  setIsSearchContact: (value: boolean) => void;
}

interface InputData {
  contact: string;
}

const SearchContact = ({ setIsSearchContact }: Props) => {
  const {
    register,
    control,
    formState: { errors },
  } = useForm<InputData>({});

  const formState = useWatch({
    name: 'contact',
    control,
  });

  const { data } = useGetContactSearch(formState);

  const [selectedContacts, setSelectedContacts] = useAtom(selectedContactsAtom);

  return (
    <>
      <div className={container}>
        <div className={topWrapper}>
          <div className={inputWrapper}>
            <Icon name="search" size={32} />
            <Input
              className={contactInput}
              type="text"
              placeholder="초대받은 사람 추가"
              errorMessage={errors.contact?.message}
              {...register('contact', {
                required: true,
                maxLength: 20,
              })}
            />
          </div>

          <TextButton
            typography="b1"
            type="submit"
            onClick={() => {
              setIsSearchContact(false);
            }}
          >
            완료
          </TextButton>
        </div>

        {selectedContacts.length > 0 && (
          <ul className={contactWrapper}>
            {selectedContacts.map((contact) => {
              return (
                <li role="presentation" key={contact.id} className={selectedContactCard}>
                  <div className={contactCard}>
                    <Profile priority imageUrl={contact.profileImgUrl} size="regular" />

                    <div className={contactCardInfo}>
                      <Txt typography="p2">{contact.name}</Txt>
                      <Txt typography="p5" color={colors.gray500}>
                        {contact.careers ?? contact.school ?? ''}
                      </Txt>
                    </div>
                  </div>

                  <IconButton
                    name="close"
                    size={24}
                    onClick={() => {
                      const filtered = selectedContacts.filter((c) => c.id !== contact.id);

                      setSelectedContacts(filtered);
                    }}
                  />
                </li>
              );
            })}

            <Spacing size={8} />
          </ul>
        )}

        <ul className={contactWrapper}>
          {data.contacts.map((contact) => {
            const find = findSelectedContact(selectedContacts, contact);

            if (selectedContacts.length > 0 && find) {
              return;
            }

            return (
              <li
                role="presentation"
                key={contact.id}
                className={contactCard}
                onClick={() => {
                  setSelectedContacts((prev) => [...prev, contact]);
                }}
              >
                <Profile priority imageUrl={contact.profileImgUrl} size="regular" />

                <div className={contactCardInfo}>
                  <Txt typography="p2">{contact.name}</Txt>
                  <Txt typography="p5" color={colors.gray500}>
                    {contact.careers ?? contact.school ?? ''}
                  </Txt>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default SearchContact;

const findSelectedContact = (contacts: ContactData[], contact: ContactData) => {
  return contacts.find((c) => c.id === contact.id);
};
