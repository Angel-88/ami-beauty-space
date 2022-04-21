export class ClientVisitsDto {
  clientName!: string;
  clientId!: string;
  clientVisits!: string;

  constructor(data?: ClientVisitsDto) {
    if (data) Object.assign(this, data);
  }
}
