import axios from 'axios'

export const MapService = {
	async getRubbishPlaces(rubbish: string) {
		const { data } = await axios.get(
			`https://nominatim.openstreetmap.org/search?format=json&q=${rubbish}`
		)
		console.log(data)
	}
}
