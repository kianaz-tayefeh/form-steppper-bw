import React, { useCallback } from 'react'
import { Control, Controller, FieldErrorsImpl } from 'react-hook-form'

import { ErrorMessage } from './ErrorMessage'
import { InputLabel } from './InputLabel'
import { StateType } from '../contexts/FormContext'

type ControllerCheckboxesPropsType = {
	name: keyof StateType
	errors: Partial<FieldErrorsImpl<StateType>>
	control: Control<StateType>
	options: string[]
}

export const ControllerCheckboxes: React.FC<ControllerCheckboxesPropsType> = (props) => {
	const { name, errors, control, options } = props

	const handleChange = useCallback(
		(
			e: React.ChangeEvent<HTMLInputElement>,
			value: string[],
			option: string,
			onChange: (value: string[]) => void
		) => {
			const newValue: string[] = e.target.checked
				? [...value, option]
				: value.filter((val: string) => val !== option)
			onChange(newValue)
		},
		[name]
	)

	return (
		<div className="input-wrapper">
			<InputLabel name={name} />
			<Controller
				name={name}
				control={control}
				render={({ field: { onChange, value, ...restOfField } }) => {
					return options.map((option: string) => (
						<div key={option}>
							<input
								{...restOfField}
								type="checkbox"
								id={option}
								onChange={(e) => handleChange(e, value as string[], option, onChange)}
								checked={(value as string[]).includes(option)}
							/>
							<label className="ml-3 capitalize" htmlFor={option}>
								{option}
							</label>
						</div>
					))
				}}
			/>
			<ErrorMessage error={errors?.[name]?.message} />
		</div>
	)
}

ControllerCheckboxes.displayName = 'ControllerCheckboxes'
