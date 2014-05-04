var SineSchema = require('../data/sine');

functions.newSines = function (req, res) {
	var number = req.param('number');

	if (typeof sines[number] === 'undefined') {
		res.status(404).json({status: 'error'});
	} else {
		sines[number].triggerArrival();

		var record = new SineSchema(
			sines[number].getInformation()
		);

		record.save(function(err) {
			if (err) {
				console.log(err);
				res.status(500).json({status: 'failure'}
			} else {
				res.json({status: 'success'});
			}
		});

		res.json({status: 'done'}); 
}