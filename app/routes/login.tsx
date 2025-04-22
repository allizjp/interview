import LoginPage from "~/pages/LoginPage";
import type { Route } from "./+types/login";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Login" }];
}

export default function Login() {
  return <LoginPage />;
}
