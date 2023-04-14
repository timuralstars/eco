import { Placemark, withYMaps } from '@pbe/react-yandex-maps'
import { FC } from 'react'

import {
	createBalloonTemplateFactory,
	createPlaceTemplateFactory
} from './marker.helper'
import { IMarker } from './marker.interface'

const Marker: FC<IMarker> = ({ type, lat, lng, ...props }) => {
	const { ymaps, place } = props
	return (
		<>
			<Placemark
				options={{
					iconLayout: 'default#image',
					iconImageHref: '',
					iconImageOffset: [0, 0],
					iconImageSize: [50, 50]
				}}
				properties={{
					balloonContent: createBalloonTemplateFactory(ymaps, type, place)
				}}
				geometry={[lat, lng]}
			/>
			<Placemark
				options={{
					iconLayout: createPlaceTemplateFactory(ymaps, type, place)
				}}
				geometry={[lat, lng]}
			/>
		</>
	)
}

export default withYMaps(Marker, true, [
	'templateLayoutFactory',
	'geoObject.addon.balloon',
	'geoObject.addon.hint'
])
