import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';

import MealCard from './MealCard.js';

describe('MealCard component', () => {
	it('should render component', () => {
		render(<MealCard />);
		const heading = screen.getByRole('heading');
		const category = screen.getByTestId('category-element');
		expect(heading).toBeInTheDocument();
		expect(category).toBeInTheDocument();
	});
});
