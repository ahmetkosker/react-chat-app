import Input from "../FormElements/Input";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@mui/material";

const Register: React.FC = () => {
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
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: UserSubmitForm) => {
    console.log(JSON.stringify(data, null, 2));
  };
  return (
    <main>
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
          <div className="flex justify-between">
            <Button
              type="button"
              onClick={() => reset()}
              variant="contained"
              color="warning"
            >
              Reset
            </Button>
            <Button type="submit" variant="contained" color="warning">
              Register
            </Button>
          </div>
        </form>
      </header>
    </main>
  );
};

export default Register;
