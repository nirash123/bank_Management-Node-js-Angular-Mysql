module.exports = (sequelize, Sequelize) => {
    const Employee = sequelize.define("employee", {
        emp_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
          bank_id: {
            type: Sequelize.INTEGER,
          },
          branch_id: {
            type: Sequelize.INTEGER
          },
        emp_name: {
              type: Sequelize.STRING
            },
        emp_email: {
              type: Sequelize.STRING
            },
        emp_photo: {
                type: Sequelize.STRING
            },
        emp_address: {
                type: Sequelize.STRING
              },

        emp_password: {
                type: Sequelize.STRING
              }
    });
  
    return Employee;
  };