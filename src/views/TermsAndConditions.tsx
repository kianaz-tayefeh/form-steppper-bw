import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { FormSchema } from '../constants/FormSchema'
import { ControllerRadio, FormWizard } from '../ui'
import { FormContext } from '../contexts/FormContext'
import { YES_NO_OPTIONS } from '../constants/options'

export const TermsAndConditions: React.FC<{}> = () => {
	const { state } = React.useContext(FormContext)
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: state,
		resolver: zodResolver(FormSchema.step3),
		mode: 'onTouched',
	})

	return (
		<FormWizard handleSubmit={handleSubmit}>
			<div className="flex flex-wrap -mx-3 mb-6">
				<ControllerRadio name="accept" control={control} errors={errors} options={YES_NO_OPTIONS} />
			</div>
		</FormWizard>
	)
}

TermsAndConditions.displayName = 'TermsAndConditions'
