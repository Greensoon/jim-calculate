import { createEle } from './utils/dom'

export default (function() {
	const tpl = `
		<div class="jm-row jm-show">
			<div class="jm-col jm-ret">0</div>
		</div>
		<div class="jm-row">
			<div class="jm-col col-25 jm-reset">C</div>
			<div class="jm-col col-25 jm-zf">+/-</div>
			<div class="jm-col col-25 jm-per">%</div>
			<div class="jm-col jm-oper col-25 chu">÷</div>
		</div>
		<div class="jm-row">
			<div class="jm-col col-25">7</div>
			<div class="jm-col col-25">8</div>
			<div class="jm-col col-25">9</div>
			<div class="jm-col jm-oper col-25 multi">×</div>
		</div>
		<div class="jm-row">
			<div class="jm-col col-25">4</div>
			<div class="jm-col col-25">5</div>
			<div class="jm-col col-25">6</div>
			<div class="jm-col jm-oper col-25 minius">-</div>
		</div>
		<div class="jm-row">
			<div class="jm-col col-25">1</div>
			<div class="jm-col col-25">2</div>
			<div class="jm-col col-25">3</div>
			<div class="jm-col jm-oper col-25 plus">+</div>
		</div>
		<div class="jm-row">
			<div class="jm-col col-25">0</div>
			<div class="jm-col col-25 jm-dot">.</div>
			<div class="jm-col col-25 jm-add">ADD</div>
			<div class="jm-col jm-oper col-25 equal">=</div>
		</div>
	`

	const wrap = createEle('div')
	wrap.className = 'jm-wrap'
	wrap.innerHTML = tpl

	return wrap
})()