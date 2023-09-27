import * as React from "react"

import { Inputs } from "components"

export const initialFormData = {
	firstName: "",
	lastName: "",
	email: "",
	password: "",
}

export type FormDataContextValues = {
	formData: Inputs
	setFormData: React.Dispatch<React.SetStateAction<Inputs>>
}

export const FormDataContext = React.createContext<FormDataContextValues>({
	formData: initialFormData,
	setFormData: () => console.info("Form data context not yet initialised"),
})
