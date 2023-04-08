import {
	FC,
	PropsWithChildren,
	createContext,
	useEffect,
	useMemo,
	useState
} from 'react'

import { getAccessToken } from '@/api/api.helper'

import { IAuthContext } from './auth-provider.interface'

export const AuthContext = createContext<IAuthContext>({} as IAuthContext)

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
	const [isUser, setIsUser] = useState(false)

	useEffect(() => {
		if (!!getAccessToken()) {
			setIsUser(true)
		}
	}, [])

	const memoizedValue = useMemo(() => {
		return { isUser, setIsUser }
	}, [isUser])

	return (
		<AuthContext.Provider value={memoizedValue}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider
