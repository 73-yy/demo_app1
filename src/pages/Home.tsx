import { Outlet } from "react-router-dom";

import { memo, VFC } from "react";

export const Home: VFC = memo(() => {
  return (
    <>
      <p>ホームページです</p>
      <Outlet />
    </>
  );
});
