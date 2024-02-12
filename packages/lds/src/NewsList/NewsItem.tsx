import { colors } from '@linker/styles';
import Image from 'next/image';

import { Txt } from '@linker/lds';

import { newsWrapper, itemWrapper, newsInfo, newsTitle, newsImage } from './NewsItem.css';

export interface News {
  id: number;
  title: string;
  newsProvider: string;
  thumbnailUrl: string;
}

interface NewsProps {
  news: News[];
}

function NewsItem({ news }: NewsProps) {
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

export default NewsItem;
