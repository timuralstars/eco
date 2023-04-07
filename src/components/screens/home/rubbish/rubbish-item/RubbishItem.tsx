import { FC } from 'react'

import MaterialIcon from '@/components/ui/material-icon/MaterialIcon'

import { IRubbishItem } from '../rubbish.interface'

import styles from './RubbishItem.module.scss'
import { MapService } from '@/services/map/MapService'

const RubbishItem: FC<IRubbishItem> = ({ value, title, icon }) => {
	return (
		<li
			onClick={() => MapService.getRubbishPlaces(value)}
			className={styles.item}
		>
			<div>
				<MaterialIcon name={icon} />
			</div>
			<span>{title}</span>
		</li>
	)
}

export default RubbishItem
