module.exports = (sequelize,DataTypes) =>{
    const userContacts = sequelize.define('user_contacts', {
        UserId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'User',
            key: 'id',
        },
        },
        contactId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Contact',
            key: 'id',
        },
        },
    },{
        createdAt : false,
        updatedAt : false,
    });

    return userContacts;
}