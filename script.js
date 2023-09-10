class FieldCell {
    constructor() {
    }
}


class Snake {
    constructor() {
    }
}


class Food {
    constructor() {
    }
}


function InitGame() {
    
    const cells = document.querySelectorAll(".cell");

    
    cells[0].classList.add("snake");

    for (let i = 1; i < cells.length; i++) {
        cells[i].classList.add("field-cell");
    }
}

window.addEventListener("load", InitGame);
