// import React from 'react'
import { expect, test } from 'vitest'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

// import { App } from '../App'
import { VALIDATIONS } from '../constants/test'

test('Test Step 1', async () => {
	// render(<App />)

	userEvent.type(screen.getByLabelText(/name/i), VALIDATIONS.name.wrong)
	userEvent.type(screen.getByLabelText(/email/i), VALIDATIONS.email.wrong)
	userEvent.type(screen.getByLabelText(/email/i), VALIDATIONS.phone.wrong)

	userEvent.click(screen.getByRole('link', { name: /next step/i }))

	const nameFieldError = screen.getByText(VALIDATIONS.name.error)
	expect(nameFieldError).toBe(VALIDATIONS.name.error)
})
