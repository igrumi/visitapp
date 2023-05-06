import { app } from './app.js';
app.listen(process.env.PORT, () => console.log(`App listening on port http://localhost:${process.env.PORT}`));