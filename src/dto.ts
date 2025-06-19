import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsNumber()
  age: number;

  @IsString()
  @IsOptional()
  email?: string;
}
