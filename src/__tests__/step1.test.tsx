import React from 'react'
import { test } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { App } from '../App'
import { VALIDATIONS } from '../constants/test'

test('Test Step 1', async () => {
	render(<App />)

	await userEvent.type(screen.getByRole('textbox', { name: /name/i }), VALIDATIONS.name.wrong)
	await userEvent.type(screen.getByRole('textbox', { name: /email/i }), VALIDATIONS.email.wrong)
	await userEvent.type(screen.getByRole('textbox', { name: /phone/i }), VALIDATIONS.phone.wrong)

	await userEvent.click(screen.getByRole('button', { name: /next step/i }))

	await screen.getByText(VALIDATIONS.name.error)
	await screen.getByText(VALIDATIONS.email.error)
	await screen.getByText(VALIDATIONS.phone.error)

	await userEvent.type(screen.getByRole('textbox', { name: /name/i }), VALIDATIONS.name.correct)
	await userEvent.type(screen.getByRole('textbox', { name: /email/i }), VALIDATIONS.email.correct)
	await userEvent.type(screen.getByRole('textbox', { name: /phone/i }), VALIDATIONS.phone.correct)

	// await userEvent.click(screen.getByRole('button', { name: /next step/i }))
})
// I did not implement the next steps btw I should use this mock

// jest.mock('react-navigation', () =>({
//   NavigationEvents: 'mockNavigationEvents',
// }))
