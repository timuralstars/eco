import { useContext } from 'react'

import { RubbishContext } from '@/providers/rubbish/RubbishProvider'

export const useCurrentRubbish = () => useContext(RubbishContext)
