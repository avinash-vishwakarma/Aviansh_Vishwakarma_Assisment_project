import * as yup from "yup";

export const addDetailsValidationSchema = yup.object().shape({
    email: yup.string().email("Enter a valid email").required("Required"),
    name: yup
        .string()
        .max(120, "maximum 120 characters are allowed")
        .required("Required"),
    contactName: yup.string().required("Required"),
    phoneNumber: yup.number().required("Required"),
    website: yup.string().required("Required"),
    address: yup
        .string()
        .max(1000, "Max 1000 characters are allowed")
        .required("Required"),
});
