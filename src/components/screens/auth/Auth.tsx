import { useMutation } from '@tanstack/react-query'
import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import Button from '@/components/ui/button/Button'
import Field from '@/components/ui/field/Field'
import Header from '@/components/ui/header/Header'
import Loader from '@/components/ui/loader/Loader'

import logo from '@/assets/images/logo/logo.png'

import { AuthService } from '@/services/auth/AuthService'
import { IAuthRequest } from '@/services/auth/auth.interface'

import { useAuth } from '@/hooks/useAuth'

import { IFields } from '@/interfaces/fields.interfaces'

import styles from './Auth.module.scss'

const Auth: FC = () => {
	const [type, setType] = useState<'login' | 'register'>('login')

	const { setIsUser } = useAuth()

	const { mutateAsync, isLoading } = useMutation(
		['auth'],
		async (data: IAuthRequest) => {
			return await AuthService.main(data.type, data.body)
		}
	)

	const { register, handleSubmit } = useForm<IFields>()

	const handlerTypeAuth = () => {
		type === 'login' ? setType('register') : setType('login')
	}

	const onSubmit: SubmitHandler<IFields> = async body => {
		const { accessToken } = await mutateAsync({ type, body })

		localStorage.setItem('accessToken', accessToken)

		setIsUser(true)
	}

	return (
		<div className={styles.auth}>
			<Header />
			{isLoading ? (
				<Loader />
			) : (
				<form>
					<img src={logo} alt='Eco' />
					<h1>{type === 'login' ? 'ВХОД' : 'РЕГИСТРАЦИЯ'}</h1>
					<Field {...register('nickname')} placeholder='Имя' />
					<Field
						type='password'
						{...register('password')}
						placeholder='Пароль'
					/>
					<div className={styles['auth-type']}>
						<button type='button' onClick={handlerTypeAuth}>
							{type === 'login' ? 'Зарегистрироваться' : 'Войти'}
						</button>
					</div>
					<div>
						<Button handlerClick={handleSubmit(onSubmit)}>
							{type === 'login' ? 'Войти' : 'Зарегистрироваться'}
						</Button>
					</div>
				</form>
			)}
		</div>
	)
}

export default Auth
