export class TotalByCategoryDto {
  recordCategory!: string;
  totalRecordPrice!: string;

  constructor(data?: TotalByCategoryDto) {
    if (data) Object.assign(this, data);
  }
}
