import React from 'react'
import { RouterProvider } from 'react-router-dom'

import { FormProvider } from './contexts/FormContext'
import { router } from './routes'

export const App = () => {
	return (
		<FormProvider>
			<RouterProvider router={router} />
		</FormProvider>
	)
}
