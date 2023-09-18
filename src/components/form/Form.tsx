import {
  useForm,
  FormProvider,
  FieldValues,
  UseFormProps,
  SubmitHandler,
} from "react-hook-form";
import Input from "./Input";

type FormProps<
  TFieldValues extends FieldValues = FieldValues,
  TContext = unknown,
  TTransformedValues extends FieldValues | undefined = undefined,
> = UseFormProps<TFieldValues, TContext> & {
  children: React.ReactNode;
  onSubmit: TTransformedValues extends FieldValues
    ? SubmitHandler<TTransformedValues>
    : SubmitHandler<TFieldValues>;
};

function Form<
  TFieldValues extends FieldValues = FieldValues,
  TContext = unknown,
  TTransformedValues extends FieldValues | undefined = undefined,
>({
  children,
  onSubmit,
  ...props
}: FormProps<TFieldValues, TContext, TTransformedValues>) {
  const methods = useForm<TFieldValues, TContext, TTransformedValues>(props);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
}

Form.Input = Input;

export default Form;
