import { YMapsApi } from '@pbe/react-yandex-maps/typings/util/typing'

import { IRubbishPlaceItem } from '@/interfaces/rubbish.interface'

export interface IMarker {
	lat: number
	lng: number
	type: 'user' | 'place'
	ymaps?: YMapsApi
	place?: IRubbishPlaceItem
}
