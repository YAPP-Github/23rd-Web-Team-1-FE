'use client';
import { Txt } from '@linker/lds';
import { Icon } from '@linker/lds';
import { colors } from '@linker/styles';
import { useRouter } from 'next/navigation';

import {
  timelineDetailNoteHeader,
  timelineDetailNoteWrapper,
  timelineDetailNoteBody,
  timelineDetailNoteHeaderText,
} from './NoteDetail.css';

export const NoteDetail = () => {
  const router = useRouter();
  const handleBackClick = () => {
    router.push('/schedule/1');
  };

  return (
    <div className={timelineDetailNoteWrapper}>
      <div className={timelineDetailNoteHeader}>
        <div>
          <button type="button" onClick={handleBackClick}>
            <Icon name="back" />
          </button>
        </div>
        <div className={timelineDetailNoteHeaderText}>
          <Txt typography="p1" fontWeight="bold" color={colors.gray900}>
            노트
          </Txt>
        </div>
      </div>
      <div className={timelineDetailNoteBody}>
        <Txt typography="p1" fontWeight="regular" color={colors.gray900}>
          2020년 8월 3일 공식 출범한 토스페이먼츠는 대한민국 전자결제 시장을 새롭게 바꿔나가는 것을
          목표로 합니다. 온라인과 모바일 커머스 시장의 확대에 따라 일상 생활에서 뗄 수 없는 결제
          서비스, 토스페이먼츠가 기술 및 비즈니스 모델 혁신을 토스페이먼츠가 기술 및 비즈니스 모델
          혁신을 토스페이먼츠가 기술 및 비즈니스 모델 혁신을토스페이먼츠가 기술 및 비즈니스 모델
          혁신을토스페2020년 8월 3일 공식 출범한 토스페이먼츠는 대한민국 전자결제 시장을 새롭게
          바꿔나가는 것을 목표로 합니다. 온라인과 모바일 커머스 시장의 확대에 따라 일상 생활에서 뗄
          수 없는 결제 서비스, 토스페이먼츠가 기술 및 비즈니스 모델 혁신을 토스페이먼츠가 기술 및
          비즈니스 모델 혁신을 토스페이먼츠가 기술 및 비즈니스 모델 혁신을토스페이먼없는 결제
          서비스, 토스페이먼츠가 기술 및 비즈니스 모델 혁신을 토스페이먼츠가 기술 및 비즈니스 모델
          혁신을 토스페이먼츠가 기술 및 비즈니스 모델 혁신을토스페이먼없는 결제 서비스,
          토스페이먼츠가 기토스페이먼츠가
        </Txt>
      </div>
    </div>
  );
};
