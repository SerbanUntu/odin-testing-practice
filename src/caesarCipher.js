function isUppercase(ch) {
	return ch >= 'A' && ch <= 'Z'
}

function encodeChar(ch, factor) {
	if (!/^[a-zA-Z]*$/.test(ch)) {
		return ch
	}
	const firstLetter = (isUppercase(ch) ? 'A' : 'a').charCodeAt(0)
	const lastLetter = (isUppercase(ch) ? 'Z' : 'z').charCodeAt(0)
	const newLetter = ch.charCodeAt(0) + factor
	const newWrapped = String.fromCharCode(
		(newLetter % (lastLetter + 1)) + (newLetter > lastLetter ? firstLetter : 0),
	)
	return newWrapped
}

export default function caesarCipher(str, factor) {
	return str
		.split('')
		.map(ch => encodeChar(ch, factor))
		.join('')
}
