// [GET] /history
exports.index = (req, res) => {
    res.render('client/pages/history', { title: 'History' });
}