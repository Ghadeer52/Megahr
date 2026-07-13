const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send('megahr backend'));

app.post('/api/analyze', (req, res) => {
  const { text, type } = req.body;

  if (!text || !type) {
    return res.status(400).json({ error: 'Missing text or type in request body' });
  }

  res.json({
    contractType: type === "rental" ? "عقد إيجار" : type === "financing" ? "عقد تمويل" : "عقد فرصة استثمارية",
    safetyScore: 50,
    safetyLevel: "yellow",
    summary: "This is a sample summary of the contract. It provides an overview of the key points and clauses within the contract."
  });
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));