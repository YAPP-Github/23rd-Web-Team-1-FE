import { NewsDTO } from '@/types/news';
import { Txt } from '@linker/lds';
import { colors } from '@linker/styles';
import Image from 'next/image';

import { itemWrapper, newsInfo, newsTitle, newsImage } from './NewsItem.css';

interface NewsProps {
  news: NewsDTO;
}

function NewsItem({ news }: NewsProps) {
  return (
    <li>
      <a href={news.newsUrl} target="_blank" rel="noreferrer" className={itemWrapper}>
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
      </a>
    </li>
  );
}

export default NewsItem;
