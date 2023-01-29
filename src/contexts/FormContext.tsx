import React, { useState, createContext, useCallback, ReactNode } from 'react'
import { AcceptEnum, GenderEnum, LanguageEnum } from '../constants/options'

export type StateType = {
	name: string
	email: string
	phone: string
	gender: GenderEnum

	birthdate: string
	address: string
	height: number
	weight: number
	languages: LanguageEnum[]

	accept: AcceptEnum
}

const defaultValue: StateType = {
	name: '',
	email: '',
	phone: '',
	gender: GenderEnum.other,

	birthdate: '',
	address: 'Munchen',
	height: 170,
	weight: 80,
	languages: [LanguageEnum.german],

	accept: AcceptEnum.no,
}

type FormContextType = {
	state: StateType
	dispatch: (formData: StateType) => void
}

export const FormContext = createContext<FormContextType>({} as FormContextType)

FormContext.displayName = 'FormContext'

type FormProviderPropsType = {
	children: ReactNode
}

export const FormProvider: React.FC<FormProviderPropsType> = (props) => {
	const { children } = props
	const [state, setState] = useState<StateType>(defaultValue)

	const dispatch = useCallback(
		(formData: StateType) => {
			setState((prevState) => ({
				...prevState,
				...formData,
			}))
		},
		[setState]
	)

	const contextValue = { state, dispatch }

	return <FormContext.Provider value={contextValue}>{children}</FormContext.Provider>
}
