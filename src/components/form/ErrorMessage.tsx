import "./form.css"

type Props = {
	message: string | undefined
}

export function ErrorMessage(props: Props) {
	const { message } = props

	return (
		<p className="errorMessage" data-testid="errorMessage">
			{message}
		</p>
	)
}
