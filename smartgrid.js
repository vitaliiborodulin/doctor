module.exports = {
	columns: 12,
	offset: "30px",
	container: {
		maxWidth: "1330px",
		fields: "20px" // Внимание! fields обязан быть >= offset / 2
	},
	breakPoints: {
		// xl: {
		// 	width: "1200px",
		// },
		// lg: {
		// 	width: "992px",
		// },
		md: {
			width: "768px",
			// fields: "40px"
		},
		xs: {
			width: "576px",
			// fields: "15px"
		},
	}
}