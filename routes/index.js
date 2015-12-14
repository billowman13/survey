var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');
});

// router.post('/login', function(req, res, next) {
//   User.findOne({id: req.body.id}, function(err, user) {
//     if (err) {
//       res.render('error', {message: "Error", error: err});
//     } else if (!user) {
//       req.flash('danger', '존재하지 않는 사용자 입니다.');
//       res.redirect('back');
//     } else if (user.password !== req.body.password) {
//       req.flash('danger', '비밀번호가 일치하지 않습니다.');
//       res.redirect('back');
//     } else {
//       req.session.user = user;
//       req.flash('success', '로그인 되었습니다.');
//       res.redirect('/surveylist');
//     }
//   });
// });

module.exports = router;
