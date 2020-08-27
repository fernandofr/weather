import { dateFormatWeekday } from './dateFormatOptions';

interface convertProps {
  unixDate: number;
  unixTimezone?: number;
}

function convertUnixToDayAndMonth({ unixDate }: convertProps): string {
  const date = new Date(unixDate * 1000);
  return dateFormatWeekday.format(date);
}

export default convertUnixToDayAndMonth;
