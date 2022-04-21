export class TotalPriceByClientDto {
  clientName!: string;
  clientId!: string;
  price!: string;

  constructor(data?: TotalPriceByClientDto) {
    if (data) Object.assign(this, data);
  }
}
