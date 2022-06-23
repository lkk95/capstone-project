import '@testing-library/jest-dom';
import {fireEvent, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import CreateForm from './CreateForm.js';

describe('CreateForm component', () => {
	it('should render form', () => {
		render(<CreateForm />);
		const form = screen.getByRole('form');
		expect(form).toBeInTheDocument();
	});
	it('should type title', async () => {
		const user = userEvent.setup();
		render(<CreateForm />);
		const titleinput = screen.getByRole('textbox', {
			name: /recipe title:/i,
		});
		await userEvent.type(titleinput, 'Sandwich');
		expect(titleinput).toHaveValue('Sandwich');
		/*fireEvent.change(titleinput, {target: {value: 'Sandwich'}});
		expect(titleinput.value).toBe('Sandwich');*/
	});
	it('should select radio button', async () => {
		const user = userEvent.setup();
		render(<CreateForm />);
		const titleinput = screen.getByRole('textbox', {
			name: /recipe title:/i,
		});
		await userEvent.type(titleinput, 'Sandwich');
		expect(titleinput).toHaveValue('Sandwich');
		/*fireEvent.change(titleinput, {target: {value: 'Sandwich'}});
		expect(titleinput.value).toBe('Sandwich');*/
	});
});
