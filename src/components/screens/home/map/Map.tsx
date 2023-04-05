import 'leaflet/dist/leaflet.css'
import { FC } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

import { useGeoLocation } from '@/hooks/useGeoLocation'

import './Map.scss'
import { userIcon } from './map.helper'

const Map: FC = () => {
	const { lat, lng, isLoaded } = useGeoLocation()

	return (
		<>
			{isLoaded && (
				<MapContainer center={[lat, lng]} zoom={20}>
					<TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
					<Marker icon={userIcon} position={[lat, lng]}>
						<Popup>Это Я!</Popup>
					</Marker>
				</MapContainer>
			)}
		</>
	)
}

export default Map
