import { FC, useState } from 'react'

import Field from '@/components/ui/field/Field'
import Header from '@/components/ui/header/Header'

import logo from '@/assets/images/logo/logo.png'

import styles from './Auth.module.scss'

const Auth: FC = () => {
	const [type, setType] = useState<'login' | 'reg'>('login')

	const handlerTypeAuth = () => {
		if (type === 'login') setType('reg')
		setType('login')
	}

	return (
		<div className={styles.auth}>
			<Header />
			<div>
				<img className='inline' src={logo} alt='Logo' />
				<h1>{type === 'login' ? 'ВХОД' : 'РЕГИСТРАЦИЯ'}</h1>
				<Field />
				<Field />
				<button onClick={handlerTypeAuth}>
					{type === 'login' ? 'Зарегистрироваться' : 'Войти'}
				</button>
			</div>
		</div>
	)
}

export default Auth
