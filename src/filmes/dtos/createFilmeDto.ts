import { IsNotEmpty } from 'class-validator';

export class CreateFilmeDTO {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  year: number;

  @IsNotEmpty()
  description: string;
}
