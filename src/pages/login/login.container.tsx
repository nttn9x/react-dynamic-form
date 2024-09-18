import { FormInputs, Form, FromTypes } from "@thor/components/organisms";
import { FieldValues, SubmitHandler } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    username: yup.string().required("Required"),
    password: yup.string().required("Required"),
  })
  .required();

interface IFormData extends FieldValues {
  username: string;
  password: string;
}

export const Login = () => {
  const fields = [
    {
      key: "username",
      label: "User Name",
      ["data-testid"]: "username",
      type: FromTypes.Input,
      placeholder: "Enter your first name",
      defaultValue: "",
    },
    {
      key: "password",
      label: "Password",
      ["data-testid"]: "password",
      type: FromTypes.Input,
      placeholder: "Enter your password",
      defaultValue: "",
    },
  ];

  const onSubmit: SubmitHandler<IFormData> = (data) => {
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center h-full">
      <Form<IFormData>
        data-testid="form"
        formProps={{
          resolver: yupResolver(schema),
        }}
        className="flex flex-col w-[500px] gap-6"
        onSubmit={onSubmit}
      >
        <div className="w-full">
          <FormInputs fields={fields} />
        </div>
        <button data-testid="submitBtn" type="submit">
          submit
        </button>
      </Form>
    </div>
  );
};
