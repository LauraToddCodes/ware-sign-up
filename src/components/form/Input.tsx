import "./form.css"

import { UseFormRegister, UseFormTrigger } from "react-hook-form"

import { ErrorMessage } from "./ErrorMessage"
import { FieldError } from "react-hook-form"
import { FormContent } from "./form.content"
import { Inputs } from "./Form"
import { InputsEnum } from "./form.content"

type Props = {
	errors: FieldError | undefined
	placeholder: string
	name: InputsEnum
	register: UseFormRegister<Inputs>
	trigger: UseFormTrigger<Inputs>
	type: string
}

export function Input(props: Props) {
	const { errors, placeholder, name, register, trigger, type } = props

	const { IconAlt } = FormContent

	return (
		<>
			{errors && (
				<div className="errorIconContainer">
					<img src="./icon-error.svg" alt={IconAlt} className="errorIcon" />
				</div>
			)}
			<input
				className={`baseInput ${errors ? "errorInput" : "noErrorInput"}`}
				placeholder={placeholder}
				type={type}
				{...register(name)}
				onBlur={() => {
					trigger(name)
				}}
			/>
			{errors && <ErrorMessage message={errors?.message} />}
		</>
	)
}
