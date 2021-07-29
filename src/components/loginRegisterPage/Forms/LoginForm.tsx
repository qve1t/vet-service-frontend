import { useForm, SubmitHandler } from "react-hook-form";

import StandardButton from "../../Buttons/StandardButton";
import {
  LoginRegisterInputBase,
  FormBase,
  FormError,
} from "./styledComponents";

type Inputs = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data, event) => {
    event?.preventDefault();
    console.log(data);
  };

  return (
    <FormBase onSubmit={handleSubmit(onSubmit)}>
      <LoginRegisterInputBase
        placeholder="Email"
        error={errors.email?.message}
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Email is required",
          },
        })}
      />
      {errors.email && <FormError>{errors.email.message}</FormError>}
      <LoginRegisterInputBase
        placeholder="Password"
        type="password"
        error={errors.password?.message}
        {...register("password", {
          required: "Password is required",
        })}
      />
      {errors.password && <FormError>{errors.password.message}</FormError>}

      <StandardButton label="Login" />
    </FormBase>
  );
};

export default LoginForm;
