import { FC } from 'react'

import Header from '@/components/ui/header/Header'

import styles from './NotFound.module.scss'

const NotFound: FC = () => {
	return (
		<div className={styles['not-found']}>
			<Header />
			<p>Страница не найдена!</p>
		</div>
	)
}

export default NotFound
