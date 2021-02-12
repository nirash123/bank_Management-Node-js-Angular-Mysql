module.exports = (sequelize, Sequelize) => {
    const Bank = sequelize.define("bank", {
        bank_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
        bank_name: {
              type: Sequelize.STRING,
            }
    });
  
    return Bank;
  };