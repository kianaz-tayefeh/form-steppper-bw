import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import { Home, MoreInformation, TermsAndConditions, Summary } from '../views'

type RouteType = {
	name: string
	path: string
	element: React.ReactElement
}

export const ROUTES: RouteType[] = [
	{
		name: 'step one',
		path: '/',
		element: <Home />,
	},
	{
		name: 'step two',
		path: '/more-information',
		element: <MoreInformation />,
	},
	{
		name: 'step three',
		path: '/terms-and-conditions',
		element: <TermsAndConditions />,
	},
	{
		name: 'step four',
		path: '/summary',
		element: <Summary />,
	},
]

export const router = createBrowserRouter(ROUTES)
