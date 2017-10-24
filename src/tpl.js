import { createEle } from './utils/dom'

export default (function() {
	const tpl = `
		<div class="jm-row jm-show">
			<div class="jm-col">0</div>
		</div>
		<div class="jm-row">
			<div class="jm-col col-25">AC</div>
			<div class="jm-col col-25">+/-</div>
			<div class="jm-col col-25">%</div>
			<div class="jm-col jm-oper col-25">÷</div>
		</div>
		<div class="jm-row">
			<div class="jm-col col-25">7</div>
			<div class="jm-col col-25">8</div>
			<div class="jm-col col-25">9</div>
			<div class="jm-col jm-oper col-25">×</div>
		</div>
		<div class="jm-row">
			<div class="jm-col col-25">4</div>
			<div class="jm-col col-25">5</div>
			<div class="jm-col col-25">6</div>
			<div class="jm-col jm-oper col-25">-</div>
		</div>
		<div class="jm-row">
			<div class="jm-col col-25">1</div>
			<div class="jm-col col-25">2</div>
			<div class="jm-col col-25">3</div>
			<div class="jm-col jm-oper col-25">+</div>
		</div>
		<div class="jm-row">
			<div class="jm-col col-25">0</div>
			<div class="jm-col col-25">.</div>
			<div class="jm-col col-25">ADD</div>
			<div class="jm-col jm-oper col-25">=</div>
		</div>
	`

	const wrap = createEle('div')
	wrap.className = 'jm-wrap'
	wrap.innerHTML = tpl

	return wrap
})()