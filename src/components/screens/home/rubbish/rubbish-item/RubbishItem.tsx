import { FC } from 'react'

import MaterialIcon from '@/components/ui/material-icon/MaterialIcon'

import { IRubbishItem } from '../rubbish.interface'

import styles from './RubbishItem.module.scss'

const RubbishItem: FC<IRubbishItem> = ({ value, icon }) => {
	return (
		<li className={styles.item}>
			<div>
				<MaterialIcon name={icon} />
			</div>
			<span>{value}</span>
		</li>
	)
}

export default RubbishItem
