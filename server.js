const EXPRESS = require('express');

// Create our app
const APP = EXPRESS();
const PORT = process.env.PORT || 3000;

APP.use((req, res, next) => {
  if (req.headers['x-forwarded-proto'] === 'http') {
    next();
  } else {
    res.redirect(`http://${req.hostname + req.url}`);
  }
});

APP.use(EXPRESS.static('public'));

APP.listen(PORT, () => {
  console.log(`Express server is up on port ${PORT}`);
});
