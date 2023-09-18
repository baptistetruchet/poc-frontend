import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Form from "@/components/form/Form";

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
