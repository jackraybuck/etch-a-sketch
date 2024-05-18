const container = document.querySelector(".container");
const containerWidth = 700;
const genBtn = document.querySelector(".generate");
genBtn.addEventListener("click", generateTiles);

function generateTiles() {
    container.textContent = "";
    const numTiles = parseInt(prompt("How many tiles per side?"));

    for (i = 0; i < numTiles * numTiles; i++) {
        const tile = document.createElement("div");
        const tileWidth = (containerWidth / numTiles);
        tile.style.width = `${tileWidth}px`;
        tile.style.height = tile.style.width;
        tile.setAttribute("class", "tile");

        container.appendChild(tile);
        tile.addEventListener("mouseenter", () => {
            // tile.classList.add("tile-fill");
            const red = random(255);
            const green = random(255);
            const blue = random(255);

            tile.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
        })
    }
}

function random(num) {
    return Math.floor(Math.random() * num);
}