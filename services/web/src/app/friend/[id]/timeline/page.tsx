'use client';
import Timeline from '@app/friend/timeline/components/Timeline';
import {
  useGetFriendPrevSchedule,
  useGetFriendUpComingSchedule,
} from '@app/friend/timeline/hooks/useGetNearSchedule';

function TimelinePage({ params }: { params: { id: string } }) {
  const { data: prevData } = useGetFriendPrevSchedule(parseInt(params.id));
  const { data: upcomingData } = useGetFriendUpComingSchedule(parseInt(params.id));
  const concatSchedules = [];

  concatSchedules.push(prevData.schedules);
  concatSchedules.push(upcomingData.schedules);
  const uniqueSchedules = [...new Set(concatSchedules)];

  return <Timeline concatSchedules={uniqueSchedules[0]} />;
}

export default TimelinePage;
