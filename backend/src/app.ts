import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import router from './routers/router';



const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
};

const app = express();
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(router);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(8000, () => {
  console.log('Server started on port 8000');
});
