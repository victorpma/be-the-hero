const { celebrate, Joi, Segments } = require('celebrate');

const profileGetValidator = celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown()
});

module.exports = profileGetValidator;