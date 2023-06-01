const createShip = require('../index')

test('Increases hit number by 1 when called', () => {
    const testShip = createShip(3)
    testShip.hit()
    expect(testShip.getHitNum()).toBe(1)
})

test('Increases hit number by 2 when called', () => {
    const testShip = createShip(3)
    testShip.hit()
    testShip.hit()
    expect(testShip.getHitNum()).toBe(2)
})

test('Ship has been sunk', () => {
    const testShip = createShip(2)
    testShip.hit()
    testShip.hit()
    expect(testShip.isSunk()).toBe(true)
})

test('Ship is not sunk', () => {
    const testShip = createShip(2)
    testShip.hit()
    expect(testShip.isSunk()).not.toBe(true)
})