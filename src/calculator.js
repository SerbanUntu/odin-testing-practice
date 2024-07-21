const calculator = {
	check: (a, b) => {
		if (Number(a) !== a || Number(b) !== b)
			throw new Error('Only numbers are accepted by the calculator module')
	},
	add: (a, b) => {
		calculator.check(a, b)
		return a + b
	},
	subtract: (a, b) => {
		calculator.check(a, b)
		return a - b
	},
	divide: (a, b) => {
		calculator.check(a, b)
		return a / b
	},
	multiply: (a, b) => {
		calculator.check(a, b)
		return a * b
	},
}

export default calculator
