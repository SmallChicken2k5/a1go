

// [GET] /
module.exports.index = (req, res) => {
    res.render('client/pages/home', {
        title: 'Home Page'
    });
}

// [GET] /about
module.exports.about = (req, res) => {
    res.render('client/pages/home/about.pug', {
        title: 'About Us'
    });
}