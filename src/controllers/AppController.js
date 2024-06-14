export default class AppController {
  static index(req, res) {
    const data = {
      title: 'MedMeet - Home',
    };
    res.render('pages/index', { data });
  }
}
