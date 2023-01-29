import React, { ReactNode, FC, useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { UseFormHandleSubmit } from 'react-hook-form'

import { FormContext, StateType } from '../contexts/FormContext'

import { ROUTES } from '../routes'
import { Stepper } from './Stepper'

type FormWizardPropsType = {
	handleSubmit: UseFormHandleSubmit<StateType>
	children: ReactNode
}

export const FormWizard: FC<FormWizardPropsType> = (props) => {
	const { handleSubmit, children } = props
	const navigate = useNavigate()
	const location = useLocation()

	const { dispatch } = useContext(FormContext)

	const currentPathIndex = ROUTES.findIndex((route) => route.path === location.pathname)
	const to = ROUTES[currentPathIndex + 1]?.path
	const showNextStep = currentPathIndex < ROUTES.length - 1

	const onSubmit = (data: StateType) => {
		dispatch(data)
		navigate(to)
	}

	return (
		<div className="w-full p-20 pt-3">
			<Stepper currentPathIndex={currentPathIndex} />
			<form onSubmit={handleSubmit(onSubmit)}>
				{children}
				<div className="mt-10 flex justify-between">
					<div />
					{showNextStep && (
						<button
							type="submit"
							className="w-32 focus:outline-none border border-transparent py-2 px-5 rounded-lg shadow-sm text-center text-white bg-blue-500 hover:bg-blue-600 font-medium"
						>
							Next Step
						</button>
					)}
				</div>
			</form>
		</div>
	)
}
