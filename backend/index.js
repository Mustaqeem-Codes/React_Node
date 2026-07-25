import 'dotenv/config'

import express from 'express'
import cors from 'cors'

const app = express()

// Allow requests from frontend (both local development and production Vercel)
app.use(cors({
  origin: ['http://localhost:5173', 'https://react-node-hazel.vercel.app'],
  credentials: true
}))

const port = process.env.PORT || 3000;

app.get('/',(req, res) => {
    res.send('Server is ready')
})

// Add this below your app initialization but above app.listen()

app.get('/api/menu', (req, res) => {
  const menuItems = [
    {
      id: 1,
      name: "Truffle Pasta",
      price: 24,
      description: "Creamy truffle sauce, parmesan, herb crumbs.",
      image: "/assets/images/TP.webp",
      category: "Main Course"
    },
    {
      id: 2,
      name: "Citrus Salmon",
      price: 29,
      description: "Seared salmon with lemon glaze & dill.",
      image: "/assets/images/salmon.jpg",
      category: "Seafood"
    },
    {
      id: 3,
      name: "Garden Salad",
      price: 14,
      description: "Seasonal greens, toasted seeds, house vinaigrette.",
      image: "/assets/images/salad.webp",
      category: "Starters"
    }
  ];

  // This sends the list back to the frontend as JSON
  res.json(menuItems);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

export default app;