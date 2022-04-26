import { memo, VFC } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../components/pages/Home";
import { Login } from "../components/pages/Login";
import { Setting } from "../components/pages/Setting";
import { Page404 } from "../components/pages/Page404";
import { Layout } from "../components/pages/Layout";
import { UserManagement } from "../components/pages/UserManagement";
import { Header } from "../components/organisms/layout/Header";

export const Router: VFC = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="home" element={<Layout />}>
        <Header>
          <Route index element={<Home />} />
          <Route path="user_management" element={<UserManagement />} />
          <Route path="setting" element={<Setting />} />
          <Route path="*" element={<Page404 />} />
        </Header>
      </Route>
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
});
