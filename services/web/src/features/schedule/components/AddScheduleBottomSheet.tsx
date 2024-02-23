/* eslint-disable max-lines */
/* eslint-disable max-lines-per-function */
/* eslint-disable react/jsx-no-undef */
import {
  BottomSheet,
  Dropdown,
  Icon,
  Input,
  List,
  Profile,
  Spacing,
  TextArea,
  TextButton,
  Txt,
} from '@linker/lds';
import { colors, typography } from '@linker/styles';
import clsx from 'clsx';
import { format } from 'date-fns';
import { useAtom } from 'jotai';
import { useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';

import formatInputDate from '@utils/formatInputDate';

import {
  border,
  categoryIdentifier,
  categoryItem,
  categoryLegend,
  categoryToggleIcon,
  categoryWrapper,
  contactAddButton,
  container,
  divider,
  dropdown,
  dropdownTrigger,
  invitedContactCard,
  listRow,
  scheduleInput,
  textarea,
  textareaContainer,
  titleInput,
} from './AddScheduleBottomSheet.css';
import SearchContact from './SearchContact';
import { contactCard, contactCardInfo, contactWrapper } from './SearchContact.css';
import { CalendarType, Category, CategoryColor, ColorEnum } from '../constants';
import useAddSchedule from '../hooks/useAddSchedule';
import { selectedContactsAtom } from '../store';

interface InputData {
  title: string;
  startDateTime: string;
  endDateTime: string;
  description: string;
}

const AddScheduleBottomSheet = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isValid },
  } = useForm<InputData>({
    defaultValues: {
      startDateTime: format(new Date(), 'yyyy. MM. dd'),
      endDateTime: format(new Date(), 'yyyy. MM. dd'),
    },
  });

  const formState = useWatch({
    name: ['title', 'startDateTime', 'endDateTime', 'description'],
    control,
  });

  const { mutate: addSchedule } = useAddSchedule();

  const 모든정보를_입력했는가 = formState.every((value) => value !== '') && isValid;

  const [isSearchContact, setIsSearchContact] = useState(false);
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const [category, setCategory] = useState<Category>('개인일정');
  const [categoryColor, setCategoryColor] = useState<CategoryColor>(ColorEnum['개인일정']);

  const [selectedContacts, setSelectedContacts] = useAtom(selectedContactsAtom);

  const resetFormState = () => {
    reset();
    setSelectedContacts([]);
    setCategory('개인일정');
    setCategoryColor(ColorEnum['개인일정']);
  };

  const handleContactSubmit = () => {
    const payload = {
      title: formState[0],
      startDateTime: formatDate(formState[1]),
      endDateTime: formatDate(formState[2]),
      description: formState[3],
      contactIds: selectedContacts.map((contact) => contact.id),
      category,
      color: categoryColor,
    };

    addSchedule(payload);
    resetFormState();
  };

  return (
    <BottomSheet.Content bgColor={colors.gray000}>
      {isSearchContact ? (
        <SearchContact setIsSearchContact={setIsSearchContact} />
      ) : (
        <>
          <BottomSheet.ButtonGroup>
            <BottomSheet.CloseButton>
              <TextButton
                typography="b1"
                fontWeight="medium"
                onClick={() => {
                  resetFormState();
                }}
              >
                취소
              </TextButton>
            </BottomSheet.CloseButton>

            <BottomSheet.CloseButton>
              <TextButton
                typography="b1"
                type="submit"
                disabled={!모든정보를_입력했는가}
                onClick={handleSubmit(handleContactSubmit)}
              >
                저장
              </TextButton>
            </BottomSheet.CloseButton>
          </BottomSheet.ButtonGroup>
          <form className={container}>
            <div style={{ backgroundColor: categoryColor }} className={categoryIdentifier} />
            <Input
              className={clsx(typography({ type: 'h5' }), titleInput)}
              placeholder="어떤 일정인가요?"
              errorMessage={errors.title?.message}
              {...register('title', {
                required: true,
                maxLength: 20,
              })}
            />
            <Spacing size={16} />

            <List>
              <div className={listRow}>
                <Txt as="p" typography="p1" color={colors.gray800}>
                  시작
                </Txt>

                <Input
                  className={scheduleInput}
                  type="text"
                  placeholder={format(new Date(), 'yyyy. MM. dd')}
                  errorMessage={errors.startDateTime?.message}
                  {...register('startDateTime', {
                    required: true,
                  })}
                  onKeyUp={(e) => {
                    const formatted = formatInputDate(e.currentTarget.value);

                    e.currentTarget.value = formatted;
                  }}
                />
              </div>
              <div className={divider} />
              <div className={listRow}>
                <Txt typography="p1" color={colors.gray800}>
                  종료
                </Txt>

                <Input
                  className={scheduleInput}
                  type="text"
                  placeholder={format(new Date(), 'yyyy. MM. dd')}
                  errorMessage={errors.endDateTime?.message}
                  {...register('endDateTime', {
                    required: true,
                  })}
                  onKeyUp={(e) => {
                    const formatted = formatInputDate(e.currentTarget.value);

                    e.currentTarget.value = formatted;
                  }}
                />
              </div>
            </List>
            <Spacing size={16} />

            <List className={listRow}>
              <Txt typography="p1" color={colors.gray700}>
                캘린더
              </Txt>
              <Dropdown
                className={dropdown}
                open={isOpenDropdown}
                onOpenChange={() => setIsOpenDropdown((prev) => !prev)}
              >
                <Dropdown.Trigger className={dropdownTrigger}>
                  <span
                    className={categoryLegend}
                    style={{ marginRight: '0.8rem', backgroundColor: categoryColor }}
                  />
                  <Txt typography="p1">{category}</Txt>
                  <Icon name="down-gray" size={20} className={categoryToggleIcon} />
                </Dropdown.Trigger>
                <Dropdown.Content className={categoryWrapper}>
                  {CalendarType.map((item, index) => (
                    <li
                      role="presentation"
                      key={item.category}
                      className={clsx(categoryItem, index !== CalendarType.length - 1 && border)}
                      onClick={() => {
                        setCategory(item.category);
                        setCategoryColor(ColorEnum[item.category]);

                        setIsOpenDropdown(false);
                      }}
                    >
                      <Txt typography="p3" fontWeight="regular">
                        {item.category}
                      </Txt>

                      <span
                        className={categoryLegend}
                        style={{ marginRight: '0.8rem', backgroundColor: ColorEnum[item.category] }}
                      />
                    </li>
                  ))}
                </Dropdown.Content>
              </Dropdown>
            </List>
            <Spacing size={16} />

            <List className={invitedContactCard}>
              <div className={listRow}>
                <Txt typography="p1" color={colors.gray700}>
                  초대받은 사람
                </Txt>
                <TextButton typography="p1" onClick={() => setIsSearchContact(true)}>
                  <span className={contactAddButton}>
                    추가하기 <Icon name="next-gray" size={20} />
                  </span>
                </TextButton>
              </div>

              {selectedContacts.length > 0 && (
                <ul className={contactWrapper}>
                  {selectedContacts.map((contact) => {
                    return (
                      <li role="presentation" key={contact.id} className={contactCard}>
                        <Profile priority imageUrl={contact.profileImgUrl} size="small" />

                        <div className={contactCardInfo}>
                          <Txt typography="p2">{contact.name}</Txt>
                          <Txt typography="p5" color={colors.gray500}>
                            {contact.careers ?? contact.school ?? ''}
                          </Txt>
                        </div>
                      </li>
                    );
                  })}

                  <Spacing size={8} />
                </ul>
              )}
            </List>

            <Spacing size={16} />

            <TextArea
              placeholder="일정에 대한 정보를 작성해주세요"
              containerClassName={textareaContainer}
              className={textarea}
              errorMessage={errors.description?.message}
              {...register('description', {
                required: true,
                maxLength: 400,
              })}
            />
          </form>
        </>
      )}
    </BottomSheet.Content>
  );
};

export default AddScheduleBottomSheet;

const formatDate = (inputDate: string) => {
  const parts = inputDate.split('.').map((part) => {
    return parseInt(part);
  });

  const date = new Date(parts[0], parts[1] - 1, parts[2]);

  const isoDate = format(date, 'yyyy-MM-dd HH:mm:ss');

  return isoDate;
};
