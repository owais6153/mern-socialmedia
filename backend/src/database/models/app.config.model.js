import mongoose from "mongoose";

const Schema = mongoose.Schema;

const appConfigSchema = new Schema({
  identity: {
    type: String,
    require: true,
  },
  value: {
    type: Schema.Types.Mixed,
    require: true,
    default: 0,
  },
});

const AppConfigModel = mongoose.model("app_config", appConfigSchema);
export default AppConfigModel;
