import { NewsDTO } from '@/types/news';
import { TagDTO } from '@/types/tag';
import { NewsList } from '@features/news-list';
import { ky } from '@linker/ky';
import { BackHeader } from '@linker/lds';

import { getTokens } from '@utils/token/server';

import { recommendationResult } from './__mock__';

export interface TrendDTO {
  recommendations: Array<{
    tags: TagDTO[];
    newsList: {
      data: NewsDTO[];
      nextCursor: number | null;
      hasNext: boolean;
    };
  }>;
}

const getTrend = () => {
  return Promise.resolve(recommendationResult);

  return ky.get<TrendDTO>('/v1/news/trend');
};

async function TrendPage() {
  const accessToken = getTokens().accessToken;

  if (accessToken == null) {
    return;
  }

  const { recommendations } = await getTrend();

  return (
    <>
      <BackHeader title="트렌드 핫 이슈" />
      <NewsList recommendations={recommendations} />
    </>
  );
}

export default TrendPage;
