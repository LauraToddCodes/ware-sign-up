import { render, screen } from "@testing-library/react"

import App from "./App"
import { Content as JumboContent } from "./components/jumboText/jumboText.content"
test("renders Jumbo Text", () => {
	const { JumboHeader, JumboParagraph } = JumboContent

	render(<App />)
	const h1Header = screen.getByRole("heading")
	expect(h1Header).toHaveTextContent(JumboHeader)
	const paragraph = screen.getByTestId("jumbo-paragraph")
	expect(paragraph).toHaveTextContent(JumboParagraph)
})
	render(<App />)
	const placeholderText = screen.getByText(/hello world/i)
	expect(placeholderText).toBeInTheDocument()
})
