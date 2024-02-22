import { NewsDTO } from '@/types/news';
import { TagDTO } from '@/types/tag';
import { ky } from '@linker/ky';
import { List } from '@linker/lds';
import Image from 'next/image';
import Link from 'next/link';

import { getTokens } from '@utils/token/server';

import Issue from './Issue';
import MoreButton from './MoreButton';

export interface TrendDTO {
  recommendations: Array<{
    tags: TagDTO[];
    newsList: {
      data: NewsDTO[];
      nextCursor: number;
      hasNext: boolean;
    };
  }>;
}

function getTrendNews() {
  return ky.get<TrendDTO>('/v1/news/trend?size=3');
}

async function Trend() {
  const accessToken = getTokens().accessToken;

  if (accessToken == null) {
    return;
  }

  const { recommendations } = await getTrendNews();

  return (
    <List>
      <Link href="">
        <List.Header
          title="트렌드 핫 이슈"
          typograyphy="h7"
          rightAddon={
            <button type="button">
              <Image
                src="https://static.im-linker.com/right-arrow-mono.png"
                alt=""
                width={28}
                height={28}
              />
            </button>
          }
        />
        <Issue recommendations={recommendations} />
        <MoreButton />
      </Link>
    </List>
  );
}

export default Trend;
