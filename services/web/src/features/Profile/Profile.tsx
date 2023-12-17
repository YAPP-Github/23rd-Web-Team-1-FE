import {
  profileWrapper,
  profileImageWrapper,
  profileImage,
  profileInfo,
  name,
  job,
  tag,
} from './Profile.css'

function Profile() {
  return (
    <section className={profileWrapper}>
      <article className={profileImageWrapper}>
        <img
          className={profileImage}
          src="https://thumb.mtstarnews.com/06/2022/02/2022022517263696411_3.jpg"
          alt="main profile"
        />
      </article>
      <article className={profileInfo}>
        <h2 className={name}>김하나</h2>
        <h3 className={job}>UXUI 디자인 ∙ 삼성전자</h3>
        <h4 className={tag}>#골프 #재테크 #금융 #테니스</h4>
      </article>
    </section>
  );
}

export default Profile;
