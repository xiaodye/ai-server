import { Injectable } from '@nestjs/common';
import { eq } from 'drizzle-orm';
import { db } from '../db/supabase';
import { users } from '../drizzle/schema';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async createUser() {
    const user: typeof users.$inferInsert = {
      name: 'john',
      age: 30,
      email: 'john@example.com',
      password: '123456',
    };

    await db.insert(users).values(user);
    console.log('New user created!');
    const userList = await db.select().from(users);
    console.log('Getting all users from the database: ', userList);
    /*
    const users: {
      id: number;
      name: string;
      age: number;
      email: string;
    }[]
    */
    await db
      .update(users)
      .set({
        age: 31,
      })
      .where(eq(users.email, user.email));
    console.log('User info updated!');

    await db.delete(users).where(eq(users.email, user.email));
    console.log('User deleted!');

    return {
      code: 200,
      message: 'success',
      data: userList,
    };
  }

  async getUsers(): Promise<{
    code: number;
    message: string;
    users: (typeof users.$inferSelect)[];
  }> {
    const userList = await db.select().from(users);

    return {
      code: 200,
      message: 'success',
      users: userList,
    };
  }
}
