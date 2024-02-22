import { Tag } from '@/types/contact';
import { isDisplaySelectTagAtom, selectedTagsAtom } from '@features/contact/store';
import { BottomSheet, Chip, TextButton, Txt } from '@linker/lds';
import { colors } from '@linker/styles';
import { useSetAtom } from 'jotai';
import { useState } from 'react';

import { container, interestTagWrapper } from './SelectTag.css';
import { INTEREST_TAGS } from './constants';

const SelectTagBottomSheet = () => {
  const setSelectedTags = useSetAtom(selectedTagsAtom);
  const setIsDisplay = useSetAtom(isDisplaySelectTagAtom);

  const [tags, setTags] = useState<Tag[]>([]);

  return (
    <>
      <BottomSheet.ButtonGroup>
        <TextButton
          typography="b1"
          fontWeight="medium"
          onClick={() => {
            setIsDisplay(false);
          }}
        >
          뒤로
        </TextButton>

        <TextButton
          typography="b1"
          type="submit"
          onClick={() => {
            setIsDisplay(false);
            setSelectedTags(tags);
          }}
        >
          저장
        </TextButton>
      </BottomSheet.ButtonGroup>

      <div className={container}>
        <Txt as="p" typography="p3" fontWeight="regular" color={colors.gray600}>
          지인이 관심있어하는 주제를 선택해주세요
        </Txt>

        <div className={interestTagWrapper}>
          {INTEREST_TAGS.map((tag: Tag) => (
            <Chip
              key={tag.id}
              style={{
                border: `1px solid ${tags.includes(tag) ? colors.blue500 : colors.gray000}`,
                backgroundColor: tags.includes(tag) ? colors.blue050 : '',
              }}
              onClick={() => {
                setTags((prev) => {
                  if (prev?.find((prevTag) => prevTag.id === tag.id)) {
                    return prev?.filter((prevTag) => prevTag.id !== tag.id);
                  }

                  return [...(prev || []), tag];
                });
              }}
            >
              <Txt
                typography="b1"
                fontWeight="regular"
                color={tags.includes(tag) ? colors.blue500 : ''}
              >
                {tag.name}
              </Txt>
            </Chip>
          ))}
        </div>
      </div>
    </>
  );
};

export default SelectTagBottomSheet;
