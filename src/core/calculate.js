import { clearOper } from '../utils/operHandle'
import { resize } from '../utils/getClazz'
import { getByCls } from '../utils/dom'

let data = {
	first: 0,
	second: 0,
	ret: 0,
	ret1: 0
}

let cache = {}

export const tools = {
	zf: function() {
		data.ret = -1 * data.ret
	},
	per: function() {
		data.ret = 0.01 * data.ret
	},
	reset: function() {
		data = {
			first: 0,
			second: 0,
			ret: 0,
			ret1: 0
		}
		clearOper()
	},
	dot: function() {
		if(/\./.test(data.ret)) {
			return
		}
		data.ret = data.ret + '.'
		data.second && (data.ret1 = data.ret1 + '.')
	}
}


const calculate = function() {
	const _key = Number(data.first) + data.oper + Number(data.second)

	if(!cache[_key]) {
		const _ret = eval(_key)
		cache[_key] = _ret
	}

	return cache[_key]
}


export const update = function(val) {
	const show = getByCls('jm-ret')
	show.innerText = val
	resize()
}

export const equal = function() {
	if(!data.first && !data.second && !data.oper) {
		return
	}
	const _ret = calculate()
	update(_ret)
	data = {
		ret: _ret,
		first: 0,
		second: 0,
		ret1: 0
	}
}

export const getData = function() {
	return data
}