import { FieldValues, Path, useFormContext } from "react-hook-form";

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

export default Input;
