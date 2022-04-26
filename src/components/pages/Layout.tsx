import { memo, VFC } from "react";
import { Outlet } from "react-router-dom";

export const Layout: VFC = memo(() => (
  <div>
    <Outlet />
  </div>
));
