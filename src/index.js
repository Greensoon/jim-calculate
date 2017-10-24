import { bodyAppend } from './utils/dom'
import tplWrap from './tpl'
import core from './core'

import './index.less'

const jmcaculator = function() {
	bodyAppend(tplWrap)

	core()
}

module.exports = jmcaculator

jmcaculator()


