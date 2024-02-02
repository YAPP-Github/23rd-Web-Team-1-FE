'use client';

import { Chip, HorizonScroller } from '@linker/lds';
import { useState } from 'react';

import { chipWrapper, chip } from './Issue.css';
import News from './News';
import type { TrendDTO } from './Trend';

interface IssueProps {
  trends: TrendDTO[];
}

function Issue({ trends }: IssueProps) {
  const [selectedTag, setSelectedTag] = useState(trends[0].tag.id);
  const currentNews = trends.find((trend) => trend.tag.id === selectedTag)?.news ?? [];

  const handleClickTag = (tagId: string) => {
    setSelectedTag(tagId);
  };

  return (
    <>
      <HorizonScroller className={chipWrapper}>
        {trends.map((trend) => (
          <Chip
            key={trend.tag.id}
            className={chip}
            selected={selectedTag === trend.tag.id}
            onClick={(event) => {
              event.preventDefault();
              handleClickTag(trend.tag.id);
            }}
          >
            {trend.tag.name}
          </Chip>
        ))}
      </HorizonScroller>
      <News news={currentNews} />
    </>
  );
}

export default Issue;
