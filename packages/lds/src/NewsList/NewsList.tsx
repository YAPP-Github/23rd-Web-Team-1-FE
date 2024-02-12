'use client';

import { useState } from 'react';

import { HorizonScroller, Chip, List } from '@linker/lds';

import NewsItem from './NewsItem';
import type { News } from './NewsItem';
import { wrapper, chipWrapper, chip } from './NewsList.css';

interface Tag {
  id: number;
  name: string;
}

interface NewsListProps {
  newsList: Array<{
    tag: Tag;
    contents: News[];
  }>;
}

function NewsList({ newsList }: NewsListProps) {
  const [selectedTag, setSelectedTag] = useState(newsList[0].tag.id);
  const currentNews = newsList.find((news) => news.tag.id === selectedTag)?.contents ?? [];

  const handleClickTag = (tagId: number) => {
    setSelectedTag(tagId);
  };

  return (
    <List className={wrapper}>
      <HorizonScroller className={chipWrapper}>
        {newsList.map((news) => (
          <Chip
            key={news.tag.id}
            className={chip}
            selected={selectedTag === news.tag.id}
            onClick={(event) => {
              event.preventDefault();
              handleClickTag(news.tag.id);
            }}
          >
            {news.tag.name}
          </Chip>
        ))}
      </HorizonScroller>
      <NewsItem news={currentNews} />
    </List>
  );
}

export default NewsList;
