import { Txt } from '@linker/lds';
import { colors } from '@linker/styles';
import Image from 'next/image';

import { newsWrapper, itemWrapper, newsInfo, newsTitle, newsImage } from './News.css';
import type { News } from './Trend';

interface NewsProps {
  news: News[];
}

function News({ news }: NewsProps) {
  return (
    <ul className={newsWrapper}>
      {news.map((item) => (
        <li key={item.id} className={itemWrapper}>
          <div className={newsInfo}>
            <Txt typography="p3" className={newsTitle}>
              {item.title}
            </Txt>
            <Txt typography="p3" color={colors.gray700}>
              {item.newsProvider}
            </Txt>
          </div>
          <Image
            className={newsImage}
            src={item.thumbnailUrl}
            width={74}
            height={74}
            alt="news-thumbnail"
          />
        </li>
      ))}
    </ul>
  );
}

export default News;
