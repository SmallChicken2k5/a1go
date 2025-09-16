// [GET] /awards
module.exports.index = (req, res) => {
    res.render('client/pages/awards', { title: 'Giải Thưởng' });
}