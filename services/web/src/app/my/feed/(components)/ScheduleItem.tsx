import type { Schedule } from '@/app/my/feed/(api)/feedAPI'

interface ScheduleItemProps {
  schedule: Schedule;
}

function ScheduleItem({ schedule }: ScheduleItemProps) {
  return (
    <div>ScheduleItem</div>
  );
}

export default ScheduleItem;
