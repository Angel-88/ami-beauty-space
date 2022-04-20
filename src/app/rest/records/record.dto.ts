export class RecordDto {
  recordId!: string;
  recordClient!: string;
  recordPhone!: string;
  recordMaster!: string;
  recordService!: string;
  recordCategory!: string;
  recordSchedule!: string;
  recordDate!: string;

  constructor(data?: RecordDto) {
    if (data) Object.assign(this, data);
  }
}
