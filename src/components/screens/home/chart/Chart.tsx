import { Map, YMaps } from '@pbe/react-yandex-maps'
import { useQuery } from '@tanstack/react-query'
import { FC } from 'react'

import Loader from '@/components/ui/loader/Loader'

import { MapService } from '@/services/map/MapService'

import { useCurrentRubbish } from '@/hooks/useCurrentRubbish'
import { useGeoLocation } from '@/hooks/useGeoLocation'

import Marker from './marker/Marker'

const Chart: FC = () => {
	const { lat, lng, isLoaded } = useGeoLocation()
	const { currentRubbish } = useCurrentRubbish()

	const { data: places, isLoading } = useQuery(
		['rubbish', currentRubbish],
		() => MapService.getRubbishPlaces(currentRubbish),
		{
			enabled: !!currentRubbish
		}
	)

	return (
		<>
			{isLoaded ? (
				<YMaps>
					<Map
						className='min-h-screen'
						defaultState={{ center: [lat, lng], zoom: 13 }}
					>
						<Marker type='user' lat={lat} lng={lng} />
						{!isLoading ? (
							places?.map(place => (
								<Marker
									key={place.properties.CompanyMetaData.id}
									type='place'
									lng={place.geometry.coordinates[0]}
									lat={place.geometry.coordinates[1]}
									place={place}
								/>
							))
						) : (
							<Loader />
						)}
					</Map>
				</YMaps>
			) : (
				<Loader />
			)}
		</>
	)
}

export default Chart
