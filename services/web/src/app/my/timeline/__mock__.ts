interface TimelineItemProps {
  title: string;
  time: string;
  member: string;
  hashtag?: string[];
  memo?: string;
}
export const timelineMockData: TimelineItemProps[] = [
  {
    title: '이지우 커피챗',
    time: '오후 4:00- 6:00',
    member: '이지우 외 + 3명',
    hashtag: ['스포츠', '골프', '테니스'],
    memo: '선생님이 너무 친절하시고 프라이빗한 공간이라 친구와 함께 얘기하면서 즐겁게 체험즐겁게 체험즐...',
  },
  {
    title: '이지우 커피챗',
    time: '오후 4:00- 6:00',
    member: '이지우 외 + 3명',
    memo: '선생님이 너무 친절하시고 프라이빗한 공간이라 친구와 함께 얘기하면서 즐겁게 체험즐겁게 체험즐...',
  },
  {
    title: '이지우 커피챗',
    time: '오후 4:00- 6:00',
    member: '이지우 외 + 3명',
  },
];

export default timelineMockData;
