import { YMapsApi } from '@pbe/react-yandex-maps/typings/util/typing'

import placeIconUrl from '@/assets/images/map/place-pos-icon.svg'
import userIconUrl from '@/assets/images/map/user-pos-icon.svg'

export const createPlaceTemplateFactory = (
	ymaps: YMapsApi | undefined,
	type: 'user' | 'place' = 'user'
) => {
	const htmlTemplate = `<div class="w-[50px] h-[50px] flex items-center justify-center rounded-full ${
		type === 'user' ? 'animate-pulse' : 'animate-jump'
	}">
			<img src=${type === 'user' ? userIconUrl : placeIconUrl}  alt="" />
		</div>`

	const iconTemplate = ymaps!.templateLayoutFactory.createClass(htmlTemplate)

	return iconTemplate
}
