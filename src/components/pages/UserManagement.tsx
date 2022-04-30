import { Wrap, WrapItem } from "@chakra-ui/react";
import { memo, VFC } from "react";

export const UserManagement: VFC = memo(() => {
  return (
    <Wrap>
      {[...Array()]}
      <WrapItem>
        <div
          style={{ width: "100%", height: "100px", backgroundColor: "teal" }}
        />
      </WrapItem>
    </Wrap>
  );
});
