/* eslint-disable max-lines */
/* eslint-disable max-lines-per-function */
/* eslint-disable no-console */
import { Tag } from '@/types/contact';
import useAddContact from '@features/contact/hooks/useAddContact';
import useImageUpload from '@features/contact/hooks/useImageUpload';
import { selectedTagsAtom } from '@features/contact/store';
import {
  BottomSheet,
  Chip,
  Icon,
  Input,
  Profile,
  Spacing,
  TextArea,
  TextButton,
  Txt,
} from '@linker/lds';
import { colors } from '@linker/styles';
import { useAtom } from 'jotai';
import { ChangeEvent, useRef, useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';

import formatPhoneNumber from '@utils/formatPhoneNumber';

import {
  cameraIcon,
  categoryItem,
  container,
  formContainer,
  interestContainer,
  interestSettingButton,
  interestSettingText,
  interestTagWrapper,
  interestTitle,
  noteInput,
  profileWrapper,
} from './AddFriendBottomSheet.css';
import SelectTag from './SelectTag';

export interface InputData {
  name: string;
  profileImgUrl?: string;
  phoneNumber: string;
  description: string;
}

const AddFriendBottomSheet = () => {
  const imageUploadRef = useRef<HTMLInputElement>(null);

  const {
    register,
    control,
    reset,
    formState: { errors },
  } = useForm<InputData>();

  const formState = useWatch({
    name: ['name', 'phoneNumber', 'description'],
    control,
  });

  const { mutate: uploadImage, imageS3Url } = useImageUpload();
  const { mutate: addContact } = useAddContact();

  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isDisplaySelectTag, setIsDisplaySelectTag] = useState(false);
  const [selectedTags, setSelectedTags] = useAtom(selectedTagsAtom);

  const 모든정보를_입력했는가 = formState.every((value) => value !== '') && imageS3Url != null;

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files == null) {
      return;
    }

    setImageUrl(URL.createObjectURL(e.target.files[0]));
    uploadImage(e.target.files[0]);
  };

  const resetFormState = () => {
    setSelectedTags([]);
    setImageUrl(null);
    reset();
  };

  const handleContactSubmit = () => {
    const payload = {
      name: formState[0],
      profileImgUrl: imageS3Url ?? '',
      phoneNumber: formState[1],
      description: formState[2],
      interests: selectedTags,
    };

    addContact(payload);
    resetFormState();
  };

  return (
    <BottomSheet.Content>
      {isDisplaySelectTag ? (
        <SelectTag setIsDisplay={setIsDisplaySelectTag} />
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
                onClick={handleContactSubmit}
              >
                저장
              </TextButton>
            </BottomSheet.CloseButton>
          </BottomSheet.ButtonGroup>
          <div className={container}>
            <form encType="multipart/form-data" className={profileWrapper}>
              <input
                ref={imageUploadRef}
                type="file"
                name="file"
                accept="image/jpg, image/png, image/jpeg"
                hidden
                onChange={handleImageUpload}
              />
              <Profile size="xxLarge" imageUrl={imageUrl} />
              <Icon
                name="camera-fill"
                className={cameraIcon}
                onClick={() => {
                  if (imageUploadRef.current == null) {
                    return;
                  }

                  imageUploadRef.current.click();
                }}
              />
            </form>

            <form className={formContainer}>
              <Input
                label="이름"
                placeholder="이름을 입력해주세요"
                errorMessage={errors.name?.message}
                {...register('name', {
                  required: true,
                  pattern: {
                    value: /^[a-zA-Z0-9가-힣\s]{2,20}$/,
                    message: '한글, 영문, 숫자, 공백 2~20자까지 입력할수 있어요.',
                  },
                })}
              />
              <Spacing size={24} />

              <Input
                label="전화번호"
                placeholder="전화번호를 입력해주세요"
                type="text"
                errorMessage={errors.phoneNumber?.message}
                onKeyUp={(e) => {
                  const formatted = formatPhoneNumber(e.currentTarget.value);

                  e.currentTarget.value = formatted;
                }}
                {...register('phoneNumber', {
                  required: true,
                  maxLength: 11,
                  pattern: {
                    value: /^[0-9]+$/,
                    message: '숫자만 입력할 수 있어요.',
                  },
                })}
              />
              <Spacing size={24} />

              <div className={interestContainer}>
                <Txt
                  typography="p3"
                  fontWeight="medium"
                  color={colors.gray700}
                  className={interestTitle}
                >
                  관심주제
                </Txt>
                {selectedTags.length === 0 ? (
                  <TextButton
                    typography="p2"
                    fontWeight="regular"
                    className={interestSettingButton}
                    textClassName={interestSettingText}
                    onClick={() => setIsDisplaySelectTag(true)}
                  >
                    <Icon name="plus" size={24} />
                    관심주제를 설정해주세요
                  </TextButton>
                ) : (
                  <div className={interestTagWrapper}>
                    {selectedTags.map((tag: Tag) => (
                      <Chip
                        key={tag.id}
                        className={categoryItem}
                        onDelete={() => {
                          const filteredTags = selectedTags.filter(
                            (selectedTag) => selectedTag.id !== tag.id,
                          );

                          setSelectedTags(filteredTags);
                        }}
                      >
                        <Txt typography="b1" fontWeight="regular">
                          {tag.name}
                        </Txt>
                      </Chip>
                    ))}
                  </div>
                )}
              </div>
              <Spacing size={24} />

              <TextArea
                label="노트"
                placeholder="간단한 정보를 작성해주세요"
                className={noteInput}
                errorMessage={errors.description?.message}
                {...register('description', {
                  required: '최대 400자까지 입력할 수 있어요.',
                })}
              />
              <Spacing size={24} />
            </form>
          </div>
        </>
      )}
    </BottomSheet.Content>
  );
};

export default AddFriendBottomSheet;
