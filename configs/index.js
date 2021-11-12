const {MONGO_CONNECT_URL, PORT, JWT_ACCESS_SECRET, JWT_REFRESH_SECRET, JWT_FORGOT_PASSWORD_SECRET} = require('./config');
const {PASSWORD_REGEXP, EMAIL_REGEXP, AUTHORIZATION, DEFAULT_STATUS_ERR} = require('./constans');
const userRoles = require('./user-roles.enum');
const {WELCOME, ORDER_CONFIRMED, LOGIN, LOGOUT, DELETE, UPDATE, NEW_USER_PASSWORD,
    REGISTERED_USER, REFUSE_TO_RENT} = require('./email-action.enum');
const { ACTION_MODEL, O_AUTH_MODEL, POST_MODEL, USER_MODEL, APARTMENT, COMMENT, USER, BOOKING } = require('./model-names.enum');
const {ACCESS, REFRESH, ACTION} = require('./token-type.enum');
const {FORGOT_PASSWORD} = require('./action-token-type.enum');
// const {FLAT, HOUSE, HOSTEL, HOTEL} = require('./apartment_type.enum');

module.exports = {
    MONGO_CONNECT_URL, PORT, JWT_REFRESH_SECRET,
    JWT_ACCESS_SECRET, JWT_FORGOT_PASSWORD_SECRET,

    PASSWORD_REGEXP, EMAIL_REGEXP,
    DEFAULT_STATUS_ERR, AUTHORIZATION,

    userRoles,

    WELCOME, ORDER_CONFIRMED, LOGIN, LOGOUT,
    DELETE, UPDATE, REGISTERED_USER, NEW_USER_PASSWORD, REFUSE_TO_RENT,

    ACTION_MODEL, O_AUTH_MODEL, USER, BOOKING,
    POST_MODEL, USER_MODEL, APARTMENT, COMMENT,

    ACCESS, REFRESH, ACTION, FORGOT_PASSWORD,
    config: require('./config'),

    apartmentTypeEnum: require('./apartment_type.enum')
};
