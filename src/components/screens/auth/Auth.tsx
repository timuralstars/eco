import { FC } from 'react'

import Button from '@/components/ui/button/Button'
import Field from '@/components/ui/field/Field'
import Header from '@/components/ui/header/Header'
import Loader from '@/components/ui/loader/Loader'

import logo from '@/assets/images/logo/logo.png'

import styles from './Auth.module.scss'
import { useAuthPage } from './useAuthPage'

const Auth: FC = () => {
	const {
		isLoading,
		type,
		handleSubmit,
		handlerTypeAuth,
		register,
		onSubmit,
		errors
	} = useAuthPage()

	return (
		<div className={styles.auth}>
			<Header />
			{isLoading ? (
				<Loader />
			) : (
				<form>
					<img src={logo} alt='Eco' />
					<h1>{type === 'login' ? 'ВХОД' : 'РЕГИСТРАЦИЯ'}</h1>
					<p>{errors?.nickname && errors.nickname.message}</p>
					<Field
						{...register('nickname', {
							required: 'Имя обязательное поле!'
						})}
						placeholder='Имя'
					/>
					<p>{errors?.password && errors.password.message}</p>
					<Field
						type='password'
						{...register('password', {
							required: 'Пароль обязательное поле!'
						})}
						placeholder='Пароль'
					/>
					<div className={styles['auth-type']}>
						<button type='button' onClick={handlerTypeAuth}>
							{type === 'login' ? 'Зарегистрироваться' : 'Войти'}
						</button>
					</div>
					<div>
						<Button type='submit' handlerClick={handleSubmit(onSubmit)}>
							{type === 'login' ? 'Войти' : 'Зарегистрироваться'}
						</Button>
					</div>
				</form>
			)}
		</div>
	)
}

export default Auth
