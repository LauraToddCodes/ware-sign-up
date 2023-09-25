export enum InputsEnum {
	FirstName = "firstName",
	LastName = "lastName",
	Email = "email",
	Password = "password",
}

export const FormContent = {
	Errors: {
		invalidEmail: "Looks like this is not an email",
		shortPassword: "Password must have at least 10 characters",
	},
	IconAlt: "error icon",
	InputFields: [
		{
			name: InputsEnum.FirstName,
			placeholder: "First Name",
			type: "text",
		},
		{
			name: InputsEnum.LastName,
			placeholder: "Last Name",
			type: "text",
		},
		{
			name: InputsEnum.Email,
			placeholder: "Email Address",
			type: "email",
		},
		{
			name: InputsEnum.Password,
			placeholder: "Password",
			type: "password",
		},
	],
	Terms: {
		Paragraph: "By clicking the button, you are agreeing to our ",
		Link: "Terms and Services",
	},
}

export const getEmptyError = (field: String) => `${field} cannot be empty`

export const getPasswordError = (errorType: String) =>
	`Your password must have at least 1 ${errorType} character`
