import capitalize from './capitalize'

test('Happy path', () => {
	expect(capitalize('jeff')).toBe('Jeff')
})

test('Already capitalized', () => {
	expect(capitalize('Mary')).toBe('Mary')
})

test('One letter', () => {
	expect(capitalize('c')).toBe('C')
})

test('Empty string', () => {
	expect(capitalize('')).toBe('')
})

test('Alphanumeric', () => {
	expect(capitalize('4ty')).toBe('4ty')
})
