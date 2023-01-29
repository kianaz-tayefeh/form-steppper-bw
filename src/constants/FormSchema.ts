import { z, ZodType } from 'zod'

const phoneRegExp: RegExp =
	/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

type FormSchemaType = {
	step1: ZodType<object>
	step2: ZodType<object>
	step3: ZodType<object>
}

export const FormSchema: FormSchemaType = {
	step1: z.object({
		name: z.string().min(4, { message: 'Name cannot be less than 4 characters' }),
		email: z.string().email(),
		phone: z.string().regex(phoneRegExp, { message: 'The phone number is not correct' }),
		gender: z.enum(['male', 'female', 'other']),
	}),
	step2: z.object({
		birthdate: z.string(),
		address: z.string(),
		height: z
			.number()
			.gte(100, { message: 'height cannot be less than 100 centimetres' })
			.lte(230, { message: 'height cannot exceed 230 centimetres' }),
		weight: z
			.number()
			.gte(45, { message: 'weight cannot be less than 45 kilograms' })
			.lte(250, { message: 'weight cannot exceed 250 kilograms' }),
		languages: z.array(z.enum(['german', 'spanish', 'french', 'italian'])),
	}),
	step3: z.object({
		accept: z.literal('yes'),
	}),
}
