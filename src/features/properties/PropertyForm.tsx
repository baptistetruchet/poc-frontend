import {
  useForm,
  SubmitHandler,
  FormProvider,
  useFormContext,
  FieldValues,
  Path,
} from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  name: z.string().min(5, { message: "Length must be > 5" }),
});

type FormValues = z.infer<typeof formSchema>;

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
  const methods = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });
  const onSubmit: SubmitHandler<FormValues> = (data) =>
    window.alert(JSON.stringify(data));

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Input<FormValues> name="name" />
        <input type="submit" />
      </form>
    </FormProvider>
  );
}

export default PropertyForm;
