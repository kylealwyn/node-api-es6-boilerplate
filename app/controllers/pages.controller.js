import BaseController from './base.controller';

class PagesController extends BaseController {
  constructor() {
    super();
    this.index = this.index.bind(this);
  }

  index(req, res) {
    res.locals.user = req.session.user;
    res.render('pages/index');
  }
}

export default new PagesController();
