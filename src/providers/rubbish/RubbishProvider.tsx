import { FC, PropsWithChildren, createContext, useMemo, useState } from 'react'

import { RubbishType } from '@/interfaces/rubbish.interface'

import { IRubbishProvider } from './rubbish-provider.interface'

export const RubbishContext = createContext<IRubbishProvider>(
	{} as IRubbishProvider
)

const RubbishProvider: FC<PropsWithChildren> = ({ children }) => {
	const [currentRubbish, setCurrentRubbish] = useState<RubbishType>('')

	const memoizedValue = useMemo(
		() => ({
			currentRubbish,
			setCurrentRubbish
		}),
		[currentRubbish]
	)

	return (
		<RubbishContext.Provider value={memoizedValue}>
			{children}
		</RubbishContext.Provider>
	)
}

export default RubbishProvider
