export class ClientDto {
  clientId!: string;
  clientName!: string;
  phone!: string;
  email!: string;

  constructor(data?: ClientDto) {
    if (data) Object.assign(this, data);
  }
}
