const { celebrate, Joi, Segments } = require('celebrate');

const incidentsDeleteValidator = celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    }),
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown()
});

module.exports = incidentsDeleteValidator;