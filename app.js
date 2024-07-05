const express = require('express');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/users', userRoutes);

app.listen(PORT, () => {
    console.log(`User service listening at http://localhost:${PORT}`);
});
