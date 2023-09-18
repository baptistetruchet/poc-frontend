import {
  useForm,
  SubmitHandler,
  FormProvider,
  useFormContext,
  FieldValues,
  Path,
  UseFormProps,
} from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  name: z.string().min(5, { message: "Length must be > 5" }),
});

type FormValues = z.infer<typeof formSchema>;

function Form<
  TFieldValues extends FieldValues = FieldValues,
  TContext = unknown,
>({
  children,
  onSubmit,
  ...props
}: UseFormProps<TFieldValues, TContext> & {
  onSubmit: SubmitHandler<TFieldValues>;
  children: React.ReactNode;
}) {
  const methods = useForm<TFieldValues>(props);

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

function PropertyForm() {
  return (
    <Form<FormValues>
      resolver={zodResolver(formSchema)}
      onSubmit={(data) => window.alert(JSON.stringify(data))}
    >
      <Input<FormValues> name="name" />
      <input type="submit" />
    </Form>
  );
}

export default PropertyForm;
