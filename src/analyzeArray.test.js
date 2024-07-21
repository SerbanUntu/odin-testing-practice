import analyzeArray from './analyzeArray'

test('Happy path', () => {
	expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
		average: 4,
		min: 1,
		max: 8,
		length: 6,
	})
})

test('Sorted', () => {
	expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({
		average: 3,
		min: 1,
		max: 5,
		length: 5,
	})
})

test('Repeated values', () => {
	expect(analyzeArray([1, 1, 1, 1, 1, 1, 1])).toEqual({
		average: 1,
		min: 1,
		max: 1,
		length: 7,
	})
})

test('Negatives', () => {
	expect(analyzeArray([-3, 3, -1, 1])).toEqual({
		average: 0,
		min: -3,
		max: 3,
		length: 4,
	})
})

test('Floating point average', () => {
	expect(analyzeArray([1, 2, 3, 4])).toEqual({
		average: 2.5,
		min: 1,
		max: 4,
		length: 4,
	})
})

test('Empty array', () => {
	expect(() => analyzeArray([])).toThrow()
})

test('Strings', () => {
	expect(() => analyzeArray(['5', '3', '-8'])).toThrow()
})

test('Booleans', () => {
	expect(() => analyzeArray([false, true, true])).toThrow()
})
