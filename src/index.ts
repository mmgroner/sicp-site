import express from 'express';
import path from 'path';
import exercises from './data/exercises';

const app = express();
const port = process.env.PORT || 3000;

app.set('views', path.join(__dirname, '..', 'views'));

app.use(express.static(path.join(__dirname, '..', 'public')));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { exercises });
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
