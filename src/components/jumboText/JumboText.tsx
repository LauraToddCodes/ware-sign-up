import "./jumboText.css"

import { Content } from "./jumboText.content"

export function JumboText() {
	const { JumboHeader, JumboParagraph } = Content

	return (
		<div className="jumboContainer">
			<h1 className="header">{JumboHeader}</h1>
			<p data-testid="jumbo-paragraph">{JumboParagraph}</p>
		</div>
	)
}
