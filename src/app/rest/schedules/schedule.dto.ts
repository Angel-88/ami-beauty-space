export class ScheduleDto {
  scheduleId!: string;
  scheduleName!: string;

  constructor(data?: ScheduleDto) {
    if (data) Object.assign(this, data);
  }
}
