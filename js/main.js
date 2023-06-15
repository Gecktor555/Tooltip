const boxes = document.querySelectorAll('.boxes div');

const createTooltip = (e) => {
	const tooltipParent = e.target;
	const tooltipText = e.target.dataset.tooltip;
	const tooltipPosition = e.target.dataset.tooltipPosition;

	console.log(tooltipPosition);
	

	const newTooltip = document.createElement('span');
	newTooltip.innerHTML = tooltipText;
	newTooltip.className = `tooltip ${tooltipPosition || "top"}`;

	tooltipParent.appendChild(newTooltip);
	//console.log(e.target);
	//console.log(tooltipText);
}

const removeTooltip = (e) => {
	//console.log(e)
	const tooltip = e.target.querySelector('.tooltip');
	if (tooltip) {
		tooltip.remove();
	}
	//console.log(tooltip);
}

boxes.forEach((box) => box.addEventListener("mouseover",createTooltip));
boxes.forEach((box) => box.addEventListener("mouseleave",removeTooltip));
