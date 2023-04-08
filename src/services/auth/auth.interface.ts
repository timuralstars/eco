export interface IAuthRequest {
	body: IAuthBodyRequest
	type: 'login' | 'register'
}

export interface IAuthBodyRequest {
	password: string
	nickname: string
}

export interface IAuthResponse {
	accessToken: string
}
