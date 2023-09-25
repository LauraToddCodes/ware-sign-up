import { render, screen } from "@testing-library/react"

import App from "./App"
import { Content as JumboContent } from "./components/jumboText/jumboText.content"
import { Content as TrialBoxContent } from "./components/trialBox/trialBox.content"
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
})
