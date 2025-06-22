import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: '用户名',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    description: '年龄',
  })
  @IsNotEmpty()
  @IsNumber()
  age: number;

  @ApiProperty({
    description: '邮箱',
  })
  @IsNotEmpty()
  @IsString()
  email: string;

  @ApiProperty({
    description: '密码',
  })
  @IsNotEmpty()
  @IsString()
  password: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
