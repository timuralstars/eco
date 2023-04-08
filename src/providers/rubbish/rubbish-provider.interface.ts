import { IRubbishItem } from '@/components/screens/home/rubbish/rubbish.interface'

export interface IRubbishProvider {
	currentRubbish: IRubbishItem
	setCurrentRubbish: React.Dispatch<React.SetStateAction<IRubbishItem>>
}
