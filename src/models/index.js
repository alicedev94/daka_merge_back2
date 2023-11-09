const { usersMergeSchema, UsersMerge } = require("./user.model");
const { investProducMergeSchema, InvestProductMerge } = require("./invest.productos.model");

function setupModels(sequelize) {
  UsersMerge.init(usersMergeSchema, UsersMerge.config(sequelize));
  InvestProductMerge.init(investProducMergeSchema, InvestProductMerge.config(sequelize));
}

module.exports = setupModels;
