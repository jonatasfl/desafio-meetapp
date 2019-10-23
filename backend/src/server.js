import app from './app';

const port = process.env.SERVER_PORT || 3333;

app.listen(port, () => console.log(`Listening on port ${port}`));
