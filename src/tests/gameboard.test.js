const gameboard = require('../gameboard')

test('Placing a ship on the board', () => {
    const board = gameboard
    board.placeShip(0, 0 , 3, 'horizontal')
    expect(board.grid[0][0].ship).toBeTruthy()
    expect(board.grid[0][1].ship).toBeTruthy()
    expect(board.grid[0][2].ship).toBeTruthy()
})
// shipPosition




// receiveAttack
// missedAttack - if hit()?
// check if any ships left