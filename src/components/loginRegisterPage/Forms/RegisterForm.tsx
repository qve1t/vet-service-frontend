import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useHistory } from "react-router";
import { registerUserAPI } from "../../../api/user";

import { FormBase } from "./styledComponents";
import StandardButton from "../../Buttons/StandardButton";
import { BaseInput, FormError } from "../../Inputs";

type Inputs = {
  email: string;
  password: string;
  passwordConfirm: string;
};

const RegisterForm = () => {
  const [registerError, setRegisterError] = useState<string>("");
  const history = useHistory();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data, event) => {
    event?.preventDefault();
    setRegisterError("");
    const registerResponse = await registerUserAPI({
      email: data.email,
      password: data.password,
    });
    if (registerResponse.response) {
      history.push("/login");
    } else {
      registerResponse.error && setRegisterError(registerResponse.error);
    }
  };

  return (
    <FormBase onSubmit={handleSubmit(onSubmit)}>
      <BaseInput
        placeholder="Email"
        autoComplete="off"
        error={errors.email?.message || registerError}
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Email is required",
          },
        })}
      />
      {errors.email && (
        <FormError marginTop="-25px">{errors.email.message}</FormError>
      )}
      <BaseInput
        placeholder="Password"
        type="password"
        error={errors.password?.message || registerError}
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 6,
            message: "Password has to be minimum 6 characters long",
          },
          maxLength: {
            value: 32,
            message: "Password cam't be longer than 32 characters",
          },
        })}
      />
      {errors.password && (
        <FormError marginTop="-25px">{errors.password.message}</FormError>
      )}
      <BaseInput
        placeholder="Confirm password"
        type="password"
        error={errors.passwordConfirm?.message || registerError}
        {...register("passwordConfirm", {
          validate: (value) =>
            value === watch("password") || "Passwords do not match",
        })}
      />
      {errors.passwordConfirm && (
        <FormError marginTop="-25px">
          {errors.passwordConfirm.message}
        </FormError>
      )}
      {registerError && (
        <FormError marginTop="-25px">{registerError}</FormError>
      )}
      <StandardButton label="Register" />
    </FormBase>
  );
};

export default RegisterForm;
