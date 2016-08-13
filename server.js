const EXPRESS = require('express');

// Create our app
const APP = EXPRESS();

APP.use(EXPRESS.static('public'));

APP.listen(3000, () => {
  console.log('Express server is up on port 3000');
});
