import reverseString from './reverseString'

test('Happy path', () => {
	expect(reverseString('some')).toBe('emos')
})

test('One letter', () => {
	expect(reverseString('c')).toBe('c')
})

test('Empty string', () => {
	expect(reverseString('')).toBe('')
})

test('Whitespace', () => {
	expect(reverseString(' aaaa')).toBe('aaaa ')
})

test('Palindrome', () => {
	expect(reverseString('racecar')).toBe('racecar')
})

test('Case-sensitive palindrome', () => {
	expect(reverseString('Racecar')).toBe('racecaR')
})

test('Template string', () => {
	expect(reverseString(`some${2 + 2}`)).toBe('4emos')
})
