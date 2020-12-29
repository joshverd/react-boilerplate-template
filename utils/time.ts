import dayjs from 'dayjs';
import UTC from 'dayjs/plugin/utc';

dayjs.extend(UTC);

export default {
  getTime,
  utc,
}

// Gets current UTC time formatted as an ISO String
function getTime(): string {
  return dayjs.utc().toISOString();
}

// Creates a UTC dayjs object using the dayjs UTC extended object
function utc(time?: string | number | Date, format?: string): dayjs.Dayjs {
  if(time) return dayjs.utc(time, format);

  return dayjs.utc();
}
