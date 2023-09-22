import "./App.css"

import React from "react"

function App() {
	return (
		<>
			<div className="absolute inset-0 bg-red"></div>
			<div className="bg-[url('../public/bg-intro-mobile.png')] sm:bg-[url('../public/bg-intro-desktop.png')] min-h-screen absolute inset-0">
				<p>hello world</p>
			</div>
		</>
	)
}

export default App
