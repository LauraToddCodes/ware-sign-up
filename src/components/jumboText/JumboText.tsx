import "./jumboText.css"

import { Content } from "./jumboText.content"
import { useFormData } from "../../provider"

export function JumboText() {
	const { JumboHeader, JumboParagraph } = Content
	const { formData } = useFormData()
	console.log(`firstName is ${formData.firstName}`)

	return (
		<div className="jumboContainer">
			{formData.firstName ? (
				<p>Thanks for signing up, {formData.firstName}!</p>
			) : (
				<>
					{" "}
					<h1 className="header">{JumboHeader}</h1>
					<p data-testid="jumbo-paragraph">{JumboParagraph}</p>
				</>
			)}
		</div>
	)
}
