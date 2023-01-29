export const VALIDATIONS = {
	name: {
		wrong: 'na',
		correct: 'namename',
		error: 'Error: Name cannot be less than 4 characters',
	},
	email: {
		wrong: 'email',
		correct: 'email@email.com',
		error: 'Error: Invalid email',
	},
	phone: {
		wrong: '123',
		correct: '123456789',
		error: 'Error: The phone number is not correct',
	},
	height: {
		wrong: '10',
		correct: '150',
		error: 'Error: height cannot be less than 100 centimetres',
	},
	weight: {
		wrong: '400',
		correct: '100',
		error: 'Error: weight cannot exceed 250 kilograms',
	},
}
