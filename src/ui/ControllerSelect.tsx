import React, { useCallback, FC } from 'react'
import { Control, Controller, FieldErrorsImpl } from 'react-hook-form'
import Select, { SingleValue } from 'react-select'

import { StateType } from '../contexts/FormContext'
import { ErrorMessage } from './ErrorMessage'
import { InputLabel } from './InputLabel'

type SelectOptionType = {
	value: string
	label: string
}

type ControllerSelectPropsType = {
	name: keyof StateType
	errors: Partial<FieldErrorsImpl<StateType>>
	control: Control<StateType>
	options: SelectOptionType[]
}

export const ControllerSelect: FC<ControllerSelectPropsType> = (props) => {
	const { name, errors, control, options } = props

	const handleChange = useCallback(
		(selected: SingleValue<SelectOptionType>, onChange: (value: string) => void) => {
			onChange(selected?.value as string)
		},
		[name]
	)

	return (
		<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
			<InputLabel name={name} />
			<Controller
				name={name}
				control={control}
				render={({ field: { onChange, value, ...restOfField } }) => (
					<Select
						{...restOfField}
						options={options}
						onChange={(selected) => handleChange(selected, onChange)}
						value={options.filter((option) => option.value === value)}
					/>
				)}
			/>
			<ErrorMessage error={errors?.[name]?.message} />
		</div>
	)
}

ControllerSelect.displayName = 'ControllerSelect'
