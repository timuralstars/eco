import axios from 'axios'

import { getContentType } from '@/utils/api/get-content-type'

import { getAccessToken } from './api.helper'

const instance = axios.create({
	baseURL: `${import.meta.env.VITE_API_URL}/api`,
	headers: getContentType()
})

instance.interceptors.request.use(config => {
	const accessToken = getAccessToken()

	if (config.headers && accessToken) {
		config.headers.Authorization = `Bearer ${accessToken}`
	}

	return config
})

export default instance
