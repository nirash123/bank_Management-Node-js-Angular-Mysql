module.exports = (sequelize, Sequelize) => {
    const Branch = sequelize.define("branch", {
        branch_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
        branch_name: {
              type: Sequelize.STRING
            },
        branch_address: {
              type: Sequelize.STRING
            }
    });
  
    return Branch;
  };