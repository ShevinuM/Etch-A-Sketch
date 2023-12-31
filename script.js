document.addEventListener("DOMContentLoaded", function () {
	const container = document.getElementById("grid-container");

	let isMouseDown = false;
	let penColor = "#FFFF00";
	let backgroundColor = "#FFC0CB";
	let eraserMode = false;
	let rainbowMode = false;
	const rainbowColors = [
		"#FF0000",
		"#FF7F00",
		"#FFFF00",
		"#00FF00",
		"#0000FF",
		"#4B0082",
		"#9400D3",
	];

	// Event to set the flag true when mouse is down
	container.addEventListener("mousedown", function () {
		isMouseDown = true;
	});

	// Event to set the flag false when mouse is up
	container.addEventListener("mouseup", function () {
		isMouseDown = false;
	});

	function createGrid(size) {
		container.innerHTML = "";
		for (let i = 0; i < size * size; i++) {
			const cell = document.createElement("div");
			cell.classList.add("cell");
			// Add more properties or event listeners to each cell if needed.
			container.appendChild(cell);

			cell.addEventListener("mouseover", function () {
				if (isMouseDown) {
					if (eraserMode) {
						this.style.backgroundColor = null;
					} else if (rainbowMode) {
						const randomIndex = Math.floor(
							Math.random() * rainbowColors.length
						);
						this.style.backgroundColor = rainbowColors[randomIndex];
					} else {
						this.style.backgroundColor = penColor;
						console.log(penColor);
					}
				}
			});
		}
	}
	createGrid(32);

	const penColorPicker = document.querySelector("#pen-color");
	penColorPicker.addEventListener("change", watchPenColorPicker);

	function watchPenColorPicker(event) {
		penColor = event.target.value;
	}

	const backgroundColorPicker = document.querySelector("#background-color");
	backgroundColorPicker.addEventListener(
		"change",
		watchBackgroundColorPicker
	);

	function watchBackgroundColorPicker(event) {
		container.style.backgroundColor = event.target.value;
	}

	const gridColorPicker = document.querySelector("#grid-color");
	gridColorPicker.addEventListener("change", watchGridColorPicker);

	function watchGridColorPicker(event) {
		document.querySelectorAll(".cell").forEach((p) => {
			p.style["border-color"] = event.target.value;
		});
		container.style["border-color"] = event.target.value;
	}

	document
		.getElementById("showGridLines")
		.addEventListener("change", function () {
			if (this.checked) {
				document.querySelectorAll(".cell").forEach((p) => {
					p.style["border-width"] = "0.5px";
				});
			} else {
				document.querySelectorAll(".cell").forEach((p) => {
					p.style["border-width"] = "0px";
				});
			}
		});

	const inputTypeSelector = document.querySelector("#input-type");
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
			eraserMode = false;
			rainbowMode = true;
		}
	}

	const gridSizeSelector = document.querySelector("#grid-size-slider");
	const gridSizeDisplay = document.querySelector("#grid-size-display");
	gridSizeSelector.addEventListener("change", watchGridSizeSelector);

	function watchGridSizeSelector(event) {
		const selectedGridSize = gridSizeSelector.value;
		gridSizeDisplay.textContent = `${selectedGridSize} × ${selectedGridSize}`;
		container.style[
			"grid-template-columns"
		] = `repeat(${selectedGridSize}, 1fr)`;
		container.style[
			"grid-template-rows"
		] = `repeat(${selectedGridSize}, 1fr)`;
		createGrid(selectedGridSize);
	}

	const clearBtn = document.querySelector("#clear-btn");
	clearBtn.addEventListener("click", watchClearButton);

	function watchClearButton() {
		document.querySelectorAll(".cell").forEach((cell) => {
			cell.style.backgroundColor = null;
		})
	}

});
