const createShip = require('../index')

test('Increases hit number by 1 when called', () => {
    const testShip = createShip(3)
    testShip.hit()
    expect(testShip.getHitNum()).toBe(1)
})