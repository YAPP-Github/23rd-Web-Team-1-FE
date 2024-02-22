'use client';
import { kyClient } from '@linker/ky';
import { useSuspenseQuery } from '@tanstack/react-query';

import { GetTimelineRes } from '../types/schedule';

const getFriendPrevTimeline = (contactId: number) => {
  const res = kyClient.get<GetTimelineRes>(
    `/v1/contacts/${contactId}/schedules/near-term?limit=32&type=PREV`,
  );

  return res;
};
const getFriendUpcomingTimeline = (contactId: number) => {
  const res = kyClient.get<GetTimelineRes>(
    `/v1/contacts/${contactId}/schedules/near-term?limit=32&type=UPCOMING`,
  );

  return res;
};

const useGetFriendPrevSchedule = (contactId: number) => {
  return useSuspenseQuery<GetTimelineRes>({
    queryKey: useGetFriendPrevSchedule.getKey(contactId),
    queryFn: () => getFriendPrevTimeline(contactId),
  });
};
const useGetFriendUpComingSchedule = (contactId: number) => {
  return useSuspenseQuery<GetTimelineRes>({
    queryKey: useGetFriendUpComingSchedule.getKey(contactId),
    queryFn: () => getFriendUpcomingTimeline(contactId),
  });
};

useGetFriendPrevSchedule.getKey = (contactId: number) => {
  return ['/api/v1/contacts/schedules/near-term'];
};
useGetFriendUpComingSchedule.getKey = (contactId: number) => {
  return ['/api/v1/contacts/schedules/near-term'];
};

export { useGetFriendPrevSchedule, useGetFriendUpComingSchedule };
