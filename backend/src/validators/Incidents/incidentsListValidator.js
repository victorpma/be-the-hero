const { celebrate, Segments, Joi } = require('celebrate');

const incidentsListValidator = celebrate({
    [Segments.QUERY]: {
        page: Joi.number()
    }
})

module.exports = incidentsListValidator;