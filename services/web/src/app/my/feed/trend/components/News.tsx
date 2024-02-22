import { NewsDTO } from '@/types/news';
import { Txt } from '@linker/lds';
import { colors } from '@linker/styles';
import Image from 'next/image';

import { newsWrapper, itemWrapper, newsInfo, newsTitle, newsImage } from './News.css';

interface NewsProps {
  newsList: NewsDTO[];
}

function News({ newsList }: NewsProps) {
  return (
    <ul className={newsWrapper}>
      {newsList.map((news) => (
        <li key={news.id} className={itemWrapper}>
          <div className={newsInfo}>
            <Txt typography="p3" className={newsTitle}>
              {news.title}
            </Txt>
            <Txt typography="p3" color={colors.gray700}>
              {news.newsProvider}
            </Txt>
          </div>
          <Image
            className={newsImage}
            src={news.thumbnailUrl}
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
