'use client';

import { useState, useCallback, useMemo } from 'react';

import { HorizonScroller, Chip, List, InfiniteScroll } from '@linker/lds';

import NewsItem from './NewsItem';
import { wrapper, chipWrapper, chip, newsListWrapper } from './NewsList.css';
import { ky } from '../../../ky';

interface Tag {
  id: number;
  name: string;
}

export interface News {
  id: number;
  title: string;
  newsProvider: string;
  thumbnailUrl: string;
}

interface NewsListProps {
  recommendations: Array<{
    tag: Tag;
    contents: News[];
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

  return ky.get<
    Array<{
      tag: Tag;
      contents: News[];
      nextCursor: number;
    }>
  >('/v1/news', {
    searchParams: params,
  });
}

function NewsList({ recommendations: recommendationsProp }: NewsListProps) {
  const [recommendations, setRecommendations] = useState(recommendationsProp);
  const [selectedTagId, setSelectedTagId] = useState(recommendations[0].tag.id);

  const handleClickTag = (tagId: number) => {
    setSelectedTagId(tagId);
  };

  const currentRecommendationIndex = useMemo(
    () => recommendations.findIndex((recommendation) => recommendation.tag.id === selectedTagId),
    [recommendations, selectedTagId],
  );

  const currentRecommendation = useMemo(() => {
    const currentRecommendation = recommendations.find(
      (recommendation) => recommendation.tag.id === selectedTagId,
    );

    return currentRecommendation;
  }, [recommendations, selectedTagId]);

  const currentNewsList = useMemo(
    () => currentRecommendation?.contents ?? [],
    [currentRecommendation],
  );

  const handleLoadMore = useCallback(async () => {
    const cursorId = currentNewsList[currentNewsList.length - 1].id;

    try {
      const result = await getNewsList([selectedTagId], cursorId);
      const { tag, contents } = result[0];

      const newRecommendation = {
        tag,
        contents: [...currentNewsList, ...contents],
      };

      if (currentRecommendationIndex > 0) {
        setRecommendations((prevRecommendations) => [
          ...prevRecommendations.slice(0, currentRecommendationIndex),
          newRecommendation,
          ...prevRecommendations.slice(currentRecommendationIndex + 1),
        ]);
      }
    } catch (_) {
      /** error handling */
    }
  }, [currentNewsList, currentRecommendationIndex, selectedTagId]);

  return (
    <List className={wrapper}>
      <HorizonScroller className={chipWrapper}>
        {recommendations.map((recommendation) => (
          <Chip
            key={recommendation.tag.id}
            className={chip}
            selected={selectedTagId === recommendation.tag.id}
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
        <InfiniteScroll onLoadMore={handleLoadMore}>
          {currentNewsList.map((news) => (
            <NewsItem key={news.id} news={news} />
          ))}
        </InfiniteScroll>
      </ul>
    </List>
  );
}

export default NewsList;
