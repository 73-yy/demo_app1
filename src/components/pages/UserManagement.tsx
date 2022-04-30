import { memo, VFC } from "react";
import { Wrap, WrapItem } from "@chakra-ui/react";
import { UserCard } from "../organisms/user/UserCard";
import { UseAllUsers } from "../../hooks/useAllUsers";

export const UserManagement: VFC = memo(() => {
  const { getUsers, loading, users } = UseAllUsers();
  useEffect();

  return (
    <Wrap p={{ base: 4, md: 10 }}>
      <WrapItem>
        {getUsers}
        {users.map}
        <UserCard
          imageUrl="https://source.unsplash.com/random"
          userName="jake"
          fullName="jakejake"
        />
      </WrapItem>
    </Wrap>
  );
});
