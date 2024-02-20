import { List, Txt } from '@linker/lds';
import { colors } from '@linker/styles';
import Image from 'next/image';

import { friendProfileWrapper, interestWrapper, interestItemWrapper } from './FriendProfile.css';

interface FriendProfileProps {
  id: number;
  name: string;
  profileImgUrl: string | null;
  phoneNumber: string;
  job: string;
  association: string;
  tags: Tag[];
  email: string;
}
interface Tag {
  id: number;
  name: string;
}

export const FriendProfile = ({
  id,
  name,
  profileImgUrl,
  phoneNumber,
  job,
  association,
  tags,
  email,
}: FriendProfileProps) => {
  return (
    <section className={friendProfileWrapper}>
      <List>
        <List.Header
          typograyphy="p1"
          color={colors.black}
          fontWeight="bold"
          title={'전화번호'}
        ></List.Header>
        <Txt typography="p2" color={colors.gray700} fontWeight="regular">
          {phoneNumber}
        </Txt>
      </List>
      <List>
        <List.Header
          typograyphy="h7"
          color={colors.black}
          fontWeight="bold"
          title={'경력'}
        ></List.Header>
        <Txt typography="p1" color={colors.black} fontWeight="bold">
          {association}
        </Txt>
      </List>
      <List>
        <List.Header
          typograyphy="h7"
          color={colors.black}
          fontWeight="bold"
          title={'관심주제'}
        ></List.Header>
        <article className={interestWrapper}>
          <div className={interestItemWrapper}>
            <Image
              src="https://static.im-linker.com/images/Startup.png"
              width={30}
              height={30}
              alt="startup"
            />
            <Txt typography="p1" color={colors.black} fontWeight="regular">
              스타트업
            </Txt>
          </div>
          <div className={interestItemWrapper}>
            <Image
              src="https://static.im-linker.com/images/Startup.png"
              width={30}
              height={30}
              alt="startup"
            />
            <Txt typography="p1" color={colors.black} fontWeight="regular">
              스타트업
            </Txt>
          </div>
        </article>
      </List>
      <List>
        <List.Header
          typograyphy="p1"
          color={colors.black}
          fontWeight="bold"
          title={'이메일'}
        ></List.Header>
        <Txt typography="p2" color={colors.gray700} fontWeight="regular">
          {email}
        </Txt>
      </List>
      <List>
        <List.Header
          typograyphy="p1"
          color={colors.black}
          fontWeight="bold"
          title={'노트'}
        ></List.Header>
        <Txt typography="p2" color={colors.gray700} fontWeight="regular">
          asdf
        </Txt>
      </List>
    </section>
  );
};
