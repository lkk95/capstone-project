import StyledHeading from '../HomeContainer/styledheading.js';

import StyledPlannerContainer from './styledplannercontainer.js';
import StyledText from './styledtext.js';

export default function PlannerInfo() {
	return (
		<StyledPlannerContainer>
			<StyledHeading>YOUR PLANNER</StyledHeading>
			<StyledText>
				Start planning your meals by clicking on the &apos;New&apos;-Button. You can get
				more information about a meal when you click on it. Meals are sorted by time of day.
			</StyledText>
		</StyledPlannerContainer>
	);
}
