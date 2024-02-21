import { Icon, Txt } from '@linker/lds';
import { colors } from '@linker/styles';
import Image from 'next/image';

import { wrapper, tagWrapper, newsItem, newsContent, newsTitle, newsImage } from './News.css';
import type { TagDTO, NewsDTO } from './Recommendation';

interface NewsProps {
  tag: TagDTO;
  newsList: NewsDTO[];
}

function News({ tag, newsList }: NewsProps) {
  return (
    <div className={wrapper}>
      <div className={tagWrapper}>
        <Icon name="question-fill-purple" size={28} />
        <p>
          <Txt typography="b1">{tag.name}</Txt>
          <Txt typography="b1" color="#8b8b8b">
            에 관심이 있어요
          </Txt>
        </p>
      </div>
      <ul>
        {newsList.map((news) => (
          <li key={news.id} className={newsItem}>
            <div className={newsContent}>
              <Txt className={newsTitle} typography="p3">
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
    </div>
  );
}

export default News;
