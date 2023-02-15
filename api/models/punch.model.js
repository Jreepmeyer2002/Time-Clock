module.exports = (sequelize, Sequelize) => {
    const Punch = sequelize.define("punch", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Punch;
  };