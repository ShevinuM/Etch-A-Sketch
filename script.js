document.addEventListener("DOMContentLoaded", function () {
	const container = document.getElementById("grid-container");

	let isMouseDown = false;
	let penColor = "black"
	let backgroundColor = "white";
	let eraserMode = false;
	let rainbowMode = false;
	const rainbowColors = ["#FF0000", "#FF7F00", "#FFFF00", "#00FF00", "#0000FF", "#4B0082", "#9400D3"];

	// Event to set the flag true when mouse is down
	container.addEventListener("mousedown", function () {
		isMouseDown = true;
	});

	// Event to set the flag false when mouse is up
	container.addEventListener("mouseup", function () {
		isMouseDown = false;
	});
	

	for (let i = 0; i < 100 * 100; i++) {
		const cell = document.createElement("div");
		cell.classList.add("cell");
		// Add more properties or event listeners to each cell if needed.
		container.appendChild(cell);

		cell.addEventListener("mouseover", function () {
			if (isMouseDown) {
				if (eraserMode) {
					this.style.backgroundColor = null;
				} else if (rainbowMode) {
					const randomIndex = Math.floor(Math.random() * rainbowColors.length);
  					this.style.backgroundColor = rainbowColors[randomIndex];
				} else {
					this.style.backgroundColor = penColor;
				}
			}
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
	
	const inputTypeSelector = document.querySelector('#input-type');
	inputTypeSelector.addEventListener("change", watchInputTypeSelector);

	function watchInputTypeSelector(event) {
		const selectedInputType = inputTypeSelector.value;
		console.log(selectedInputType);
		if (selectedInputType == "pen") {
			eraserMode = false;
			rainbowMode = false;
		} else if (selectedInputType == "eraser") {
			eraserMode = true;
		} else if (selectedInputType == "rainbow") {
			rainbowMode = true;
		} else {

		}

		}
	
});
