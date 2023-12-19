'use client'

import { clsx } from 'clsx'

import {
  minimizeStyle,
  profileWrapper,
  profileImageWrapper,
  profileImage,
  profileInfo,
  name,
  job,
  tag,
} from './Profile.css'

interface ProfileProps {
  minimize: boolean
}

function Profile({ minimize }: ProfileProps) {
  return (
    <section className={clsx(profileWrapper, minimize && minimizeStyle)}>
      <article className={clsx(profileImageWrapper, minimize && minimizeStyle)}>
        <img
          className={clsx(profileImage, minimize && minimizeStyle)}
          src="https://thumb.mtstarnews.com/06/2022/02/2022022517263696411_3.jpg"
          alt="main profile"
        />
      </article>
      <article className={profileInfo}>
        <h2 className={clsx(name, minimize && minimizeStyle)}>김하나</h2>
        <h3 className={clsx(job, minimize && minimizeStyle)}>UXUI 디자인 ∙ 삼성전자</h3>
        <h4 className={clsx(tag, minimize && minimizeStyle)}>#골프 #재테크 #금융 #테니스</h4>
      </article>
    </section>
  );
}

export default Profile;
