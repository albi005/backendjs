/**
 * Using the template engine render the values into the template.
 * It is the last element of every route and reads everything the
 * previous middlewares collected in res.locals.
 */

const requireOption = require('./requireOption');

module.exports = function (objectRepository, viewName) {
    return function (req, res) {
        res.render(viewName, res.locals);
    };
};
