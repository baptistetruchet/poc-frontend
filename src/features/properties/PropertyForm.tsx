import {
  useForm,
  FormProvider,
  useFormContext,
  FieldValues,
  Path,
  UseFormProps,
  SubmitHandler,
} from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

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

function Input<TFieldValues extends FieldValues = FieldValues>({
  name,
  ...props
}: {
  name: Path<TFieldValues>;
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext<TFieldValues>();
  const error = errors[name];

  return (
    <div>
      <input {...props} {...register(name)} />
      {error ? <p>{error.message?.toString()}</p> : null}
    </div>
  );
}

Form.Input = Input;

const formSchema = z.object({
  name: z.string().min(5, { message: "Length must be > 5" }),
});

type FormValues = z.infer<typeof formSchema>;

function PropertyForm() {
  return (
    <Form<FormValues>
      resolver={zodResolver(formSchema)}
      onSubmit={(data) => window.alert(JSON.stringify(data))}
    >
      <Form.Input<FormValues> name="name" />
      <input type="submit" />
    </Form>
  );
}

export default PropertyForm;
