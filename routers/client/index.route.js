const homeRoute = require('./home.route');
const membersRoute = require('./members.route');
const awardsRoute = require('./awards.route');
const historyRoute = require('./history.route');
const docsRoute = require('./docs.route');
module.exports = (app) => {
    app.use('/', homeRoute);
    app.use('/members', membersRoute);
    app.use('/awards', awardsRoute);
    app.use('/history', historyRoute);
    app.use('/docs', docsRoute);
};