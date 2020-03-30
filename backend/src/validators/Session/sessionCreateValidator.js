const { celebrate, Segments, Joi } = require('celebrate');

const sessionCreateValidator = celebrate({
    [Segments.BODY]: Joi.object().keys({
        id: Joi.string().required()
    })
});

module.exports = sessionCreateValidator;
