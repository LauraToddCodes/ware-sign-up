import "./App.css"

import { JumboText, TrialBox } from "./components"

function App() {
	return (
		<>
			<div className="bgUnderlay"></div>
			<div className="bgImage">
				<JumboText />
				<div className="rightPanel">
					<TrialBox />
				</div>
			</div>
		</>
	)
}

export default App
