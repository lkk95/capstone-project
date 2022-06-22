import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';

import MealCard from './MealCard.js';

describe('MealCard component', () => {
	it('should render meal title and category', () => {
		const titletext = 'Enchiladas';
		render(<h2>{titletext}</h2>);
		const title = screen.getByText(titletext);

		const categorytext = 'Dinner';
		render(<p>{categorytext}</p>);
		const category = screen.getByText(categorytext);

		expect(title).toBeInTheDocument();
		expect(category).toBeInTheDocument();
	});
});
