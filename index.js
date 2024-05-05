const db = require("./db/connection.js");




// // Backend (Node.js with Express.js)
// const express = require('express');
// const app = express();
// const Category = require('./models/category'); // Assuming you have a Category model

// // Define route to fetch categories
// app.get('/categories', async (req, res) => {
//   try {
//     const categories = await Category.findAll();
//     res.json(categories);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });

// // Frontend (React)
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function App() {
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     async function fetchCategories() {
//       try {
//         const response = await axios.get('http://localhost:3000/categories');
//         setCategories(response.data);
//       } catch (error) {
//         console.error('Error fetching categories:', error);
//       }
//     }

//     fetchCategories();
//   }, []);

//   return (
//     <div>
//       <h1>Categories</h1>
//       <ul>
//         {categories.map(category => (
//           <li key={category.id}>{category.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;

