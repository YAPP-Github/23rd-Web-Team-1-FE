'use client';

import { useState, useCallback } from 'react';
import { HorizonScroller, Chip, List, InfiniteScroll } from '@linker/lds';

import NewsItem from './NewsItem';
import { wrapper, chipWrapper, chip, newsListWrapper } from './NewsList.css';

import { kyClient } from '/Users/yoon/Desktop/23rd-Web-Team-1-FE/packages/ky';

interface Tag {
  id: number;
  name: string;
}

export interface News {
  id: number;
  title: string;
  newsProvider: string;
  newsUrl: string;
  thumbnailUrl: string;
}

interface NewsListProps {
  recommendations: Array<{
    tags: Tag[];
    newsList: News[];
    nextCursor: number | null;
    hasNext: boolean;
  }>;
}

/**
 * @todo
 * - 스크롤 없을때 onLoadMore 호출
 * - load중에는 onLoadMore가 다시 호출되지 않도록 막기
 * - 서버에서 더 줄 news 없을때는 더이상 fetching 하지 않기
 * - 최대 100개까지만 fetching 하기
 */

function getNewsList(tagIds: number[], cursorId: number, limit = 20) {
  const params = new URLSearchParams();

  tagIds.forEach((tagId) => params.append('tagIds', tagId.toString()));
  params.append('cursorId', cursorId.toString());
  params.append('limit', limit.toString());

  return kyClient.get<{
    tags: Tag[];
    newsList: News[];
    nextCursor: number | null;
    hasNext: boolean;
  }>('/v1/news', {
    searchParams: params,
  });
}

function NewsList({ recommendations: recommendationsProp }: NewsListProps) {
  const [recommendations, setRecommendations] = useState(recommendationsProp);
  const [selectedTagsIndex, setSelectedTagsIndex] = useState(0);

  const handleClickTag = (index: number) => {
    setSelectedTagsIndex(index);
  };

  const handleLoadMore = useCallback(async () => {
    const currentRecommendation = recommendations[selectedTagsIndex];
    const currentNewsList = currentRecommendation.newsList;
    const tagIds = currentRecommendation.tags.map((tag) => tag.id);
    const cursorId = currentRecommendation.nextCursor;
    const limit = Math.min(100 - currentNewsList.length, 20);

    if (!cursorId || currentNewsList.length >= 100) {
      return;
    }

    try {
      const { newsList, nextCursor, hasNext } = await getNewsList(tagIds, cursorId, limit);
      const newRecommendation = {
        ...currentRecommendation,
        newsList: [...currentNewsList, ...newsList],
        nextCursor,
        hasNext,
      };

      setRecommendations((prevRecommendations) => [
        ...prevRecommendations.slice(0, selectedTagsIndex),
        newRecommendation,
        ...prevRecommendations.slice(selectedTagsIndex + 1),
      ]);
    } catch (_) {
      /** error handling */
    }
  }, [recommendations, selectedTagsIndex]);

  return (
    <List className={wrapper}>
      <HorizonScroller className={chipWrapper}>
        {recommendations.map((recommendation, index) => (
          <Chip
            key={index}
            className={chip}
            selected={selectedTagsIndex === index}
            onClick={(event) => {
              event.preventDefault();
              handleClickTag(index);
            }}
          >
            {recommendation.tags.length === 1 ? recommendation.tags[0].name : '전체'}
          </Chip>
        ))}
      </HorizonScroller>
      <ul className={newsListWrapper}>
        <InfiniteScroll onLoadMore={handleLoadMore}>
          {recommendations[selectedTagsIndex].newsList.map((news) => (
            <NewsItem key={news.id} news={news} />
          ))}
        </InfiniteScroll>
      </ul>
    </List>
  );
}

export default NewsList;
