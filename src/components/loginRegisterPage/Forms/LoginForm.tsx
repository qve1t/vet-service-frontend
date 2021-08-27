import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useHistory } from "react-router";
import { loginUserAPI } from "../../../api/auth";

import StandardButton from "../../Buttons/StandardButton";
import { FormBase } from "./styledComponents";
import { BaseInput, FormError } from "../../Inputs";

import { UseLoggedUserActions } from "../../../modules/LoggedUserModule";

type Inputs = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const [loginError, setLoginError] = useState<string>("");
  const history = useHistory();
  const { logUser } = UseLoggedUserActions();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data, event) => {
    event?.preventDefault();
    setLoginError("");
    const loginResponse = await loginUserAPI({
      email: data.email,
      password: data.password,
    });
    if (loginResponse.response) {
      logUser(loginResponse.response.isLogged, loginResponse.response.email);
      history.push("/dashboard");
    } else {
      loginResponse.error && setLoginError(loginResponse.error);
    }
  };

  return (
    <FormBase onSubmit={handleSubmit(onSubmit)}>
      <BaseInput
        placeholder="Email"
        error={errors.email?.message || loginError}
        noMargin={loginError}
        autoComplete="off"
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Email is required",
          },
        })}
      />
      {errors.email && <FormError>{errors.email.message}</FormError>}
      <BaseInput
        placeholder="Password"
        type="password"
        error={errors.password?.message || loginError}
        {...register("password", {
          required: "Password is required",
        })}
      />
      {errors.password && <FormError>{errors.password.message}</FormError>}
      {loginError && <FormError>{loginError}</FormError>}

      <StandardButton label="Login" />
    </FormBase>
  );
};

export default LoginForm;
