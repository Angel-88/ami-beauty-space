export class MasterDto {
  masterId!: string;
  masterName!: string;
  masterPhone!: string;
  masterCategory!: string;
  information!: string;

  constructor(data?: MasterDto) {
    if (data) Object.assign(this, data);
  }
}
