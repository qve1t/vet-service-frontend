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
  const history = useHistory();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data, event) => {
    event?.preventDefault();
    const registerResponse = await registerUserAPI({
      email: data.email,
      password: data.password,
    });
    if (registerResponse.response) {
      history.push("/login");
    } else {
      console.log(registerResponse.error);
    }
  };

  return (
    <FormBase onSubmit={handleSubmit(onSubmit)}>
      <BaseInput
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
      <BaseInput
        placeholder="Password"
        type="password"
        error={errors.password?.message}
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
      {errors.password && <FormError>{errors.password.message}</FormError>}
      <BaseInput
        placeholder="Confirm password"
        type="password"
        error={errors.passwordConfirm?.message}
        {...register("passwordConfirm", {
          validate: (value) =>
            value === watch("password") || "Passwords do not match",
        })}
      />
      {errors.passwordConfirm && (
        <FormError>{errors.passwordConfirm.message}</FormError>
      )}
      <StandardButton label="Register" />
    </FormBase>
  );
};

export default RegisterForm;
