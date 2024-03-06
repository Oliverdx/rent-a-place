import dayjs from "dayjs";

export function getDatesOfWeek(currentDay: dayjs.Dayjs): string[] {
  const datesOfWeek: string[] = [];

  for (let i = 0; i < 7; i++) {
    datesOfWeek.push(currentDay.add(i, 'day').toString());
  }

  return datesOfWeek;
}
