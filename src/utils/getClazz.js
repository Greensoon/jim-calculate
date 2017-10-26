import { addClass, removeClass, getByCls } from './dom'

const clazzes = ['jm-reset', 'jm-zf', 'jm-per', 'jm-dot']
const getClazzes = function(clzes, clazz) {
	let ret = ''
	clzes.forEach(function(e) {
		if(clazz.indexOf(e) >= 0) {
			ret = e
		}
	})
	return ret
}

export const getClazz = function(clazz) {
	return getClazzes(clazzes, clazz)
}

const opers = ['chu', 'multi', 'minius', 'plus', 'equal']
export const getOper = function(clazz) {
	return getClazzes(opers, clazz)
}

export const resize = function() {
	const show = getByCls('jm-ret')
	const _len = show.innerText.length
	if(_len > 12) {
		addClass(show, 'jm-24')
	} else if( _len > 6) {
		addClass(show, 'jm-12')
	}
}

export const resetSize = function() {
	const show = getByCls('jm-ret')
	const _len = show.innerText.length
	if(_len <= 6) {
		removeClass(show, 'jm-12')
	}

	if(_len <= 12) {
		removeClass(show, 'jm-24')
	}
}
