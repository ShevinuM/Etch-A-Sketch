document.addEventListener("DOMContentLoaded", function () {
	const container = document.getElementById("grid-container");

	let isMouseDown = false;

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
			if (isMouseDown) this.style.backgroundColor = "black";
		});
	}
});
