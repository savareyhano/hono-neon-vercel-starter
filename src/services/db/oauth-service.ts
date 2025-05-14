import { db } from '../../db';
import { oauth } from '../../db/schema';

const checkIfUserHasOAuthLink = async ({
  provider,
  providerUserId,
  userId,
}: {
  provider: string;
  providerUserId: string;
  userId: string;
}) => {
  const foundUserWithOAuthLink = await db.query.oauth.findFirst({
    columns: { id: true },
    where: (oauth, { eq, and }) =>
      and(
        eq(oauth.provider, provider),
        eq(oauth.providerUserId, providerUserId),
        eq(oauth.userId, userId)
      ),
  });

  if (!foundUserWithOAuthLink) {
    return false;
  }

  return true;
};

const addOAuthLink = async ({
  provider,
  providerUserId,
  userId,
}: {
  provider: string;
  providerUserId: string;
  userId: string;
}) => {
  await db.insert(oauth).values({ provider, providerUserId, userId });
};

export { checkIfUserHasOAuthLink, addOAuthLink };
