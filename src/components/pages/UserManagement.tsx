/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-expressions */

import { memo, useEffect, VFC } from "react";
import { Center, Spinner, Wrap, WrapItem } from "@chakra-ui/react";
import { UserCard } from "../organisms/user/UserCard";
import { UseAllUsers } from "../../hooks/useAllUsers";

export const UserManagement: VFC = memo(() => {
  const { getUsers, loading, users } = UseAllUsers();

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {users.map((user) => {
            return (
              <WrapItem key={user.id} mx="auto">
                <UserCard
                  imageUrl="https://source.unsplash.com/random"
                  userName={user.username}
                  fullName={user.name}
                />
              </WrapItem>
            );
          })}
        </Wrap>
      )}
    </>
  );
});
