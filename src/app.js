import express from 'express';
import morgan from 'morgan';
import authRoutes from './routes/auth.routes.js';
import cookieParser from 'cookie-parser';
import taskRoutes from './routes/task.routes.js';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
);

app.use(morgan('dev'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(cookieParser());

app.use('/api', authRoutes);
app.use('/api', taskRoutes);
app.get('/helper', (req, res) => {
  res.send('Hello World');
});

export default app;
