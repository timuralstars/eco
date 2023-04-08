import axios from 'axios'

import { IRubbishItem } from '@/components/screens/home/rubbish/rubbish.interface'

import { IRubbishPlace } from '@/interfaces/rubbish.interface'

const YANDEX_MAP_URL = 'https://search-maps.yandex.ru/v1/'

export const MapService = {
	async getRubbishPlaces(rubbish: IRubbishItem) {
		const {
			data: { features }
		} = await axios.get<IRubbishPlace>(
			`${YANDEX_MAP_URL}?text=${rubbish.value}&type=biz&lang=ru_RU&apikey=${
				import.meta.env.VITE_API_YANDEX_KEY
			}`
		)

		return features
	}
}
