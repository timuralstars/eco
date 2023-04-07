import { FC } from 'react'

import { useMenuBurger } from '@/hooks/useMenuBurger'

import styles from './Rubbish.module.scss'
import RubbishItem from './rubbish-item/RubbishItem'
import { rubbish } from './rubbish.data'

const Rubbish: FC = () => {
	const { isBurger } = useMenuBurger()
	return (
		<>
			{isBurger && (
				<div className={styles.rubbish}>
					<h3>Выбери, какой отход хочешь сдать:</h3>
					<ul>
						{rubbish.map(item => (
							<RubbishItem
								key={item.value}
								title={item.title}
								icon={item.icon}
								value={item.value}
							/>
						))}
					</ul>
					<div></div>
					<div></div>
				</div>
			)}
		</>
	)
}

export default Rubbish
