import { divIcon } from 'leaflet'

import placeIconUrl from '@/assets/images/map/place-pos-icon.svg'
import userIconUrl from '@/assets/images/map/user-pos-icon.svg'

export const userIcon = divIcon({
	className: 'user-geo',
	html: `
		<div >
			<img src=${userIconUrl}><img/>
		</div>
	`
})
export const placeIcon = divIcon({
	className: 'place-geo',
	html: `
		<div >
			<img src=${placeIconUrl}><img/>
		</div>
	`
})
