import { ZodType } from 'zod'

import { StateType } from '../contexts/FormContext'

export const isValidForm = (schema: ZodType<object>, data: StateType) => {
	try {
		schema.parse(data)
		return true
	} catch (error) {
		return false
	}
}
