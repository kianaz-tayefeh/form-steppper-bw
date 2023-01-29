import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { FormSchema } from '../constants/FormSchema'
import { ControllerInput, ControllerCheckboxes, FormWizard } from '../ui'
import { FormContext } from '../contexts/FormContext'
import { LANGUAGES_OPTIONS } from '../constants/options'

export const MoreInformation: React.FC<{}> = () => {
	const { state } = React.useContext(FormContext)
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: state,
		resolver: zodResolver(FormSchema.step2),
		mode: 'onTouched',
	})

	return (
		<FormWizard handleSubmit={handleSubmit}>
			<div className="flex flex-wrap -mx-3 mb-6">
				<ControllerInput name="birthdate" control={control} errors={errors} type="date" />
				<ControllerInput name="address" control={control} errors={errors} />
			</div>
			<div className="flex flex-wrap -mx-3 mb-6">
				<ControllerInput name="height" control={control} errors={errors} type="number" />
				<ControllerInput name="weight" control={control} errors={errors} type="number" />
			</div>
			<ControllerCheckboxes
				name="languages"
				control={control}
				errors={errors}
				options={LANGUAGES_OPTIONS}
			/>
		</FormWizard>
	)
}

MoreInformation.displayName = 'MoreInformation'
