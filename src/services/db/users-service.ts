import { db } from '../../db';
import { lower, users } from '../../db/schema';

const checkIfUserExistsByEmail = async ({ email }: { email: string }) => {
  return db.query.users.findFirst({
    columns: { id: true, name: true, email: true, picture: true },
    where: (users, { eq }) => eq(lower(users.email), email.toLowerCase()),
  });
};

const addUser = async ({
  name,
  email,
  picture,
}: {
  name: string;
  email: string;
  picture: string;
}) => {
  const insertedUser = await db
    .insert(users)
    .values({ name, email, picture })
    .returning({
      id: users.id,
      name: users.name,
      email: users.email,
      picture: users.picture,
    });

  return insertedUser[0];
};

export { checkIfUserExistsByEmail, addUser };
