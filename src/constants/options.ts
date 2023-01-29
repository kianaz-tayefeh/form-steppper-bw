export enum GenderEnum {
	male = 'male',
	female = 'female',
	other = 'other',
}

export enum LanguageEnum {
	german = 'german',
	spanish = 'spanish',
	french = 'french',
	italian = 'italian',
}

export enum AcceptEnum {
	yes = 'yes',
	no = 'no',
}

type SelectOptionType = {
	value: GenderEnum
	label: string
}

export const GENDER_OPTIONS: SelectOptionType[] = [
	{ value: GenderEnum.male, label: 'Male' },
	{ value: GenderEnum.female, label: 'Female' },
	{ value: GenderEnum.other, label: 'Other' },
]

export const LANGUAGES_OPTIONS: LanguageEnum[] = [
	LanguageEnum.german,
	LanguageEnum.spanish,
	LanguageEnum.french,
	LanguageEnum.italian,
]

export const YES_NO_OPTIONS: string[] = [AcceptEnum.yes, AcceptEnum.no]
