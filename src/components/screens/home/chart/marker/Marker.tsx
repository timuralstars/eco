import { Placemark, withYMaps } from '@pbe/react-yandex-maps'
import { FC } from 'react'

import { createPlaceTemplateFactory } from './marker.helper'
import { IMarker } from './marker.interface'

const Marker: FC<IMarker> = ({ type, lat, lng, ...props }) => {
	const { ymaps, place } = props
	return (
		<Placemark
			options={{
				iconLayout: createPlaceTemplateFactory(ymaps, type)
			}}
			properties={{
				hintContent: `<div class="text-accent ">${place?.properties.name}</div>`,
				balloonContent: `${place?.properties.description}`
			}}
			geometry={[lat, lng]}
		/>
	)
}

export default withYMaps(Marker, true, [
	'templateLayoutFactory',
	'geoObject.addon.balloon',
	'geoObject.addon.hint'
])
