import { List } from '@linker/lds';
import { colors } from '@linker/styles';

import { friendProfileWrapper } from './FriendProfile.css';

export const FriendProfile = () => {
  return (
    <section className={friendProfileWrapper}>
      <List>
        <List.Header
          typograyphy="p1"
          color={colors.black}
          fontWeight="bold"
          title={'관심사 주제'}
        ></List.Header>
      </List>
      <List>
        <List.Header
          typograyphy="p1"
          color={colors.black}
          fontWeight="bold"
          title={'개인정보'}
        ></List.Header>
      </List>
      <List>
        <List.Header
          typograyphy="p1"
          color={colors.black}
          fontWeight="bold"
          title={'전화번호'}
        ></List.Header>
      </List>
    </section>
  );
};
