const jwt = require('jsonwebtoken');

const signIn = (req, res) => {
    const fakeUserId = 999;
    const fakeUser = 'admin';
    const fakePass = '123';

    if(fakeUser !== req.body.user || fakePass !== req.body.pass) {
        return res.status(401).send('User and password not match');
    }

    return res.status(200).send({
        user: fakeUser,
        token: jwt.sign({ fakeUserId }, '123456789', {
            expiresIn: '24h'
        })
    });
}

module.exports = {
    signIn
}