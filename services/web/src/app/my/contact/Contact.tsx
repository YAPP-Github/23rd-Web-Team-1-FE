import { Txt } from '@linker/lds';
import { colors } from '@linker/styles';
import { clsx } from 'clsx';

import { wrapper, profileWrapper, totalCountWrapper } from './Contact.css';
import ContactItem from './ContactItem/ContactItem';
import contentMockdata from './__mock__';

function Contact() {
  return (
    <section className={clsx(wrapper)}>
      <article className={clsx(totalCountWrapper)}>
        <Txt typography="p4" color={colors.grey050}>
          전체
        </Txt>
        <Txt typography="p4" color={colors.grey050}>
          {contentMockdata.length}
        </Txt>
      </article>
      <article className={profileWrapper}>
        {contentMockdata.map((item) => (
          <ContactItem
            key={contentMockdata.indexOf(item)}
            name={item.name}
            career={item.career}
            company={item.company}
            profileImgUrl={item.profileImgUrl}
          />
        ))}
      </article>
    </section>
  );
}
export default Contact;
