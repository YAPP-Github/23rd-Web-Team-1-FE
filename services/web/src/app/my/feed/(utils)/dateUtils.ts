const weekdays = ['일', '월', '화', '수', '목', '금', '토'];

/**
 * @param {string} timestamp - ISO 8601 형식의 타임스탬프 (ex: "2023-12-30T11:18:20")
 * @param {object} options
 *   - withDot: 년, 월, 일 사이 구분자가 .일지 여부 (default value: true)
 *   - withWeekday: 요일을 표시할지 여부 (default value: true)
 * @returns {string} ex: "2023. 12. 30. 토"
 *   - 2023. 12. 30.  (withDot: true, withWeekday: false)
 *   - 2023. 12. 30. 토  (withDot: true, withWeekday: true)
 *   - 2023년 12월 30일  (withDot: false, withWeekday: false)
 *   - 2023년 12월 30일 토  (withDot: false, withWeekday: true)
 */
export function getDisplayDate(
  timestamp: string,
  { withDot, withWeekday } = { withDot: true, withWeekday: true },
) {
  const date = new Date(timestamp);

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const weekday = weekdays[date.getDay()];

  const displayYear = `${year}${withDot ? '.' : '년'}`;
  const displayMonth = ` ${month < 10 ? `0${month}` : month}${withDot ? '.' : '월'}`;
  const displayDay = ` ${day < 10 ? `0${day}` : day}${withDot ? '.' : '일'}`;
  const displayWeekday = withWeekday ? ` ${weekday}` : '';

  return `${displayYear}${displayMonth}${displayDay}${displayWeekday}`;
}
