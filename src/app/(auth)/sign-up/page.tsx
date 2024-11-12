import { AuthForm, SignUpForm } from "@/components/forms";
import React from "react";

function SignUpPage() {
  return (
    <section className="flex-center h-full">
      <AuthForm
        title="Create your account"
        description="Sign up to start organising your notes and boost your productivity."
      >
        <SignUpForm />
      </AuthForm>
    </section>
  );
}

export default SignUpPage;
