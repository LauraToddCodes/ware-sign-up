import "./trialBox.css"

import { Content } from "./trialBox.content"

export function TrialBox() {
	const { BoldType, RegularType } = Content
	return (
		<div data-testid="trial-box" className="trialContainer">
			<p>
				<span className="boldType">{BoldType}</span>
				{RegularType}
			</p>
		</div>
	)
}
