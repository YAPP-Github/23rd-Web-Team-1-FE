import { Txt } from '@linker/lds';
import { colors } from '@linker/styles';
import { clsx } from 'clsx';
import Image from 'next/image';

import {
  contactItemWrapper,
  textWrapper,
  careerTextWrapper,
  imageWrapper,
} from './ContactItem.css';

interface ContactItemProps {
  name: string;
  career: string;
  company: string;
  profileImgUrl: string;
}
function ContactItem({ name, career, company, profileImgUrl }: ContactItemProps) {
  return (
    <div className={clsx(contactItemWrapper)}>
      <div className={clsx(textWrapper)}>
        <Txt typography="p1" color={colors.grey080}>
          {name}
        </Txt>
        <div className={clsx(careerTextWrapper)}>
          <Txt typography="p4" color={colors.grey050}>
            {career}
          </Txt>
          <Txt typography="p4" color={colors.grey050}>
            .
          </Txt>
          <Txt typography="p4" color={colors.grey050}>
            {company}
          </Txt>
        </div>
      </div>
      <div className={clsx(imageWrapper)}>
        <Image src={profileImgUrl} width={50} height={50} alt="profileImg" />
      </div>
    </div>
  );
}
export default ContactItem;
