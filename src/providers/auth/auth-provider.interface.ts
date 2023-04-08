import { SetStateAction } from 'react'

export interface IAuthContext {
	isUser: boolean
	setIsUser: React.Dispatch<SetStateAction<boolean>>
}
