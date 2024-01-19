import { ky } from '@linker/ky';
import { List } from '@linker/lds';
import Image from 'next/image';
import Link from 'next/link';

import Schedule from './Schedule';

interface News {
  tag: {
    id: number;
    name: string;
  };
  contents: Array<{
    id: number;
    title: string;
    newsProvider: string;
    thumbnailUrl: string;
  }>;
}

interface RecommendationDTO {
  id: number;
  title: string;
  profileImgUrl: string;
  startDateTime: string;
  endDateTime: string;
  recommendations: News[];
}

const getRecommendation = () => {
  return ky.get<RecommendationDTO>('/v1/schedules/upcoming/recommendation');
};

async function Recommendation() {
  const { title, profileImgUrl, startDateTime, endDateTime } = await getRecommendation();

  return (
    <List>
      {/* @todo 일정상세페이지 href 추가필요 */}
      <Link href="">
        <List.Header
          title="대화 주제 추천 받기"
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
      </Link>
      <Schedule
        title={title}
        profileImgUrl={profileImgUrl}
        startDateTime={startDateTime}
        endDateTime={endDateTime}
      />
    </List>
  );
}

export default Recommendation;
