import * as yup from "yup"

import { FormContent, getEmptyError, getPasswordError } from "./form.content"

const { Errors } = FormContent

export const schema = yup.object({
	firstName: yup.string().required(getEmptyError("First Name")),
	lastName: yup.string().required(getEmptyError("Last Name")),
	email: yup
		.string()
		.email(Errors.invalidEmail)
		.required(getEmptyError("Email")),
	password: yup
		.string()
		.min(10, Errors.shortPassword)
		.matches(/[0-9]/, getPasswordError("digit"))
		.matches(/[a-z]/, getPasswordError("lowercase"))
		.matches(/[A-Z]/, getPasswordError("uppercase"))
		.required(getEmptyError("Password")),
})
