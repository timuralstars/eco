import { FC, PropsWithChildren, createContext, useState } from 'react'

import { IMenuBurger } from './menu-burger.interface'

export const MenuBurgerContext = createContext<IMenuBurger>({} as IMenuBurger)

const MenuBurgerProvider: FC<PropsWithChildren> = ({ children }) => {
	const [isBurger, setIsBurger] = useState(false)

	return (
		<MenuBurgerContext.Provider value={{ isBurger, setIsBurger }}>
			{children}
		</MenuBurgerContext.Provider>
	)
}

export default MenuBurgerProvider
