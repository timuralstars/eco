import axios from 'axios'

import { getContentType } from '@/utils/api/get-content-type'

const instance = axios.create({
	baseURL: 'https://nominatim.openstreetmap.org/',
	headers: getContentType()
})

export default instance
