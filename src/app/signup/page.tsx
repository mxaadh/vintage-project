"use client";

import SignupForm from "@/components/Form/SignupForm";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

const Signup = () => {
  const router = useRouter();
  const { token } = useAuth();

  if (token) {
    router.back();
  }

  return (
    <div>
      {token ? (
        <center>
          <h1 className="h-screen pt-5 mt-5">Already Loged-in</h1>
        </center>
      ) : (
        <SignupForm />
      )}
    </div>
  );
};

export default Signup;
