const { validate} = require("../src/main/helpers/validate_config")

const data = {
	url: null,
	wpt: {
		url: "http://localhost:9963"
	},
	update: {
		enable: "1",
	}
}

const [valid, errors] = validate(data)
console.log(data)
if (!valid) console.log(errors)
