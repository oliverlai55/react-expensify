const moment = require.requireActual('moment');

export default (timestamp = 0) => {
	return moment(timestamp);
};

// this allows the moment date to match

