"use client";
import { TextField } from "@mui/material";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

type Inputs = {
  example: string;
  exampleRequired: string;
};

export default function Register() {
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="cpf"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <TextField
            error={errors.cpf ? true : false}
            label="CPF"
            defaultValue=""
            helperText="CPF INVALIDO!"
            {...field}
          />
        )}
      />
      <button type="submit">enviar</button>
    </form>
  );
}
