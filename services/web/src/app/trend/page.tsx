import { News } from '@/types/news';
import { Tag } from '@/types/tag';
import { NewsList } from '@features/news-list';
import { ky } from '@linker/ky';
import { BackHeader } from '@linker/lds';

import { getTokens } from '@utils/token/server';

import { recommendations } from './__mock__';

function getTrends() {
  return Promise.resolve(recommendations);

  return ky.get<
    Array<{
      tags: Tag[];
      newsList: {
        data: News[];
        nextCursor: number | null;
        hasNext: boolean;
      };
    }>
  >('/v1/news/trend');
}

async function TrendPage() {
  const accessToken = getTokens().accessToken;

  if (accessToken == null) {
    return;
  }

  const recommendations = await getTrends();

  return (
    <>
      <BackHeader title="트렌드 핫 이슈" />
      <NewsList recommendations={recommendations} />
    </>
  );
}

export default TrendPage;
