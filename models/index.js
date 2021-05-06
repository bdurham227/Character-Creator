const User = require('./User');
const Account = require('./Account');
const Character = require('./Character');

User.hasMany(Account,{
   
    onDelete: 'cascade',
});
Account.belongsTo(User, {
   
    onDelete: 'cascade',
});


Account.hasMany(Character, {
    foreignKey: 'account_id',
    onDelete: 'cascade',
});


Character.belongsTo(Account, {
    foreignKey: 'account_id',
    onDelete: 'cascade',
});




User.belongsToMany(Account, {
    through: {
        model: Character,
    },
    foreignKey: 'user_id'
});

Account.belongsToMany(User, {
    through: {
        model: Character
    },
    foreignKey: 'account_id',
});


module.exports = {
    User,
    Account,
    Character,
};
