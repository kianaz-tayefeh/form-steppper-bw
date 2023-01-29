import React, { useCallback, FC } from 'react'
import { Control, Controller, FieldErrorsImpl } from 'react-hook-form'

import { StateType } from '../contexts/FormContext'
import { ErrorMessage } from './ErrorMessage'
import { InputLabel } from './InputLabel'

type ControllerRadioPropsType = {
	name: keyof StateType
	errors: Partial<FieldErrorsImpl<StateType>>
	control: Control<StateType>
	options: string[]
}

export const ControllerRadio: FC<ControllerRadioPropsType> = (props) => {
	const { name, errors, control, options } = props

	const handleChange = useCallback(
		(option: string, onChange: (value: string) => void) => {
			onChange(option)
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
						<div key={option} className="mt-3">
							<input
								{...restOfField}
								type="radio"
								id={option}
								onChange={() => handleChange(option, onChange)}
								checked={value === option}
							/>
							<label className="ml-3" htmlFor={option}>
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

ControllerRadio.displayName = 'ControllerRadio'
