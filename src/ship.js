// Ship factory function
const createShip = (lengthNum) => {
    const length = lengthNum
    let hitNum = 0
    const hit = () => {
        hitNum += 1
    }
    const getHitNum = () => hitNum
    const isSunk = () => {
        if (hitNum >= length) {
            return true
        }
            return false
    }
    return { lengthNum, hitNum, hit, getHitNum, isSunk}
}

module.exports = createShip