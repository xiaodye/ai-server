import { Injectable } from '@nestjs/common';
import { db } from './db';
import { usersTable } from './db/schema';
import { eq } from 'drizzle-orm';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async createUser() {
    const user: typeof usersTable.$inferInsert = {
      name: 'John',
      age: 30,
      email: 'lansen@example.com',
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
