import { NewsDTO } from '@/types/news';
import { TagDTO } from '@/types/tag';
import { ky } from '@linker/ky';
import { IconButton, List, Spacing } from '@linker/lds';
import Link from 'next/link';

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

const getTrendNews = () => {
  return ky.get<TrendDTO>('/v1/news/trend?size=3');
};

async function Trend() {
  const { recommendations } = await getTrendNews();

  return (
    <List>
      <Link href="">
        <List.Header
          title="트렌드 핫 이슈"
          typograyphy="h7"
          rightAddon={<IconButton name="next-gray" size={24} />}
        />
        <Spacing size={16} />
        <Issue recommendations={recommendations} />
        <MoreButton />
      </Link>
    </List>
  );
}

export default Trend;
