import "./App.css"

import React from "react"

function App() {
	return (
		<>
			<div className="absolute inset-0 bg-red"></div>
			<div className="bg-[url('../public/bg-intro-mobile.png')] sm:bg-[url('../public/bg-intro-desktop.png')] min-h-screen absolute inset-0 pt-24 pb-16 px-6 sm:pt-16 sm:px-40">
				<p>hello world</p>
			</div>
		</>
	)
}

export default App
