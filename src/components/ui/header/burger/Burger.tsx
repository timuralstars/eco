import cn from 'clsx'
import { FC } from 'react'

import { useMenuBurger } from '@/hooks/useMenuBurger'

import styles from './Burger.module.scss'

const Burger: FC = () => {
	const { isBurger, setIsBurger } = useMenuBurger()

	return (
		<div
			onClick={() => {
				setIsBurger(prev => !prev)
			}}
			className={cn(styles.burger, {
				[styles.active]: isBurger
			})}
		>
			<div></div>
			<div></div>
			<div></div>
		</div>
	)
}

export default Burger
