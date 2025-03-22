import * as Yup from "yup";

export const userSchema = Yup.object().shape({
  name: Yup.string().min(2, "Too short!").required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  age: Yup.number().min(18, "Must be at least 18").required("Required"),
  mobile: Yup.string().length(10, "Must be 10 digits").required("Required"),
  interest: Yup.string().required("Required"),
});
