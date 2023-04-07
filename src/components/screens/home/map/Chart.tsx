import { Map, YMaps } from '@pbe/react-yandex-maps'
import { FC } from 'react'

import { useGeoLocation } from '@/hooks/useGeoLocation'

import './Chart.scss'
import Marker from './marker/Marker'

const Chart: FC = () => {
	const { lat, lng, isLoaded } = useGeoLocation()
	return (
		<>
			{isLoaded && (
				<YMaps>
					<Map
						className='min-h-screen'
						defaultState={{ center: [lat, lng], zoom: 14 }}
					>
						<Marker type='place' lat={lat} lng={lng} />
					</Map>
				</YMaps>
			)}
		</>
	)
}

export default Chart
