import { FormContent, getPasswordError } from "./components/form/form.content"
import { render, screen, waitFor } from "@testing-library/react"

import App from "./App"
import { Form } from "./components"
import { Content as JumboContent } from "./components/jumboText/jumboText.content"
import { Content as TrialBoxContent } from "./components/trialBox/trialBox.content"
import userEvent from "@testing-library/user-event"

test("renders Jumbo Text", () => {
	const { JumboHeader, JumboParagraph } = JumboContent

	render(<App />)
	const h1Header = screen.getByRole("heading")
	expect(h1Header).toHaveTextContent(JumboHeader)
	const paragraph = screen.getByTestId("jumbo-paragraph")
	expect(paragraph).toHaveTextContent(JumboParagraph)
})

test("renders Trial Box", () => {
	const { BoldType, RegularType } = TrialBoxContent

	render(<App />)
	const trialBox = screen.getByTestId("trial-box")
	expect(trialBox).toHaveTextContent(BoldType + RegularType)
})

test("renders Form", () => {
	render(<Form />)

	const firstNameInput = screen.getByPlaceholderText("First Name")
	expect(firstNameInput).toBeInTheDocument()
	const lastNameInput = screen.getByPlaceholderText("Last Name")
	expect(lastNameInput).toBeInTheDocument()
	const emailInput = screen.getByPlaceholderText("Email Address")
	expect(emailInput).toBeInTheDocument()
	const passwordInput = screen.getByPlaceholderText("Password")
	expect(passwordInput).toBeInTheDocument()

	const button = screen.getByRole("button")
	expect(button).toHaveTextContent("CLAIM YOUR FREE TRIAL")

	const terms = screen.getByTestId("terms-paragraph")
	expect(terms).toHaveTextContent(
		"By clicking the button, you are agreeing to our Terms and Services"
	)
})

test("no errors display when form submitted with valid values", async () => {
	render(<Form />)

	const user = userEvent.setup()

	await user.type(screen.getByPlaceholderText("First Name"), "Angela")
	await user.type(screen.getByPlaceholderText("Last Name"), "Middlebin")
	await user.type(
		screen.getByPlaceholderText("Email Address"),
		"angela@middlebin.com"
	)
	await user.type(screen.getByPlaceholderText("Password"), "!rGh3KZdFy&&")

	await user.click(screen.getByTestId("submitButton"))

	expect(screen.queryByTestId("errorMessage")).not.toBeInTheDocument()
})

test("error displays when form submitted with empty fields", async () => {
	render(<Form />)

	const user = userEvent.setup()

	await user.click(screen.getByTestId("submitButton"))

	expect(screen.getAllByTestId("errorMessage")).toHaveLength(4)
})

test("error displays when invalid email is submitted", async () => {
	render(<Form />)

	const user = userEvent.setup()

	await user.type(screen.getByPlaceholderText("First Name"), "Angela")
	await user.type(screen.getByPlaceholderText("Last Name"), "Middlebin")
	await user.type(
		screen.getByPlaceholderText("Email Address"),
		"angelmiddlebin.com"
	)
	await user.type(screen.getByPlaceholderText("Password"), "!rGh3KZdFy&&")

	await user.click(screen.getByTestId("submitButton"))

	expect(screen.getByTestId("errorMessage")).toHaveTextContent(
		FormContent.Errors.invalidEmail
	)
})

test("error displays when password is too short", async () => {
	render(<Form />)

	const user = userEvent.setup()

	await user.type(screen.getByPlaceholderText("First Name"), "Angela")
	await user.type(screen.getByPlaceholderText("Last Name"), "Middlebin")
	await user.type(
		screen.getByPlaceholderText("Email Address"),
		"angel@middlebin.com"
	)
	await user.type(screen.getByPlaceholderText("Password"), "!rGh3K")

	await user.click(screen.getByTestId("submitButton"))

	expect(screen.getByTestId("errorMessage")).toHaveTextContent(
		FormContent.Errors.shortPassword
	)
})

test("error displays when password does not contain a digit", async () => {
	render(<Form />)

	const user = userEvent.setup()

	await user.type(screen.getByPlaceholderText("First Name"), "Angela")
	await user.type(screen.getByPlaceholderText("Last Name"), "Middlebin")
	await user.type(
		screen.getByPlaceholderText("Email Address"),
		"angel@middlebin.com"
	)
	await user.type(screen.getByPlaceholderText("Password"), "!rGhaKZdFy&&")

	await user.click(screen.getByTestId("submitButton"))

	const expectedMessage = getPasswordError("digit")

	expect(screen.getByTestId("errorMessage")).toHaveTextContent(expectedMessage)
})

test("error displays when password does not contain a lowercase character", async () => {
	render(<Form />)

	const user = userEvent.setup()

	await user.type(screen.getByPlaceholderText("First Name"), "Angela")
	await user.type(screen.getByPlaceholderText("Last Name"), "Middlebin")
	await user.type(
		screen.getByPlaceholderText("Email Address"),
		"angel@middlebin.com"
	)
	await user.type(screen.getByPlaceholderText("Password"), "!RGH3KZDFY&&")

	await user.click(screen.getByTestId("submitButton"))

	const expectedMessage = getPasswordError("lowercase")

	expect(screen.getByTestId("errorMessage")).toHaveTextContent(expectedMessage)
})

test("error displays when password does not contain an uppercase character", async () => {
	render(<Form />)

	const user = userEvent.setup()

	await user.type(screen.getByPlaceholderText("First Name"), "Angela")
	await user.type(screen.getByPlaceholderText("Last Name"), "Middlebin")
	await user.type(
		screen.getByPlaceholderText("Email Address"),
		"angel@middlebin.com"
	)
	await user.type(screen.getByPlaceholderText("Password"), "!rgh3kzdfy&&")

	await user.click(screen.getByTestId("submitButton"))

	const expectedMessage = getPasswordError("uppercase")

	expect(screen.getByTestId("errorMessage")).toHaveTextContent(expectedMessage)
})

test("Success message with name of user appears on submit", async () => {
	render(<App />)

	const user = userEvent.setup()

	const userName = "Angela"

	await user.type(screen.getByPlaceholderText("First Name"), userName)
	await user.type(screen.getByPlaceholderText("Last Name"), "Middlebin")
	await user.type(
		screen.getByPlaceholderText("Email Address"),
		"angela@middlebin.com"
	)
	await user.type(screen.getByPlaceholderText("Password"), "!rGh3KZdFy&&")

	await user.click(screen.getByTestId("submitButton"))

	expect(screen.queryByTestId("successMessage")).toHaveTextContent(
		`Thanks for signing up, ${userName}!`
	)
})
