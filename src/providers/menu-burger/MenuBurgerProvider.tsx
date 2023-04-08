import { FC, PropsWithChildren, createContext, useMemo, useState } from 'react'

import { IMenuBurger } from './menu-burger.interface'

export const MenuBurgerContext = createContext<IMenuBurger>({} as IMenuBurger)

const MenuBurgerProvider: FC<PropsWithChildren> = ({ children }) => {
	const [isBurger, setIsBurger] = useState(false)

	const memoizedValue = useMemo(
		() => ({
			isBurger,
			setIsBurger
		}),
		[isBurger]
	)

	return (
		<MenuBurgerContext.Provider value={memoizedValue}>
			{children}
		</MenuBurgerContext.Provider>
	)
}

export default MenuBurgerProvider
