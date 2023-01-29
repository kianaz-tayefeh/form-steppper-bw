import React from 'react'

import { FormContext } from '../contexts/FormContext'
import { FormWizard } from '../ui'

export const Summary: React.FC<{}> = () => {
	const {
		state: { name, email, phone, gender, address, birthdate, height, weight, languages, accept },
	} = React.useContext(FormContext)

	return (
		<FormWizard handleSubmit={() => {}}>
			<div className="font-medium">
				<p>Step 1</p>
				<ul className="m-4">
					<li>name: {name}</li>
					<li>email: {email}</li>
					<li>phone: {phone}</li>
					<li>gender: {gender}</li>
				</ul>
				<p>Step 2</p>
				<ul className="m-4">
					<li>date of birth: {birthdate}</li>
					<li>address: {address}</li>
					<li>spoken languages: [{languages.toString()}]</li>
					<li>height: {height}</li>
					<li>weight: {weight}</li>
				</ul>
				<p>Step 3</p>
				<ul className="m-4">
					<li>accept_condition: {accept}</li>
				</ul>
			</div>
		</FormWizard>
	)
}

Summary.displayName = 'Summary'
