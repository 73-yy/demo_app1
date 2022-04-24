import { memo, VFC } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Setting } from "../pages/Setting";
import { UserManagement } from "../pages/UserManagement";

export const Router: VFC = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="home" element={<Home />}>
        <Route path="usermanagement" element={<UserManagement />} />
        <Route path="setting" element={<Setting />} />
      </Route>
    </Routes>
  );
});
