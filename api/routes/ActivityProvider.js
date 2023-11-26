module.exports = app => {
  const controller = app.controllers.ActivityProvider;

  app.route('/api/configURL')
    .get(controller.configUrlActivityProvider)

    app.route('/api/paramsURL')//json_params_url
    .get(controller.paramsUrlActivityProvider)

    app.route('/api/analyticslistURL') // analytics_list_url
    .get(controller.analyticslistActivityProvider)

    app.route('/api/userURL/:id') // user_url
    .post(controller.userActivityProvider)

    app.route('/api/analytics') // analytics_url
    .post(controller.analyticsActivityProvider)

}