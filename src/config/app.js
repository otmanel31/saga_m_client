import { HOST, PORT, ENV } from './main'

export const isProduction = ENV === 'production'
export const isDebug = ENV === 'development'

export const baseURL = `http://${HOST}:${PORT}`