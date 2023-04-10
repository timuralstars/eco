import axios from 'axios'

import { rubbishData } from '@/components/screens/home/rubbish/rubbish.data'

import { IRubbishPlace } from '@/interfaces/rubbish.interface'

const YANDEX_MAP_URL = 'https://search-maps.yandex.ru/v1/'

export const MapService = {
	async getRubbishPlaces(rubbish: string) {
		const rubbishDescription = rubbishData.find(r => r.title === rubbish)?.value
		const {
			data: { features }
		} = await axios.get<IRubbishPlace>(
			`${YANDEX_MAP_URL}?text=${rubbishDescription}&type=biz&lang=ru_RU&apikey=${
				import.meta.env.VITE_API_YANDEX_KEY
			}`
		)

		return features
	}
}
