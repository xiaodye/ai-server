import { Injectable } from '@nestjs/common';
import { eq } from 'drizzle-orm';
import { usersTable } from '../db/schema/schema';
import { db } from '../db/supabase';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async createUser() {
    const user: typeof usersTable.$inferInsert = {
      name: 'lansen',
      age: 30,
      email: 'senlan@example.com',
      password: '123456',
    };

    await db.insert(usersTable).values(user);
    console.log('New user created!');
    const users = await db.select().from(usersTable);
    console.log('Getting all users from the database: ', users);
    /*
    const users: {
      id: number;
      name: string;
      age: number;
      email: string;
    }[]
    */
    await db
      .update(usersTable)
      .set({
        age: 31,
      })
      .where(eq(usersTable.email, user.email));
    console.log('User info updated!');

    await db.delete(usersTable).where(eq(usersTable.email, user.email));
    console.log('User deleted!');

    return {
      code: 200,
      message: 'success',
      data: users,
    };
  }
}
