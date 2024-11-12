import { AuthForm } from "@/components/forms";
import LoginForm from "@/components/forms/LoginForm";
import React from "react";

function LoginPage() {
  return (
    <section className="flex-center h-full">
      <AuthForm title="Welcome to Note" description="Please log in to continue">
        <LoginForm />
      </AuthForm>
    </section>
  );
}

export default LoginPage;
