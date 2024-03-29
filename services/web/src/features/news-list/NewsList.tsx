'use client';

import { NewsDTO } from '@/types/news';
import { TagDTO } from '@/types/tag';
import { kyClient } from '@linker/ky';
import { HorizonScroller, Chip, InfiniteScroll } from '@linker/lds';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useState, useCallback } from 'react';

import NewsItem from './NewsItem';
import { wrapper, chipWrapper, chip, newsListWrapper } from './NewsList.css';

interface NewsListProps {
  recommendations: Array<{
    tags: TagDTO[];
    newsList: {
      data: NewsDTO[];
      nextCursor: number | null;
      hasNext: boolean;
    };
  }>;
}

interface GetNewsListDTO {
  recommendations: Array<{
    tags: TagDTO[];
    newsList: {
      data: NewsDTO[];
      nextCursor: number | null;
      hasNext: boolean;
    };
  }>;
}

function NewsList({ recommendations }: NewsListProps) {
  const [selectedTagIndex, setSelectedTagIndex] = useState(0);

  const { data, fetchNextPage } = useInfiniteQuery<GetNewsListDTO, Error, NewsDTO[]>({
    queryKey: ['newsList', selectedTagIndex],
    queryFn: ({ pageParam }) => {
      const tagIds = recommendations[selectedTagIndex].tags.map((tag) => tag.id);
      const cursorId = pageParam;
      const size = 20;

      const params = new URLSearchParams();

      tagIds.forEach((tagId) => params.append('tagIds', tagId.toString()));
      if (cursorId) {
        params.append('cursorId', cursorId?.toString() ?? '');
      }
      params.append('size', size.toString());

      return kyClient.get<GetNewsListDTO>('/v1/news', {
        searchParams: params,
      });
    },
    select: (data) => data.pages.flatMap((page) => page.recommendations[0].newsList.data),
    getNextPageParam: (lastPage) => lastPage.recommendations[0].newsList.nextCursor,
    initialPageParam: recommendations[0].newsList.nextCursor,
    initialData: {
      pages: [
        {
          recommendations,
        },
      ],
      pageParams: [recommendations[0].newsList.nextCursor],
    },
    staleTime: 0,
  });

  const handleClickTag = (index: number) => {
    setSelectedTagIndex(index);
  };

  const handleLoadMore = useCallback(() => {
    if (data.length < 100) {
      fetchNextPage();
    }
  }, [data.length, fetchNextPage]);

  return (
    <div className={wrapper}>
      <HorizonScroller className={chipWrapper}>
        {recommendations.map((recommendation, index) => (
          <Chip
            key={index}
            className={chip}
            selected={selectedTagIndex === index}
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
          {data.map((news) => (
            <NewsItem key={news.id} news={news} />
          ))}
        </InfiniteScroll>
      </ul>
    </div>
  );
}

export default NewsList;
