import * as React from "react"

import {
	FormDataContext,
	FormDataContextValues,
	initialFormData,
} from "./form-data-context"

export function FormDataProvider<T>(
	props: React.PropsWithChildren<T>
): JSX.Element {
	const formData = useFormDataProvider()

	return (
		<FormDataContext.Provider value={formData}>
			{props.children}
		</FormDataContext.Provider>
	)
}

function useFormDataProvider(): FormDataContextValues {
	const [formData, setFormData] = React.useState(initialFormData)

	return {
		formData,
		setFormData,
	}
}
