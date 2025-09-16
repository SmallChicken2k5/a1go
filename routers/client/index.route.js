const homeRoute = require('./home.route');
const membersRoute = require('./members.route');
const awardsRoute = require('./awards.route');
module.exports = (app) => {
    app.use('/', homeRoute);
    app.use('/members', membersRoute);
    app.use('/awards', awardsRoute);
};