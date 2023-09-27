import "./form.css"

import { Button } from "./Button"
import { FormContent } from "./form.content"
import { Input } from "./Input"
import { Terms } from "./Terms"
import { schema } from "./formSchema"
import { useForm } from "react-hook-form"
import { useFormData } from "provider"
import { yupResolver } from "@hookform/resolvers/yup"

export type Inputs = {
	firstName: string
	lastName: string
	email: string
	password: string
}

export function Form() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		trigger,
	} = useForm<Inputs>({ resolver: yupResolver(schema) })
	const { setFormData } = useFormData()

	const onSubmit = (data: Inputs) => {
		setFormData(data)
	}

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				{FormContent.InputFields.map((field) => (
					<Input
						key={`input-${field.name}`}
						errors={errors[field.name]}
						placeholder={field.placeholder}
						name={field.name}
						register={register}
						trigger={trigger}
						type={field.type}
					/>
				))}
				<Button />
				<Terms />
			</form>
		</div>
	)
}
