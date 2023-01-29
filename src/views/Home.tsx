import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { FormSchema } from '../constants/FormSchema'
import { ControllerInput, ControllerSelect, FormWizard } from '../ui'
import { FormContext } from '../contexts/FormContext'
import { GENDER_OPTIONS } from '../constants/options'

export const Home: React.FC<{}> = () => {
	const { state } = React.useContext(FormContext)
	const {
		control,
		formState: { errors },
		handleSubmit,
	} = useForm({
		defaultValues: state,
		resolver: zodResolver(FormSchema.step1),
		mode: 'onTouched',
	})

	return (
		<FormWizard handleSubmit={handleSubmit}>
			<div className="flex flex-wrap -mx-3 mb-6">
				<ControllerInput name="name" control={control} errors={errors} />
				<ControllerInput name="email" control={control} errors={errors} type="email" />
			</div>
			<div className="flex flex-wrap -mx-3 mb-6">
				<ControllerInput name="phone" control={control} errors={errors} />
				<ControllerSelect
					name="gender"
					control={control}
					errors={errors}
					options={GENDER_OPTIONS}
				/>
			</div>
		</FormWizard>
	)
}

Home.displayName = 'Home'
