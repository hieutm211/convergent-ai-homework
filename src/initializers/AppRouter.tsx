import { BrowserRouter, Route, Routes } from "react-router";
import { Index } from "../components/Index";
import { AuthSignIn } from "../components/auth/AuthSignIn";
import { Home } from "../components/Home";
import { AppLayout } from "../components/layouts/AppLayout/AppLayout";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Index />} />
        <Route element={<AppLayout />}>
          <Route path="home" element={<Home />} />
        </Route>
        <Route path="auth">
          <Route path="sign-in" element={<AuthSignIn />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
