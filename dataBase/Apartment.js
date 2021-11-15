const {Schema, model} = require('mongoose');
const apartmentTypeEnum = require('../configs/apartment_type.enum');
// const {modelNamesEnum} = require('../configs');

const apartmentSchema = new Schema ( {
    country: {
        type: String,
        required: true,
        trim: true
    },
    city: {
        type: String,
        required: true,
        trim: true
    },
    type: {
        type: String,
        enum: Object.values(apartmentTypeEnum),
        required: true
    },
    apartment_squaring: {
        type: Number,
        required: true
    },
    amount_places: {
        type: Number,
        required: true
    },
    // price: {
    //     type: Number,
    //     required: true
    // },
    user_id: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'user'
    },
    // description: {
    //     type: String,
    //     required: true
    // }

}, {timestamps: true});

module.exports = model('apartment', apartmentSchema);

//toObject: {virtuals: true}, toJSON: {virtuals: true}
