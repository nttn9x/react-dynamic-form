import { TextField } from "@thor/components/molecules/textfield";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
  useFormContext,
  UseFormProps,
} from "react-hook-form";

export enum FromTypes {
  Input = "input",
  Select = "select",
}

interface IInput {
  key: string;
  label: string;
  placeholder?: string;
  type: FromTypes;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  defaultValue: any;
}

export interface IFormInputs {
  fields: IInput[];
}

export function FormInputs({ fields }: IFormInputs) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const _renderComponent = ({ key, ...field }: IInput) => {
    const errorMessage = errors[key]?.message as string;
    switch (field.type) {
      case FromTypes.Input:
        return (
          <TextField
            key={key}
            errorMessage={errorMessage}
            {...field}
            {...register(key)}
          />
        );
      default:
        return (
          <TextField
            key={key}
            errorMessage={errorMessage}
            {...field}
            {...register(key)}
          />
        );
    }
  };

  return <>{fields.map((field: IInput) => _renderComponent(field))}</>;
}

interface IFormProps<T extends FieldValues> {
  ["data-testid"]?: string;
  className?: string;
  formProps?: UseFormProps<T>;
  onSubmit: SubmitHandler<T>;
  children: React.ReactNode;
}

export function Form<T extends FieldValues>({
  formProps,
  onSubmit,
  children,
  ...props
}: IFormProps<T>) {
  const methods = useForm<T>(formProps);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} {...props}>
        {children}
      </form>
    </FormProvider>
  );
}
