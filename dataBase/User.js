const {Schema, model} = require('mongoose');
const userRoles = require('../configs/user-roles.enum');
const {passwordService} = require('../service/password.service');

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        select: false
    },
    role: {
        type: String,
        default: userRoles.USER,
        enum: Object.values(userRoles)
    },
    age: {
        type: Number
    },
}, {timestamps: true});

userSchema.virtual('fullName').get(function() {
    return `${this.name} ${this.role} HA-HA`;
});

userSchema.methods = {
    comparePassword(password) {
        return passwordService.compare(password, this.password);
    }
};

userSchema.statics = {
    async createUserWithHashPassword(userObject) {
        const hashedPassword = await passwordService.hash(userObject.password);

        return this.create({...userObject, password: hashedPassword});
    }
};

module.exports = model('user', userSchema);
