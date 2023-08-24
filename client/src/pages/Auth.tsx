import { useState } from "react";
import AuthStatusChanger from "../components/AuthManagement/AuthStatusChanger";
import Register from "../components/AuthManagement/Register";
import SignIn from "../components/AuthManagement/SignIn";

const Auth = () => {
  const [variant, setVariant] = useState<String>("SIGIN");
  return (
    <main className="w-screen h-screen bg-gradient-to-br from-[#353536] via-[#3C4D5A] to-[#353536]">
      <section className="max-w-5xl h-full mx-auto flex flex-col justify-center items-center gap-y-6">
        <AuthStatusChanger setVariant={setVariant} />[
        {variant === "SIGNIN" ? <SignIn /> : <Register />}
      </section>
    </main>
  );
};

export default Auth;
