'use client';

import { clsx } from 'clsx';

import {
  minimizeStyle,
  profileWrapper,
  profileImageWrapper,
  profileImage,
  profileInfo,
  name,
  job,
  tag,
} from './MyProfile.css';

interface ProfileProps {
  isMinimize: boolean;
}

function MyProfile({ isMinimize }: ProfileProps) {
  return (
    <section className={clsx(profileWrapper, isMinimize && minimizeStyle)}>
      <article className={clsx(profileImageWrapper, isMinimize && minimizeStyle)}>
        <img
          className={clsx(profileImage)}
          src="https://thumb.mtstarnews.com/06/2022/02/2022022517263696411_3.jpg"
          alt="main profile"
        />
      </article>
      <article className={profileInfo}>
        <h2 className={clsx(name, isMinimize && minimizeStyle)}>김하나</h2>
        <h3 className={clsx(job, isMinimize && minimizeStyle)}>UXUI 디자인 ∙ 삼성전자</h3>
        <h4 className={clsx(tag, isMinimize && minimizeStyle)}>#골프 #재테크 #금융 #테니스</h4>
      </article>
    </section>
  );
}

export default MyProfile;
