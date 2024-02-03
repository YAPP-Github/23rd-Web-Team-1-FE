'use client';

import { List } from '@linker/lds';
import { Icon } from '@linker/lds';
import { Txt } from '@linker/lds';
import { colors } from '@linker/styles';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';

import { InviationItem } from './InvitationItem/InvitationItem';
import {
  scheduleHeaderIconWrapper,
  scheduleHeaderWrapper,
  scheduleCalendarWrapper,
  scheduleCalendarDropDownWrapper,
  scheduleWrapper,
  scheduleTitleContainer,
  scheduleColorDivider,
  scheduleTitleWrapper,
  scheduleInvitationWrapper,
  scheduleTitleTimeWrapper,
  scheduleNoteWrapper,
  scheduleCalendarDropDownElipse,
  calendarElipseColor,
} from './Schedule.css';

export const Schedule = () => {
  const router = useRouter();

  const handleCloseClick = () => {
    router.push(`/my/timeline`);
  };
  const handleEditClick = () => {};
  const handleMoreClick = () => {};
  const handleNoteClick = () => {
    router.push('/schedule/1/note');
  };

  return (
    <section className={scheduleWrapper}>
      <header className={scheduleHeaderWrapper}>
        <button onClick={handleCloseClick}>
          <Icon name="close" size={32} />
        </button>
        <div className={scheduleHeaderIconWrapper}>
          <button onClick={handleEditClick}>
            <Icon name="pencil" size={28} />
          </button>
          <button onClick={handleMoreClick}>
            <Icon name="more" size={32} />
          </button>
        </div>
      </header>
      <article className={scheduleTitleContainer}>
        <div className={scheduleTitleWrapper}>
          <div className={scheduleColorDivider} style={{ backgroundColor: '#58DB67 ' }}></div>
          <Txt typography="h5">
            이지우 커피챗 진행이지우 커피챗 진행이지우 커피챗 진행이지우 커피챗 진행이지우 커
            🥹🥹✨✨
          </Txt>
        </div>
        <div className={scheduleTitleTimeWrapper}>
          <Txt typography="p1" fontWeight="regular">
            2024. 12. 31. 목요일
          </Txt>
          <Icon name="dot" size={2.67} />
          <Txt typography="p1" fontWeight="regular">
            오후 5시 - 10시
          </Txt>
        </div>
      </article>

      <List className={scheduleCalendarWrapper}>
        <List.Header
          title={'캘린더'}
          fontWeight="regular"
          color={`${colors.gray700}`}
          typograyphy="p1"
          rightAddon={
            <button>
              <div className={scheduleCalendarDropDownWrapper}>
                <div
                  className={clsx(scheduleCalendarDropDownElipse, calendarElipseColor.birthday)}
                ></div>
                <Txt typography="p1" fontWeight="medium">
                  직장
                </Txt>
                <Icon name="down" size={20} />
              </div>
            </button>
          }
        />
      </List>
      <List className={scheduleInvitationWrapper}>
        <List.Header
          title={'초대받은 사람'}
          fontWeight="regular"
          color={`${colors.gray700}`}
          typograyphy="p1"
        />
        <InviationItem />
        <InviationItem />
        <InviationItem />
      </List>
      <List className={scheduleNoteWrapper}>
        <List.Header
          title={'노트'}
          fontWeight="regular"
          color={`${colors.gray700}`}
          typograyphy="p1"
          rightAddon={
            <button type="button" onClick={handleNoteClick}>
              <Icon name="next" size={28} />
            </button>
          }
        />
        <div style={{ WebkitLineClamp: '8' }}>
          <Txt typography="p1" fontWeight="regular" color={colors.black}>
            2020년 8월 3일 공식 출범한 토스페이먼츠는 대한민국 전자결제 시장을 새롭게 바꿔나가는
            것을 목표로 합니다. 온라인과 모바일 커머스 시장의 확대에 따라 일상 생활에서 뗄 수 없는
            결제 서비스, 토스페이먼츠가 기술 및 비즈니스 모델 혁신을 토스페이먼츠가 기술 및 비즈니스
            모델 혁신을 토스페이먼츠가 기술 및 비즈니스 모델 혁신을토스페이먼츠가 기술 및 비즈니스
            모델 혁신을토스페2020년 8월 3일 공식 출범한 토스페이먼츠는 대한민국 전자결제 시장을
            새롭게 바꿔나가는 것을 목표로 합니다. 온라인과 모바일 커머스 시장의 확대에 따라 일상
            생활에서 뗄 수 없는 결제 서비스, 토스페이먼츠가 기술 및 비즈니스 모델 혁신을
            토스페이먼츠가 기술 및 비즈니스 모델 혁신을 토스페이먼츠가 기술 및 비즈니스 모델
            혁신을토스페이먼츠가 기술 및 비즈니스 모델 혁신을토스페
          </Txt>
        </div>
      </List>
    </section>
  );
};
