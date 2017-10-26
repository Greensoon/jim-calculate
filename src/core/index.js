import { getByClsAll, hasClass, removeClass } from '../utils/dom'
import { getClazz, getOper, resetSize } from '../utils/getClazz'
import { clearOper, addOper } from '../utils/operHandle'
import { tools, equal, getData, update } from './calculate'
import { on } from './events'

// normal flow
// let __process = false

const handleNum = function(num, data) {
	if(/\./.test(num)) {
		return
	}

	if(!/\./.test(num)) {
		data.ret = Number(num)
	}
}

const numFn = function(evt, data) {
	const target = evt.target
	const _i = target.innerText

	const _len = String(data.ret).length
	if(_len > 12) {
		console.log('对不起，不支持12位以上的计算')
		return
	}

	if(!data.oper) {
		data.first = data.ret + _i
		data.ret = data.first
	}

	if(data.oper) {
		data.second = data.ret1 + _i
		data.ret1 = data.second
		data.ret = data.ret1
	}

	handleNum(data.ret, data)
	update(data.ret)
}

const operFn = function(evt, data) {
	const target = evt.target
	const opers = getByClsAll('jm-oper')
	opers.forEach((e) => {
		removeClass(e, 'jm-active')
	})

	addOper(target)

	const _c = getOper(target.className)
	if(_c == 'chu') {
		data.oper = '/'
	} else if(_c == 'multi') {
		data.oper = '*'
	} else if(_c == 'minius') {
		data.oper = '-'
	} else if(_c == 'plus') {
		data.oper = '+'
	}

	if(_c == 'equal') {
		equal()
		clearOper()
	} else if(data.first == 0 && data.second == 0 && data.ret != 0) {
		data.first = data.ret
	}
}

const fn = function(evt) {
	const target = evt.target

	let data = getData()

	if(hasClass(target, 'jm-oper')) {
		operFn(evt, data)
	} else if(
		hasClass(target, 'jm-zf') ||
		hasClass(target, 'jm-reset') ||
		hasClass(target, 'jm-per') ||
		hasClass(target, 'jm-dot')
	) {
		const classname = target.className
		let clazz = getClazz(classname)
		clazz = clazz.replace('jm-', '')
		tools[clazz]()

		update(data.ret)
	} else {
		numFn(evt, data)
	}

	resetSize()
}

export default function() {
	const btns = getByClsAll('col-25')
	btns.forEach((e) => {
		on(e, 'click', fn)
	})
}