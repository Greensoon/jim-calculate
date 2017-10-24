export const getByCls = function(clazz) {
	return document.querySelector(`.${clazz}`)
}

export const getByClsAll = function(clazz) {
	return document.querySelectorAll(`.${clazz}`)
}

export const getByTag = function(tag) {
	const _dom = document.getElementsByTagName(tag)
	return _dom ? _dom[0] : null
}

export const bodyAppend = function(child) {
	const _b = getByTag('body')
	return _b.appendChild(child)
}

export const createEle = function(tag) {
	return document.createElement(tag)
}

export const hasClass = function(dom, clazz) {
	const classname = dom.className.split(' ')
	return classname.indexOf(clazz) >= 0
}

export const addClass = function(dom, clazz) {
	if(hasClass(dom, clazz)) {
		return
	}

	dom.className = dom.className + ' ' + clazz
}