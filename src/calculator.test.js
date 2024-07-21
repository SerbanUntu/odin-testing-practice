import calculator from './calculator'

test('Addition', () => {
	expect(calculator.add(1, 1)).toBe(2)
})

test('Subtraction', () => {
	expect(calculator.subtract(1, 1)).toBe(0)
})

test('Division', () => {
	expect(calculator.divide(10, 2)).toBe(5)
})

test('Multiplication', () => {
	expect(calculator.multiply(5, 5)).toBe(25)
})

test('Negatives', () => {
	expect(calculator.add(3, -5)).toBe(-2)
})

test('Zero', () => {
	expect(calculator.multiply(5000, 0)).toBe(0)
})

test('Floating', () => {
	expect(calculator.divide(5, 2)).toBeCloseTo(2.5)
})

test('Strings', () => {
	expect(() => calculator.add('1', '2')).toThrow()
})

test('One string', () => {
	expect(() => calculator.subtract('3', 5)).toThrow()
})

test('Booleans', () => {
	expect(() => calculator.add(true, false)).toThrow()
})
