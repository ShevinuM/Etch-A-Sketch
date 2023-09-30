document.addEventListener("DOMContentLoaded", function () {
	const container = document.getElementById("grid-container");

	let isMouseDown = false;
	let penColor = "black"
	let backgroundColor = "white";

	// Event to set the flag true when mouse is down
	container.addEventListener("mousedown", function () {
		isMouseDown = true;
	});

	// Event to set the flag false when mouse is up
	container.addEventListener("mouseup", function () {
		isMouseDown = false;
	});

	for (let i = 0; i < 32 * 32; i++) {
		const cell = document.createElement("div");
		cell.classList.add("cell");
		// Add more properties or event listeners to each cell if needed.
		container.appendChild(cell);

		cell.addEventListener("mouseover", function () {
			if (isMouseDown) this.style.backgroundColor = penColor;
		});
	}

	const penColorPicker = document.querySelector('#pen-color');
	penColorPicker.addEventListener("change", watchPenColorPicker);

	function watchPenColorPicker(event) {
		penColor = event.target.value;
	}

	const backgroundColorPicker = document.querySelector('#background-color');
	backgroundColorPicker.addEventListener("change", watchBackgroundColorPicker);

	function watchBackgroundColorPicker(event) {
		container.style.backgroundColor = event.target.value;
	}

	const gridColorPicker = document.querySelector('#grid-color');
	gridColorPicker.addEventListener("change", watchGridColorPicker);

	function watchGridColorPicker(event) {
		document.querySelectorAll(".cell").forEach((p) => {
			p.style['border-color'] = event.target.value;
		  });
		container.style['border-color'] = event.target.value;
	}

	document.getElementById("showGridLines").addEventListener("change", function() {
		if (this.checked) {
			document.querySelectorAll(".cell").forEach((p) => {
				p.style['border-width'] = '0.5px';
			  });
		} else {
			document.querySelectorAll(".cell").forEach((p) => {
				p.style['border-width'] = '0px';
			  });
		}
	  });
});
