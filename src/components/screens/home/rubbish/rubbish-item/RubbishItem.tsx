import cn from 'clsx'
import { FC } from 'react'

import MaterialIcon from '@/components/ui/material-icon/MaterialIcon'

import { useCurrentRubbish } from '@/hooks/useCurrentRubbish'

import { IRubbishItem } from '../rubbish.interface'

import styles from './RubbishItem.module.scss'

const RubbishItem: FC<IRubbishItem> = rubbish => {
	const { currentRubbish, setCurrentRubbish } = useCurrentRubbish()

	return (
		<li
			onClick={() => setCurrentRubbish(rubbish)}
			className={cn(styles.item, {
				[styles.active]: currentRubbish === rubbish
			})}
		>
			<div>
				<MaterialIcon name={rubbish.icon} />
			</div>
			<span>{rubbish.title}</span>
		</li>
	)
}

export default RubbishItem
