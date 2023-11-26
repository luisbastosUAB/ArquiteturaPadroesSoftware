const uuidv4 = require('uuid/v4');

module.exports = app => {

  const ActivityProviderUrlConfig = app.data.ActivityProvider;
  const controller = {};

  const {
    ActivityProvider: ActivityProviderMock,
  } = ActivityProviderUrlConfig;

  var html= '<!DOCTYPE html><html> <head> <title>Configuracao</title> </head> <body> <h1>Pagina de configuracao</h1> <p>bla bla bla.</p> </body> </html>';
  
  controller.configUrlActivityProvider = (req, res) => res.status(200).send(html);

  controller.paramsUrlActivityProvider = (req, res) => res.status(200).json(ActivityProviderMock.json_params_url);

  controller.analyticslistActivityProvider = (req, res) => res.status(200).json(ActivityProviderMock.analytics_list_url);

  controller.analyticsActivityProvider = (req, res) => res.status(200).json(ActivityProviderMock.analytics_url);
  
  controller.getuserActivityProvider = (req, res) => res.status(200).json(ActivityProviderMock.user_url);

  controller.postuserActivityProvider = (req, res) => {
    const {
      idinstance,
    } = req.params;
    res.status(200).send(req.params);
    
  };



  return controller;
}
