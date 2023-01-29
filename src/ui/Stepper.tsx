import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'

import { ROUTES } from '../routes'
import { CheckIcon } from './icons/CheckIcon'
import { SeperatorIcon } from './icons/SeperatorIcon'

type StepperPropsType = {
	currentPathIndex: number
}

export const Stepper: FC<StepperPropsType> = (props) => {
	const { currentPathIndex } = props

	return (
		<div className="mb-5">
			<h1 className="text-5xl text-center">Stepper</h1>
			<ol className="mt-5 md:flex flex-row justify-around w-full space-x-2 text-sm font-medium text-center text-gray-500 bg-white border border-gray-200 rounded-md shadow-sm light:text-gray-400 light:bg-gray-800 light:border-gray-700">
				{ROUTES.map(({ name, path }, index) => {
					return (
						<li
							className={`${
								currentPathIndex >= index ? 'text-blue-600' : ''
							} flex gap-4 items-center justify-center space-x-2.5 m-4 md:m-0`}
							key={name}
						>
							<span
								className={`${
									currentPathIndex > index ? 'bg-indigo-800' : ''
								} flex items-center justify-center w-8 h-8 border rounded-full shrink-0 light:border-blue-500`}
							>
								{currentPathIndex > index ? <CheckIcon /> : `0${index + 1}`}
							</span>
							<NavLink end to={currentPathIndex > index ? path : '#'}>
								<span>
									<h3 className="font-medium leading-tight mr-5">{name} </h3>
								</span>
							</NavLink>
							<span className="hidden md:block">
								<SeperatorIcon />
							</span>
						</li>
					)
				})}
			</ol>
		</div>
	)
}
