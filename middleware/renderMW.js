/**
 * Render the view with the data collected in res.locals during the
 * middleware chain. It is the last element of every route.
 * The template engine is wired up in a later step; for now it only
 * reports which view would be rendered.
 */

const requireOption = require('./requireOption');

module.exports = function (objectrepository, viewName) {
    return function (req, res) {
        //res.render(viewName, res.locals);
        console.log('render: ' + viewName);
        res.end('Template: ' + viewName);
    };
};
