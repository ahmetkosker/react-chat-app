import Input from "../FormElements/Input";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@mui/material";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import signInWithGoogle from "../../functions/endPoints/loginViaGoogle";
import { FaGoogle } from "react-icons/fa";

const validationSchema = Yup.object().shape({
  email: Yup.string().required("Email is required").email("Email is invalid"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(40, "Password must not exceed 40 characters"),
});

const SignIn = () => {
  const {
    register: signIn,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data: LoginForm) => {
    console.log(data);
  };

  return (
    <main>
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Slide}
      />
      <header>
        {/* Login form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="h-24 w-80">
            <Input
              name="email"
              register={signIn}
              error={errors.email}
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="h-24 w-80">
            <Input
              name="password"
              register={signIn}
              error={errors.password}
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="w-full">
            <Button
              type="submit"
              variant="contained"
              color="warning"
              className="w-full"
            >
              Sign in
            </Button>
          </div>
          <div className="flex items-center mt-7">
            <div className="w-20 h-px bg-gray-500"></div>
            <div className="w-auto mx-3 text-white-600 text-center">
              Or Continue With
            </div>
            <div className="w-20 h-px bg-gray-500"></div>
          </div>
          {/* <div className="text-center mt-7">
            <span>
              Already have an account <span className="underline">Login</span>
            </span>
          </div> */}
          <div className="w-full mt-7">
            <Button
              variant="contained"
              color="warning"
              className="w-full h-9"
              onClick={signInWithGoogle}
            >
              <FaGoogle />
            </Button>
          </div>
        </form>
      </header>
    </main>
  );
};

export default SignIn;
