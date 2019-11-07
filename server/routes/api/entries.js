'use strict';

const Entry = require('../../models/Entry');

module.exports = (app) =>
{
    app.get('/api/entries', (req, res, next) =>
    {
        Entry.find()
            .exec()
            .then((entry) => res.json(entry))
            .catch((err) => next(err));
    });

    app.post('/api/entries/new', (req, res, next) =>
    {
        const { body } = req;
        
        const entry = new Entry();
        
        entry.title = body.title;
        entry.subTitle = body.subTitle;
        entry.image = body.image;
        entry.dateDay = parseInt(body.day);
        entry.dateMonth = parseInt(body.month);
        entry.dateYear = parseInt(body.year);
        entry.text = body.text;
        entry.author = body.author;
        entry.tags = body.tags.replace(/\s+/g, '').toLowerCase().split(',');
        entry.url = body.title.replace(/\s+/g, '-').toLowerCase();

        entry.save((err, user) =>
        {
            if (err)
            {
                console.log(err);

                return res.send({
                    success: false,
                    message: 'Error: Server error'
                });
            }

            return res.send({
                success: true,
                message: 'Signed up'
            });
        });

        console.log(body);
    });
};
