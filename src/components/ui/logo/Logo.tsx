import { FC } from 'react'
import { Link } from 'react-router-dom'

import logo from '@/assets/images/logo/logo.png'

import styles from './Logo.module.scss'

const Logo: FC = () => {
	return (
		<Link to='/' className={styles.logo}>
			<img src={logo} alt='Logo' />
			<span>Greenpeace</span>
		</Link>
	)
}

export default Logo
