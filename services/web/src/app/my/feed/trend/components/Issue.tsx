'use client';

import { NewsDTO } from '@/types/news';
import { kyClient } from '@linker/ky';
import { Chip, HorizonScroller } from '@linker/lds';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

import { chipWrapper, chip } from './Issue.css';
import News from './News';
import type { TrendDTO } from './Trend';

interface IssueProps {
  recommendations: TrendDTO['recommendations'];
}

function Issue({ recommendations }: IssueProps) {
  const [selectedTagIndex, setSelectedTagIndex] = useState(0);

  const { data } = useQuery<TrendDTO, Error, NewsDTO[]>({
    queryKey: ['trend', selectedTagIndex],
    queryFn: () => {
      const tagIds = recommendations[selectedTagIndex].tags.map((tag) => tag.id);
      const size = 3;

      const params = new URLSearchParams();

      tagIds.forEach((tagId) => params.append('tagIds', tagId.toString()));
      params.append('size', size.toString());

      return kyClient.get<TrendDTO>('/v1/news', {
        searchParams: params,
      });
    },
    select: (data) => data.recommendations[0].newsList.data,
    initialData: {
      recommendations,
    },
    staleTime: 0,
  });

  return (
    <>
      <HorizonScroller className={chipWrapper}>
        {recommendations.map((recommendation, index) => (
          <Chip
            key={recommendation.tags.length > 1 ? 'all' : recommendation.tags[0].id}
            className={chip}
            selected={selectedTagIndex === index}
            onClick={(event) => {
              event.preventDefault();
              setSelectedTagIndex(index);
            }}
          >
            {recommendation.tags.length > 1 ? '전체주제' : recommendation.tags[0].name}
          </Chip>
        ))}
      </HorizonScroller>
      <News newsList={data} />
    </>
  );
}

export default Issue;
