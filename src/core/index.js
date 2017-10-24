import { getByCls, getByClsAll, hasClass, addClass, removeClass } from '../utils/dom'
import { on } from './events'

let data = {
	ret: 0
}

const update = function() {
	const show = getByCls('jm-ret')
	show.innerText = data.ret
}

const resize = function() {
	const _len = String(data.ret).length
	if(_len > 6) {
		const show = getByCls('jm-ret')
		addClass(show, 'jm-12')
	}
}

const numFn = function(evt) {
	const target = evt.target
	const _len = String(data.ret).length
	if(_len > 12) {
		console.log('对不起，不支持12位以上的计算')
		return
	}

	if(!data.oper) {
		data.ret += target.innerText
		data.ret = Number(data.ret)
	}

	resize()
	// data.ret = target.innerText
}

const operFn = function(evt) {
	const target = evt.target
	const opers = getByClsAll('jm-oper')
	opers.forEach((e) => {
		removeClass(e, 'jm-active')
	})
	if(!hasClass(target, 'jm-active')) {
		addClass(target, 'jm-active')
	}
}

const tools = {
	zf: function() {
		data.ret = -1 * data.ret
	},
	per: function() {
		data.ret = 0.01 * data.ret
	},
	reset: function() {
		data.ret = 0
	},
	dot: function() {
		data.ret = data.ret + '.'
	}
}

const clazzes = ['jm-reset', 'jm-zf', 'jm-per', 'jm-dot']
const getClazz = function(clazz) {
	let ret = ''
	clazzes.forEach(function(e) {
		if(clazz.indexOf(e) >= 0) {
			ret = e
		}
	})
	return ret
}

const fn = function(evt) {
	const target = evt.target

	if(hasClass(target, 'jm-oper')) {
		operFn(evt)
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
	} else {
		numFn(evt)
	}

	const show = getByCls('jm-ret')
	const _len = String(data.ret).length
	if(_len <= 6) {
		removeClass(show, 'jm-12')
	}
	update()
}

export default function() {
	const btns = getByClsAll('col-25')
	btns.forEach((e) => {
		on(e, 'click', fn)
	})
}