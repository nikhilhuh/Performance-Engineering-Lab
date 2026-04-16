import express from 'express';
import cors from 'cors';
import userRoutes from './routes/user.routes.js';
import searchRoutes from './routes/search.routes.js';
import clickRoutes from './routes/click.routes.js';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/search', searchRoutes);
app.use('/api/click', clickRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
