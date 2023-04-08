import instance from '@/api/interceptors'

import { IAuthBodyRequest, IAuthResponse } from './auth.interface'

export const AuthService = {
	async main(type: string, body: IAuthBodyRequest) {
		const { data } = await instance.post<IAuthResponse>(`/auth/${type}`, body)

		return data
	}
}
