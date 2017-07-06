const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const linkSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    click_count: {
        type: Number,
        default: 0
    }
});

const collectionSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    user_id: {
        type: Number,
        required: true
    },
    links: {
        type: [linkSchema],
        required: true
    },
    view_count: {
        type: Number,
        default: 0
    },
    share_count: {
        type: Number,
        default: 0
    },
    deleted: {
        type: Boolean,
        default: false
    }
},{
    autoIndex: true,
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

const Collection = mongoose.model('Collection',collectionSchema);

module.exports = Collection;