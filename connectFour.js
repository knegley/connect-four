const columns = document.getElementsByClassName('column')
const table = document.querySelector("#table");
// In case you need tags for individual columns. Feel free to remove these if you don't need them.


let currentPlayer = 'Red'
let nextPlayer = 'Yellow'

const columnSelected = function () {
    const column = event.currentTarget
    if (column.lastElementChild.className === 'empty') {
        if (currentPlayer === 'Red') {
            for (let i = 0; i < column.children.length; i++) {
                if (column.children[i].className === 'empty') {
                    column.children[i].className = 'discRed'
                    break
                }
            }
            nextPlayer = 'Yellow'
        } else {
            for (let i = 0; i < column.children.length; i++) {
                if (column.children[i].className === 'empty') {
                    column.children[i].className = 'discYellow'
                    break
                }
            }
            nextPlayer = 'Red'
        };
        checkForWin(currentPlayer)
        currentPlayer = nextPlayer
    };
};
for (let i = 0; i < columns.length; i++) {
    columns[i].addEventListener("click", columnSelected)
};




// Testing Diagonal Win condition (not final)
function checkForWin(current) {
    let didWin = false
    let playerClass = 'discRed'
    if (current === 'Red') {
        playerClass = 'discRed'
    } else {
        playerClass = 'discYellow'
    }

    // Diagonal
    for (let firstRow = 5; firstRow > 2; firstRow--) {
        let count = 0
        for (let row = firstRow, col = 0; row  >= 0 && col < 6; row--, col ++) {
            let column = document.getElementById('table').children[col]
            if (column.children[row].className === playerClass) {
                count ++
            } else {
                count = 0
            }
            if (count >= 4) {
                didWin = true
            }
        }
    }
    for (let firstCol = 1; firstCol < 4; firstCol++) {
        let count = 0
        for (let col = firstCol, row = 5; col < 7 && row >= 0; row--, col ++) {
            let column = document.getElementById('table').children[col]
            if (column.children[row].className === playerClass) {
                count ++
            } else {
                count = 0
            }
            if (count >= 4) {
                didWin = true
            }
        }
    }

    for (let firstRow = 5; firstRow > 2; firstRow--) {
        let count = 0
        for (let row = firstRow, col = 6; row >2 && col > 0; row--, col --) {
            let column = document.getElementById('table').children[col]
            if (column.children[row].className === playerClass) {
                count ++
            } else {
                count = 0
            }
            if (count >= 4) {
                didWin = true
            }
        }
    }
    for (let firstCol = 5; firstCol < 4; firstCol++) {
        let count = 0
        for (let col = firstCol, row = 5; col > 2 && row >= 0; row--, col --) {
            let column = document.getElementById('table').children[col]
            if (column.children[row].className === playerClass) {
                count ++
            } else {
                count = 0
            }
            if (count >= 4) {
                didWin = true
            }
        }
    }

    // Horizontal
    for (let row = 5; row >= 0; row --) {
        let count = 0
        for (let col = 0; col < 7; col ++) {
            let column = document.getElementById('table').children[col]
            if (column.children[row].className === playerClass) {
                count ++
            } else {
                count = 0
            }
            if (count >= 4) {
                didWin = true
            }    
        }
    }

    // Vertical
    for (let col = 0; col < 7; col ++) {
        let count = 0
        for (let row = 5; row >= 0; row --) {
            let column = document.getElementById('table').children[col]
            if (column.children[row].className === playerClass) {
                count ++
            } else {
                count = 0
            }
            if (count >= 4) {
                didWin = true
            }    
        }
    }
    if (didWin) {
        document.getElementById('winStatement').innerHTML = ("<strong>" + current + " Wins</strong>");
        for (let i = 0; i < columns.length; i++) {
            columns[i].removeEventListener("click", columnSelected)
        };
    } else if (document.getElementById('table').querySelectorAll('.empty').length === 0) {
        document.getElementById('winStatement').innerHTML = ("<strong>Tie</strong>");
    }
}

