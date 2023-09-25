import "./form.css"

import { FormContent } from "./form.content"

export function Terms() {
	const { Paragraph, Link } = FormContent.Terms

	return (
		<div className="termsContainer">
			<p data-testid="terms-paragraph" className="termsParagraph">
				{Paragraph}
				<a className="termsLink" href="/">
					{Link}
				</a>
			</p>
		</div>
	)
}
