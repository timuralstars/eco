import { useMutation } from '@tanstack/react-query'
import { useMemo, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { AuthService } from '@/services/auth/AuthService'
import { IAuthRequest } from '@/services/auth/auth.interface'

import { useAuth } from '@/hooks/useAuth'

import { IFields } from '@/interfaces/fields.interfaces'

export const useAuthPage = () => {
	const [type, setType] = useState<'login' | 'register'>('login')

	const { setIsUser } = useAuth()
	const navigate = useNavigate()

	const { mutate, isLoading } = useMutation(
		['auth', type],
		(data: IAuthRequest) => AuthService.main(data.type, data.body),
		{
			onSuccess: ({ accessToken }) => {
				localStorage.setItem('accessToken', accessToken)
				setIsUser(true)
				navigate('/personal')
			},
			onError: ({
				response: {
					data: { message }
				}
			}) => {
				setError('nickname', {
					message
				})
			}
		}
	)

	const {
		register,
		handleSubmit,
		formState: { errors },
		setError
	} = useForm<IFields>({
		mode: 'onChange'
	})

	const handlerTypeAuth = () => {
		type === 'login' ? setType('register') : setType('login')
	}

	const onSubmit: SubmitHandler<IFields> = body => {
		mutate({ type, body })
	}

	return useMemo(() => {
		return {
			type,
			isLoading,
			handleSubmit,
			onSubmit,
			handlerTypeAuth,
			register,
			errors
		}
	}, [type, isLoading, errors])
}
