import React from "react";
import Logo from "../Logo";

function AuthForm({
  children,
  title,
  description,
}: {
  children: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white px-4 py-10 md:px-8 md:py-12 lg:p-12 rounded-lg w-full max-w-screen-sm flex flex-col gap-10">
      <header className="flex-center flex-col gap-6 text-center">
        <Logo />

        <div className="flex flex-col gap-2">
          <h1 className="text-preset-1 font-bold capitalize">{title}</h1>
          <p>{description}</p>
        </div>
      </header>

      {children}
    </div>
  );
}

export default AuthForm;
