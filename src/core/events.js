export const on = function(target, name, fn) {
	if(window.addEventListener) {
		target.addEventListener(name, function(event) {
			fn(event)
		}, false)
	} else if(window.attachEvent) {
		target.attachEvent(name, function(event) {
			fn(event)
		}, false)
	} else {
		target[`on${name}`] = function(event) {
			fn(event)
		}
	}
}

export const off = function(target, name, fn) {
	if(window.removeEventListener) {
		target.removeEventListener(name, fn, false)
	} else if(window.detachEvent) {
		target.detachEvent(name, fn, false)
	} else {
		target[`on${name}`] = null
	}
}