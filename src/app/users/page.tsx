import type { Metadata } from "next";
import Link from "next/link";
import getAllUsers from "@/lib/getAllUsers";

export const metadata: Metadata = {
  title: "Users",
};
export default async function UsersPage() {
  const usersData: Promise<User[]> = getAllUsers();

  const users = await usersData;

  console.log("Hello, guess where am I?");

  const content = (
    <section>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      <br />
      {users.map((user) => {
        return (
          <>
            <p key={user.id}>
              <Link key={user.id} href={`/users/${user.id}`}>
                {user.name}
              </Link>
            </p>
            <br />
          </>
        );
      })}
    </section>
  );

  return content;
}
