Array.prototype.map.call(
	document.querySelectorAll('#month-envelope-container tbody tr'),
	row => {
		const values = Array.prototype.map.call(
			row.querySelectorAll('td:not(.fixed-first-col)'),
			column => column.innerText
		);
		const sum = values.reduce((a, b) => parseFloat(a) + parseFloat(b))
		const average = sum / values.length;
		const columnElement = document.createElement("td");
		const strongElement = document.createElement("strong");
		const valueText = document.createTextNode(average.toFixed(2));
		strongElement.appendChild(valueText);
		columnElement.appendChild(strongElement);
		row.appendChild(columnElement);
    }
)
