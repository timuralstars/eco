export interface IRubbishPlace {
	features: IRubbishPlaceItem[]
}

export interface IRubbishPlaceItem {
	type: string
	geometry: {
		type: string
		coordinates: [number, number]
	}
	properties: {
		CompanyMetaData: {
			Categories: IRubbishCategorie[]
			Hours: {
				text: string
				Availabilities: IRubbishHoursAvailabilities
			}
			Phones: IRubbishPhone[]
			address: string
			id: string
			name: string
			url: string
		}
		name: string
		description: string
	}
}

export interface IRubbishCategorie {
	class: string
	name: string
}

export interface IRubbishPhone {
	type: string
	formatted: string
}

export interface IRubbishHoursAvailabilities {
	Intervals: [
		{
			from: string
			to: string
		}
	]
	Monday: boolean
	Thursday: boolean
	Tuesday: boolean
	Wednesday: boolean
	Saturday: string
	Sunday: string
	Friday: string
}

export type RubbishType =
	| ''
	| 'Бумага'
	| 'Батарейки'
	| 'Лампочки'
	| 'Быт'
	| 'Одежда'
	| 'Опасные'
	| 'Пластик'
	| 'Стекло'
	| 'Металл'
