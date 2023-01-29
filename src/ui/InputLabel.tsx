import React, { FC } from 'react'

type InputLabelPropsType = {
	name: string
}

export const InputLabel: FC<InputLabelPropsType> = (props) => {
	const { name } = props

	return (
		<label className="capitalize block text-gray-700 text-sm font-bold mb-2" htmlFor={name}>
			{name}
		</label>
	)
}

InputLabel.displayName = 'InputLabel'
