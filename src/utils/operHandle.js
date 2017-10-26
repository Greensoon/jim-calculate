import { removeClass, addClass, hasClass, getByCls } from './dom'

export const addOper = function(target) {
	if(!hasClass(target, 'jm-active')) {
		addClass(target, 'jm-active')
	}
}

export const clearOper = function() {
	const _t = getByCls('jm-active')
	_t && removeClass(_t, 'jm-active')
}