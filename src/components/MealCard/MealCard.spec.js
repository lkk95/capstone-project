import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';

import MealCard from './MealCard.js';

describe('MealCard component', () => {
	it('should render meal title and category', () => {
		render(<MealCard title="Greek Salad" category="Lunch" />);

		const title = screen.getByText('Greek Salad');
		const category = screen.getByText('Lunch');

		expect(title).toBeInTheDocument();
		expect(category).toBeInTheDocument();
	});
});
