import { Placemark, withYMaps } from '@pbe/react-yandex-maps'
import { FC } from 'react'

import { createPlaceTemplateFactory } from './marker.helper'
import { IMarker } from './marker.interface'

const Marker: FC<IMarker> = ({ type, lat, lng, ...rest }) => {
	const { ymaps } = rest

	return (
		<Placemark
			options={{
				iconLayout: createPlaceTemplateFactory(ymaps, type)
			}}
			geometry={[lat, lng]}
		/>
	)
}

export default withYMaps(Marker, true, ['templateLayoutFactory'])
