import { YMapsApi } from '@pbe/react-yandex-maps/typings/util/typing'
import cn from 'clsx'

import placePositionUrl from '@/assets/images/map/place-pos-icon.svg'
import userPositionUrl from '@/assets/images/map/user-pos-icon.svg'

import { IRubbishPlaceItem } from '@/interfaces/rubbish.interface'

import styles from './Marker.module.scss'

export const createPlaceTemplateFactory = (
	ymaps: YMapsApi | undefined,
	type: 'user' | 'place' = 'user',
	place: IRubbishPlaceItem | undefined
) => {
	const htmlTemplate = `<div class="${cn(styles.place, {
		'animate-pulse': type === 'user',
		'animate-jump': type === 'place'
	})}">
		<img src=${type === 'user' ? userPositionUrl : placePositionUrl}></img>
		</div>`

	const iconTemplate = ymaps!.templateLayoutFactory.createClass(htmlTemplate)

	return iconTemplate
}

export const createBalloonTemplateFactory = (
	ymaps: YMapsApi | undefined,
	type: 'user' | 'place' = 'user',
	place: IRubbishPlaceItem | undefined
) => {
	return type === 'place'
		? `

					<div class=${styles.balloon}>
							<h3>${place?.properties.name}</h3>
							<p>${place?.properties.description}</p>
							<span> Режим работы: ${
								place?.properties.CompanyMetaData.Hours !== undefined
									? place?.properties.CompanyMetaData.Hours.text
									: 'Неизвестно'
							}</span>
								<h4>
									Номер телефона:
								</h4>
								<div>
									${
										place?.properties.CompanyMetaData.Phones !== undefined
											? place.properties.CompanyMetaData.Phones.map(
													p => p.formatted
											  )
											: 'Неизвестно'
									}
								</div>
							</div
					</div>
					`
		: ''
}
