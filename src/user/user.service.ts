import { Injectable } from '@nestjs/common';
import { db } from 'db/supabase';
import { eq } from 'drizzle-orm';
import { users } from 'drizzle/schema';
import { CreateUserDto, UpdateUserDto } from './user.dto';

@Injectable()
export class UserService {
  async create(createUserDto: CreateUserDto) {
    const user: typeof users.$inferInsert = {
      name: createUserDto.name,
      age: createUserDto.age,
      email: createUserDto.email,
      password: createUserDto.password,
    };

    await db.insert(users).values(user);

    return {
      code: 200,
      message: 'success',
      data: user,
    };
  }

  async findAll() {
    const userList = await db.select().from(users);

    return {
      code: 200,
      message: 'success',
      data: userList,
    };
  }

  async findOne(id: number) {
    const userList = await db.select().from(users).where(eq(users.id, id));

    return {
      code: 200,
      message: 'success',
      data: userList[0],
    };
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await db
      .update(users)
      .set(updateUserDto)
      .where(eq(users.id, id));

    return {
      code: 200,
      message: 'success',
      data: user,
    };
  }

  async remove(id: number) {
    await db.delete(users).where(eq(users.id, id));

    return {
      code: 200,
      message: 'success',
    };
  }
}
