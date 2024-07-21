import caesarCipher from './caesarCipher'

test('Happy path', () => {
	expect(caesarCipher('abc', 2)).toBe('cde')
})

test('Factor is zero', () => {
	expect(caesarCipher('uncoded', 0)).toBe('uncoded')
})

test('Factor is negative', () => {
	expect(caesarCipher('cde', -2)).toBe('abc')
})

test('Wrapping', () => {
	expect(caesarCipher('xyz', 3)).toBe('abc')
})

test('Alternating cases', () => {
	expect(caesarCipher('HeLLo', 3)).toBe('KhOOr')
})

test('Punctuation', () => {
	expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!')
})

test('Empty string', () => {
	expect(caesarCipher('')).toBe('')
})

test('Only symbols', () => {
	expect(caesarCipher('!@#,./#$&^(*@^')).toBe('!@#,./#$&^(*@^')
})
