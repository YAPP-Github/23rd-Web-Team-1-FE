'use client';

import { useState } from 'react';

import { HorizonScroller, Chip, List } from '@linker/lds';

import NewsItem from './NewsItem';
import type { News } from './NewsItem';
import { wrapper, chipWrapper, chip, newsListWrapper } from './NewsList.css';

interface Tag {
  id: number;
  name: string;
}

interface NewsListProps {
  recommendations: Array<{
    tag: Tag;
    contents: News[];
  }>;
}

function NewsList({ recommendations }: NewsListProps) {
  const [selectedTag, setSelectedTag] = useState(recommendations[0].tag.id);
  const currentNewsList =
    recommendations.find((recommendation) => recommendation.tag.id === selectedTag)?.contents ?? [];

  const handleClickTag = (tagId: number) => {
    setSelectedTag(tagId);
  };

  return (
    <List className={wrapper}>
      <HorizonScroller className={chipWrapper}>
        {recommendations.map((recommendation) => (
          <Chip
            key={recommendation.tag.id}
            className={chip}
            selected={selectedTag === recommendation.tag.id}
            onClick={(event) => {
              event.preventDefault();
              handleClickTag(recommendation.tag.id);
            }}
          >
            {recommendation.tag.name}
          </Chip>
        ))}
      </HorizonScroller>
      <ul className={newsListWrapper}>
        {currentNewsList.map((news) => (
          <NewsItem key={news.id} news={news} />
        ))}
      </ul>
    </List>
  );
}

export default NewsList;
