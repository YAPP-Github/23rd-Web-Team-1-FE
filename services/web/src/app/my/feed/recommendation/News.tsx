import { Txt } from '@linker/lds';
import { colors } from '@linker/styles';
import Image from 'next/image';

import { wrapper, tagWrapper, newsItem, newsContent, newsTitle, newsImage } from './News.css';
import type { NewsDTO } from './Recommendation';

interface NewsProps {
  tag: NewsDTO['tag'];
  contents: NewsDTO['contents'];
}

function News({ tag, contents }: NewsProps) {
  return (
    <div className={wrapper}>
      <div className={tagWrapper}>
        <Image
          src="https://static.im-linker.com/question.png"
          width={28}
          height={28}
          alt="question-icon"
        />
        <p>
          <Txt typography="b1">{tag.name}</Txt>
          <Txt typography="b1" color="#8b8b8b">
            에 관심이 있어요
          </Txt>
        </p>
      </div>
      <ul>
        {contents.map((content) => (
          <li key={content.id} className={newsItem}>
            <div className={newsContent}>
              <Txt className={newsTitle} typography="p3">
                {content.title}
              </Txt>
              <Txt typography="p3" color={colors.gray700}>
                {content.newsProvider}
              </Txt>
            </div>
            <Image
              className={newsImage}
              src="https://postfiles.pstatic.net/MjAyMjA5MTdfMTE1/MDAxNjYzMzc3MDc1MTA2.bToArUww9E15OT_Mmt5mz7xAkuK98KGBbeI_dsJeaDAg.WJAhfo5kHehNQKWLEWKURBlZ7m_GZVZ9hoCBM2b_lL0g.JPEG.drusty97/IMG_0339.jpg?type=w966"
              width={74}
              height={74}
              alt="news-thumbnail"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default News;
