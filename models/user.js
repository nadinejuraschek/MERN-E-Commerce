const   mongoose    = require('mongoose'),
        crypto      = require('crypto'),
        uuidv1      = require('uuidv1');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxLength: 30
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: 50
    },
    hash: {
        type: String,
        required: true
    },
    about: {
        type: String,
        trim: true
    },
    salt: String,
    role: {
        type: Number,
        default: 0
    },
    history: {
        type: Array,
        default: []
    }
}, { timestamps: true });

// virtual field
userSchema.virtual('password')
    .set(function(password) {
        this.password = password;
        this.salt = uuidv1();
        this.hash = this.encryptPassword(password);
    })
    .get(function() {
        return this.password;
    });

userSchema.methods = {
    encryptPassword: function(password) {
        if (!password) return '';
        try {
            return crypto.createHmac('sha1', this.salt)
            .update(password)
            .digest('hex');
        } catch (err) {
            return '';
        }
    }
};

module.exports = mongoose.model('User', userSchema);