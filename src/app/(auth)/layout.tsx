import React from "react";

function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <main className="bg-neutral-100 h-screen p-4 md:-6">{children}</main>;
}

export default AuthLayout;
