export class CategoryDto {
  categoryId!: string;
  categoryName!: string;

  constructor(data?: CategoryDto) {
    if (data) Object.assign(this, data);
  }
}
