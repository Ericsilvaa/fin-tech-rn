import { useAuth } from '@stores/auth'
import { getToken } from '@stores/auth/utils'

export const requestInterceptor = (config: any) => {
  console.log('REQUEST... Interceptor')

  const acessToken = getToken()
  // console.log('🚀 ~ requestInterceptor ~ acessToken:', acessToken)

  if (acessToken != null) {
    if (config.headers) {
      config.headers['Authorization'] = acessToken.token
    }
  }

  // console.log('🚀 ~ config.Method:', config.method)
  console.log('🚀 ~ config.Method:', config.baseURL + config.url)

  console.log('🚀 ~ requestInterceptor ~ config.data:', config.data)
  return config
}

export const requestErrorHandler = (error: any) => {
  return Promise.reject(error)
}

export const responseInterceptor = (config: any) => {
  // console.log('RESPONSE... Interceptor')
  // console.log('🚀 ~ responseInterceptor ~ config:', config)
  return config
}

export const responseErrorHandler = (error: any) => {
  const clearToken = useAuth.use.clearToken()
  const originalConfig = error.config

  if (error.response.status === 401 && !originalConfig._retry) {
    console.log('🚀User is unauthorized....')
    // return refreshTokenApiCall()
    clearToken()
  }

  console.log('🚀 ~ responseErrorHandler ~ error:', error)

  return Promise.reject(error)
}

// const callRefreshToken = async (config: AxiosRequestConfig) => {
//   return new instanceof axios.post().then
// }
