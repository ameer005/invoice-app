import * as Yup from "yup";

const validationSchema = () =>
  Yup.object().shape({
    senderAddress: Yup.object().shape({
      street: Yup.string().required("can't be empty!"),
      city: Yup.string().required("can't be empty!"),
      postCode: Yup.string().required("empty!"),
      country: Yup.string().required("empty!"),
    }),
    createdAt: Yup.date().required("select a date").nullable(),
    paymentTerms: Yup.string().required("select a plan"),
    clientAddress: Yup.object().shape({
      street: Yup.string().required("can't be empty!"),
      city: Yup.string().required("can't be empty!"),
      postCode: Yup.string().required("empty!"),
      country: Yup.string().required("empty!"),
    }),
    items: Yup.array().of(
      Yup.object().shape({
        name: Yup.string().required(""),
        quantity: Yup.string().required(""),
        price: Yup.string().required("Error"),
      })
    ),
    clientName: Yup.string().required("can't be empty!"),
    clientEmail: Yup.string()
      .email("Invalid email address!")
      .required("can't be empty"),
    description: Yup.string().required("can't be empty!"),
  });

export default validationSchema;
