import { BrowserRouter, Route, Routes } from "react-router";
import { Index } from "../components/Index";
import { AuthSignIn } from "../components/auth/AuthSignIn";
import { Home } from "../components/Home";
import { AppLayout } from "../components/layouts/AppLayout/AppLayout";
import { ChatLayout } from "../components/layouts/ChatLayout/ChatLayout";
import { Chat } from "../components/Chat";
import { AuthLayout } from "../components/layouts/AuthLayout/AuthLayout";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Index />} />
        <Route element={<AppLayout />}>
          <Route path="home" element={<Home />} />
        </Route>
        <Route element={<ChatLayout />}>
          <Route path="chat" element={<Chat />} />
        </Route>
        <Route path="auth" element={<AuthLayout />}>
          <Route path="sign-in" element={<AuthSignIn />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
