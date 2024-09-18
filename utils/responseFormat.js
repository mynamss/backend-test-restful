const responseFormat = (
	message,
	data = [],
	statusCode = 200,
	status = true
) => {
	return {
		code: statusCode,
		success: statusCode == 200 ? status : false,
		message: message,
		data: data,
	};
};

module.exports = responseFormat;
