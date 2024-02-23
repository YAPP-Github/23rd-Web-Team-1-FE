import { NewsDTO } from '@/types/news';
import { TagDTO } from '@/types/tag';
import { NewsList } from '@features/news-list';
import { ky } from '@linker/ky';

import { getTokens } from '@utils/token/server';

export interface FriendNewsListDTO {
  recommendations: Array<{
    tags: TagDTO[];
    newsList: {
      data: NewsDTO[];
      nextCursor: number | null;
      hasNext: boolean;
    };
  }>;
}

function getFriendNewsList(contactId: string, size = 20) {
  return ky.get<FriendNewsListDTO>(`/v1/contacts/${contactId}/interest/news?size=${size}`);
}

async function SubjectPage({ params }: { params: { id: string } }) {
  const accessToken = getTokens().accessToken;

  if (accessToken == null) {
    return;
  }

  const { recommendations } = await getFriendNewsList(params.id);

  return (
    <div>
      {/* <Link href="">
        <div className={addSubjectButon}>+ 관심주제 추가하기</div>
      </Link> */}
      <NewsList recommendations={recommendations} />
    </div>
  );
}

export default SubjectPage;
