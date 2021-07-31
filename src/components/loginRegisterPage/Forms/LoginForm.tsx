import { useForm, SubmitHandler } from "react-hook-form";
import { useHistory } from "react-router";
import { loginUserAPI } from "../../../api/auth";

import StandardButton from "../../Buttons/StandardButton";
import {
  LoginRegisterInputBase,
  FormBase,
  FormError,
} from "./styledComponents";

import { UseLoggedUserActions } from "../../../modules/LoggedUserModule";

type Inputs = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const history = useHistory();
  const { logUser } = UseLoggedUserActions();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data, event) => {
    event?.preventDefault();
    const loginResponse = await loginUserAPI({
      email: data.email,
      password: data.password,
    });
    if (loginResponse.response) {
      logUser(loginResponse.response.isLogged, loginResponse.response.email);
      history.push("/dashboard");
    } else {
      console.log(loginResponse.error);
    }
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
