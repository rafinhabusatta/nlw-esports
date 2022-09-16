// 18:00 -> ["18", "00"] -> [18, 00]
export function convertMinutesToHourString(timeInMinutes: number) {
  const hour = Math.floor(timeInMinutes / 60);
  const minutes = timeInMinutes % 60;
  const hourString = `${hour}:${minutes}`;
  return `${String(hour).padStart(2,'0')}:${String(minutes).padStart(2,'0')}`;
}