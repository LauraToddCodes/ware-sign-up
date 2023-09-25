import "./App.css"

import { Form, JumboText, TrialBox } from "./components"

import { FormDataProvider } from "./provider"

function App() {
	return (
		<FormDataProvider>
			<div className="bgUnderlay"></div>
			<div className="bgImage">
				<JumboText />
				<div className="rightPanel">
					<TrialBox />
					<Form />
				</div>
			</div>
		</FormDataProvider>
	)
}

export default App
