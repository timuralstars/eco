import { useEffect, useState } from 'react'

interface IUserGeoLocation {
	lat: number
	lng: number
	isLoaded: boolean
}

export const useGeoLocation = () => {
	const [location, setLocation] = useState<IUserGeoLocation>({
		lat: 0,
		lng: 0,
		isLoaded: false
	})

	const onSuccess = (location: GeolocationPosition) => {
		setLocation({
			lat: location.coords.latitude,
			lng: location.coords.longitude,
			isLoaded: true
		})
	}

	useEffect(() => {
		if (!('geolocation' in navigator)) {
			alert('Ваш браузер не поддерживает геолокацию!')
		}
		navigator.geolocation.getCurrentPosition(onSuccess)
	}, [])

	return location
}
