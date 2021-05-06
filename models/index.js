const User = require('./User');
const Account = require('./Account');
const Character = require('./Character');

User.hasMany(Account,{
    foreignKey: 'gamer_id',
    onDelete: 'cascade',
});
Account.belongsTo(User, {
    foreignKey: 'gamer_id',
    onDelete: 'cascade',
});

Account.belongsToMany(User, {
    through: {
        model: Character
    },
    foreignKey: 'account_id',
});
User.belongsToMany(Account, {
    through: {
        model: Character,
    },
    foreignKey: 'user_id'
});

module.exports = {
    User,
    Account,
    Character,
};
