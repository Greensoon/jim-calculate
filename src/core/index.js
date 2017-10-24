import { getByClsAll, hasClass } from '../utils/dom'
import { on } from './events'

// let data = {}

const numFn = function(evt) {
	const target = evt.target
	console.log(target)
}

const operFn = function(evt) {
	const target = evt.target
	console.log(target)
}

const fn = function(evt) {
	console.log(evt)
	const target = evt.target
	if(hasClass(target, 'jm-oper')) {
		operFn(evt)
	} else {
		numFn(evt)
	}
}

export default function() {
	const btns = getByClsAll('col-25')
	btns.forEach((e) => {
		console.log(e)
		on(e, 'click', fn)
	})
}