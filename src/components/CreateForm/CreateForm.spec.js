import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import CreateForm from './CreateForm.js';

describe('CreateForm component', () => {
	it('should render form', () => {
		render(<CreateForm />);
		const form = screen.getByRole('form');
		expect(form).toBeInTheDocument();
	});
});

describe('Button component', () => {
	it('should allow clicks', async () => {
		const handleClick = jest.fn();
		const text = 'Click me';
		render(<Button onClick={handleClick}>{text}</Button>);
		const button = screen.getByText(text);
		await userEvent.click(button);
		expect(handleClick).toHaveBeenCalledTimes(1);
	});
});
