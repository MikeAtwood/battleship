const createShip = require('./ship')

const gameboard = () => {
    const grid = Array(10)
    .fill()
    .map(() => Array(10).fill({}))

    const placeShip = (x, y, length, orientation) => {
        const newShip = createShip(length)
        const positions = []
        for (let i = 0; i < length; i++) {
            if (orientation === 'horizontal') {
                positions.push({ x: x + i, y })
            } else {
                positions.push({ x, y: y + i })
            }
        }
        positions.forEach((position) => {
            grid[position.x][position.y] = { ship: newShip, status: 'notHit' }
        })
    }

    return {
        grid,
        placeShip
    }
}

const board = gameboard();
board.placeShip(0, 0, 3, 'horizontal');

module.exports = gameboard
