const columns = document.getElementsByClassName('column')
// In case you need tags for individual columns. Feel free to remove these if you don't need them.


let currentPlayer = 'red'
let nextPlayer = 'black'

const columnSelected = function() {
    const column = event.currentTarget
    if (column.childElementCount < 6) {
        if (currentPlayer === 'red') {
            let disc = document.createElement('div')
            disc.className = 'discRed'
            column.appendChild(disc)
            nextPlayer = 'black'
        } else {
            let disc = document.createElement('div')
            disc.className = 'discBlack'
            column.appendChild(disc)
            nextPlayer = 'red'
        }
        currentPlayer = nextPlayer
    }
};
for (let i = 0; i < columns.length; i++) {
    columns[i].addEventListener("click", columnSelected)
}





// Win condition

function checkWin() {
    const currentDisc = event.currentTarget.lastElementChild
    let numberOfMatches = 0
    const currentDiscPos = currentDisc.getBoundingClientRect()
    
    
};

function reset() {
    window.location.reload()
}