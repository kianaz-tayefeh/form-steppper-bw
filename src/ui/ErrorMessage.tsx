import React from 'react'

type ErrorMessagePropsType = {
	error: string | undefined
}

export const ErrorMessage: React.FC<ErrorMessagePropsType> = (props) => {
	const { error } = props

	return <p className="text-red-500 h-5">{error ? `Error: ${error}` : ' '}</p>
}

ErrorMessage.displayName = 'ErrorMessage'
