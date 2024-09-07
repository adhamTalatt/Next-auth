"use client";

import { useRouter } from "next/navigation";
interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "model" | "redirect";
  asChild?: boolean;
}

const LoginButton = ({
  children,
  mode = "redirect",
  asChild,
}: LoginButtonProps) => {
  const route = useRouter();
  const onClicklogin = () => {
    route.push("/auth/login");
  };

  return <span onClick={onClicklogin}>{children}</span>;
};

export default LoginButton;
