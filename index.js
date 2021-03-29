const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Controllers go below here:

const port = process.env.PORT || 4000;

app.listen(port, () => {
	console.log(`app is listening on port ${port}`);
});
