const uuidv4 = require('uuid/v4');

module.exports = app => {

  const ActivityProviderUrlConfig = app.data.ActivityProvider;
  const controller = {};

  const {
    ActivityProvider: ActivityProviderMock,
  } = ActivityProviderUrlConfig;

  controller.configUrlActivityProvider = (req, res) => res.status(200).json(ActivityProviderMock.url_configurations.config_url);

  controller.paramsUrlActivityProvider = (req, res) => res.status(200).json(ActivityProviderMock.url_configurations.json_params_url);

  controller.analyticslistActivityProvider = (req, res) => res.status(200).json(ActivityProviderMock.url_configurations.analytics_list_url);

  controller.analyticsActivityProvider = (req, res) => res.status(200).json(ActivityProviderMock.url_configurations.analytics_url);

  controller.userActivityProvider = (req, res) => {
    const {
      idinstance,
    } = req.params;
    res.status(200).json(ActivityProviderMock.url_configurations.user_url);
    
  };

  return controller;
}