export default function analyzeArray(arr) {
	if (arr.length === 0) throw new Error('Cannot analyze empty array')
	if (arr.filter(n => Number(n) !== n).length > 0)
		throw new Error('Inappropriate use of non-numeric values')
	const sum = arr.reduce((t, c) => t + c, 0)
	const min = arr.reduce((t, c) => (c < t ? c : t))
	const max = arr.reduce((t, c) => (c > t ? c : t))
	return {
		average: sum / arr.length,
		min,
		max,
		length: arr.length,
	}
}
