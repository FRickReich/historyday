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
        
        entry.title = body.title.value;
        entry.image = body.image.value;
        entry.dateDay = parseInt(body.day.value);
        entry.dateMonth = parseInt(body.month.value);
        entry.dateYear = parseInt(body.year.value);
        entry.text = body.text.value;
        entry.author = body.author.value;
        entry.tags = body.tags.value.replace(/\s+/g, '').toLowerCase().split(',');

        entry.url = body.title.value.replace(/\s+/g, '-').toLowerCase();

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
