import "./App.css"

import { Form, JumboText, TrialBox } from "./components"

function App() {
	return (
		<>
			<div className="bgUnderlay"></div>
			<div className="bgImage">
				<JumboText />
				<div className="rightPanel">
					<TrialBox />
					<Form />
				</div>
			</div>
		</>
	)
}

export default App
