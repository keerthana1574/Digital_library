const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Detailed MongoDB Connection 
mongoose.connect('mongodb+srv://yashu72704:N6gSCoTpf7hKlfsf@cluster0.tpqhe.mongodb.net/digilib?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('✅ Successfully Connected to MongoDB'))
.catch((error) => console.error('❌ MongoDB Connection Error:', error));

// Book Schema
const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    branch: String,
    fileUrl: String
});

const Book = mongoose.model('Book', bookSchema, 'books');

// Debug Endpoint to check database connection
app.get('/api/debug', async (req, res) => {
    try {
        const bookCount = await Book.countDocuments();
        const sampleBooks = await Book.find().limit(5);
        
        res.json({
            message: 'Debug Information',
            totalBooks: bookCount,
            sampleBooks: sampleBooks
        });
    } catch (error) {
        console.error('Debug endpoint error:', error);
        res.status(500).json({ error: error.message });
    }
});

// API Endpoint to Fetch Books
app.get('/api/books', async (req, res) => {
    try {
        const { branch } = req.query;
        
        // If branch is provided and not 'All Books', filter by branch
        const query = branch && branch !== 'All Books' ? { branch } : {};
        
        const books = await Book.find(query);
        console.log(`Fetched ${books.length} books`);
        res.json(books);
    } catch (error) {
        console.error('Book fetch error:', error);
        res.status(500).json({ message: 'Error fetching books', error: error.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});