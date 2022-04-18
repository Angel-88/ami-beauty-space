export class ServiceDto {
  serviceId!: string;
  serviceName!: string;
  serviceCategory!: string;
  price!: string;
  description!: string;

  constructor(data?: ServiceDto) {
    if (data) Object.assign(this, data);
  }
}
