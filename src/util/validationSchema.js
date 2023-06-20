import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup.string("Enter your password").required("Password is required"),
});

const getCharacterValidationError = (str) => {
  return `Your password must have at least 1 ${str} character`;
};

export const registerSchema = yup.object({
  firstName: yup
    .string()
    .required("First name is required")
    .max(30, "First name should be maximum 30 characters"),
  lastName: yup
    .string()
    .required("Last name is required")
    .max(30, "Last name should be maximum 30 characters"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .matches(/[0-9]/, getCharacterValidationError("digit"))
    .matches(/[a-z]/, getCharacterValidationError("lowercase"))
    .matches(/[A-Z]/, getCharacterValidationError("uppercase"))
    .matches(
      /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/,
      getCharacterValidationError("special symbol")
    )
    .required("Password is required"),
  passwordConf: yup
    .string()
    .required("Please retype your password")
    .oneOf([yup.ref("password")], "Your passwords do not match"),
});
