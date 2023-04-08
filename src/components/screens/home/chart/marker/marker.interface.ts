import { YMapsApi } from '@pbe/react-yandex-maps/typings/util/typing'

export interface IMarker {
	lat: number
	lng: number
	type: 'user' | 'place'
	ymaps?: YMapsApi
}
