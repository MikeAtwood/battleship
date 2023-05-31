// Ship factory function
const createShip = (length) => {
    const hits = []

    const hit = (position) => {
        if (hits.includes(position) || position < 0 || position >= length) {
            return
        }
        hits.push(position)
    }
    const isSunk = () => {
        return hits.length === length
    }

    return {
        length,
        hits,
        hit,
        isSunk
    }
}
const myShip = createShip(5);
console.log(myShip)