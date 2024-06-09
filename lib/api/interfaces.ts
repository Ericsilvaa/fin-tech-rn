import { STATUS_CODES } from './consts'

export interface IApiResponse<T> {
  success: boolean
  message: string
  code: keyof typeof STATUS_CODES
  data: T
}
