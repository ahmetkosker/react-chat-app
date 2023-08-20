import Input from "../FormElements/Input";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  auth,
  createUserWithEmailAndPassword,
  provider,
  signInWithPopup,
  updateProfile,
} from "../../libs/firebaseConfig";

import { FaGoogle } from "react-icons/fa";

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .required("Username is required")
    .min(6, "Username must be at least 6 characters")
    .max(20, "Username must not exceed 20 characters"),
  email: Yup.string().required("Email is required").email("Email is invalid"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(40, "Password must not exceed 40 characters"),
  gender: Yup.string().required("Gender is required"),
});

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("You are in", {
          position: "top-center",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      })
      .catch(() => {
        toast.error("Something went wrong", {
          position: "top-center",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });
  };

  const onSubmit = async (data: UserSubmitForm) => {
    const id = toast.loading("Please wait...");
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(async (userCredential) => {
        const user = userCredential.user;

        await updateProfile(user, {
          displayName: data.username,
          photoURL: "https://example.com/jane-q-user/profile.jpg",
        })
          .then(() => {
            toast.update(id, {
              render: "Successfully registered",
              type: "success",
              isLoading: false,
              transition: Slide,
              autoClose: 4000,
              hideProgressBar: false,
              closeOnClick: true,
              rtl: false,
              pauseOnFocusLoss: true,
              draggable: true,
            });
          })
          .catch((error) => {
            toast.error(error);
          });
      })
      .catch((error) => {
        error.code === "auth/email-already-in-use"
          ? toast.update(id, {
              render: "Email is already in use",
              type: "error",
              isLoading: false,
              transition: Slide,
              autoClose: 4000,
              hideProgressBar: false,
              closeOnClick: true,
              rtl: false,
              pauseOnFocusLoss: true,
              draggable: true,
            })
          : toast.update(id, {
              render: "Something went wrong creating user",
              type: "error",
              isLoading: false,
              transition: Slide,
              autoClose: 4000,
              hideProgressBar: false,
              closeOnClick: true,
              rtl: false,
              pauseOnFocusLoss: true,
              draggable: true,
            });
      });
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="h-24 w-80">
            <Input
              name="email"
              register={register}
              error={errors.email}
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="h-24 w-80">
            <Input
              name="username"
              register={register}
              error={errors.username}
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="h-24 w-80">
            <Input
              name="password"
              register={register}
              error={errors.password}
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="h-24 w-80">
            <Box
              sx={{
                minWidth: 120,
              }}
            >
              <FormControl fullWidth>
                <InputLabel>Gender</InputLabel>
                <Select label="Gender" {...register("gender")}>
                  <MenuItem value={"Male"}>Male</MenuItem>
                  <MenuItem value={""}></MenuItem>
                  <MenuItem value={"Female"}>Female</MenuItem>
                </Select>
              </FormControl>
            </Box>
            {errors && (
              <p className="font-bold text-md text-red-500">
                {errors.gender?.message}
              </p>
            )}
          </div>
          <div className="w-full">
            <Button
              type="submit"
              variant="contained"
              color="warning"
              className="w-full"
            >
              Register
            </Button>
          </div>
          <div className="flex items-center mt-7">
            <div className="w-20 h-px bg-gray-500"></div>
            <div className="w-auto mx-3 text-white-600 text-center">
              Or Continue With
            </div>
            <div className="w-20 h-px bg-gray-500"></div>
          </div>
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
          <div className="text-center mt-7">
            <span>
              Already have an account <span className="underline">Login</span>
            </span>
          </div>
        </form>
      </header>
    </main>
  );
};

export default Register;
