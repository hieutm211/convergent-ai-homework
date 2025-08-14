import { BrowserRouter, Route, Routes } from "react-router";
import { Index } from "../components/Index";
import { AuthSignIn } from "../components/auth/AuthSignIn";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Index />} />
        <Route path="auth">
          <Route path="sign-in" element={<AuthSignIn />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
