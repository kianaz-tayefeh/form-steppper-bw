import React, { useCallback, FC, ChangeEvent } from 'react'
import { Control, Controller, FieldErrorsImpl } from 'react-hook-form'

import { StateType } from '../contexts/FormContext'
import { ErrorMessage } from './ErrorMessage'
import { InputLabel } from './InputLabel'

type ControllerInputPropsType = {
	name: keyof StateType
	errors: Partial<FieldErrorsImpl<StateType>>
	control: Control<StateType>
	type?: string
}

export const ControllerInput: FC<ControllerInputPropsType> = (props) => {
	const { name, errors, control, type = 'text' } = props

	const handleOnChange = useCallback(
		(e: ChangeEvent<HTMLInputElement>, onChange: (value: string | number) => void) => {
			const newValue = type === 'number' ? parseInt(e.target.value) : e.target.value
			onChange(newValue)
		},
		[name]
	)

	return (
		<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
			<InputLabel name={name} />
			<Controller
				name={name}
				control={control}
				render={({ field: { onBlur, onChange, ...restOfField } }) => (
					<input
						{...restOfField}
						id={name}
						onBlur={(e) => handleOnChange(e, onBlur)}
						onChange={(e) => handleOnChange(e, onChange)}
						type={type}
						className="border-solid appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight h-10"
					/>
				)}
			/>
			<ErrorMessage error={errors?.[name]?.message} />
		</div>
	)
}

ControllerInput.displayName = 'ControllerInput'
