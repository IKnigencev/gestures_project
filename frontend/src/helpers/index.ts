import { STATUS } from '../types/auth.ts'

export const statusCheck = {
	initial: (status: STATUS) => status === STATUS.initial,
	loding: (status: STATUS) => status === STATUS.request,
	success: (status: STATUS) => status === STATUS.success,
	failure: (status: STATUS) => status === STATUS.failure,
	ready: (status: STATUS) =>
		status !== STATUS.initial && status !== STATUS.request
}
