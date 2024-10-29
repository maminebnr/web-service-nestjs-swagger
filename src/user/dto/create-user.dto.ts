import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'med amine', description: 'the name of user' })
  firstName: string;

  @ApiProperty({ example: 'bnr', description: 'the lastName of user' })
  lastName: string;

  @ApiProperty({ example: 'test@gmail.com', description: 'the email of user' })
  email: string;
}
