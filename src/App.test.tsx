import { render, screen } from "@testing-library/react"

import App from "./App"
import React from "react"

test("renders hello world", () => {
	render(<App />)
	const placeholderText = screen.getByText(/hello world/i)
	expect(placeholderText).toBeInTheDocument()
})
