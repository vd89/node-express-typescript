import Express, { Request, Response, NextFunction, json } from 'express';
const app = Express();

import todoRoutes from './routes/todos';

app.use(json());

app.use('/todos', todoRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ msg: err.message });
});

app.listen(5000, () => {
  console.log('server is running at port 5000 ');
});
