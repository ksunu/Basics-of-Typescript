const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
}

// Type alias
type Drink = [string, boolean, number]

const pepsi: Drink = ['brown', true, 40]
const sprite: Drink = ['clear', true, 40]
const coffee: Drink = ['black', false, 0]

// Not readable, unknown data
const carSpecs: [number, number] = [400, 3343]
// Understand data
const carStats = {
  horsepower: 400,
  weight: 3343
}