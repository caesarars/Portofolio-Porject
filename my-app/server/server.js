const express = require('express');
const googleApiService = require('./googleAPIService')
const cors = require('cors')

const app = express();

const port = 3100;

app.use(cors())

app.get('/', (req, res) => {
    res.send('hello world')
  })

app.post('/api/translate/:word', async (req,res) => {
    try {
        const word = req.params.word
        const data = await googleApiService.getTranslate(word);
        res.status(200).json(data);
    }catch (error) {
        res.status(500).json({ error: error.message });
    }
})

app.listen(port , () => {
    console.log(`Server running on port ${port}`)
})