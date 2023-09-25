import * as React from "react"

import { FormDataContext, FormDataContextValues } from "./form-data-context"

export function useFormData(): FormDataContextValues {
	return React.useContext(FormDataContext)
}
