require('dotenv').config();
const express = require('express');
const cors = require('cors');
const adminRoutes = require('./routes/admin');
const authRoutes = require('./routes/auth');

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',    
}));
app.use(express.json());

app.use('/api/admin', adminRoutes);
app.use('/api/auth', authRoutes);


const PORT = process.env.PORT || 4500;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));