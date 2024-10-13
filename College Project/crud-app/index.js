import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;


// MongoDB connection using Mongoose
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Could not connect to MongoDB', err));

// Define a Mongoose schema and model for customers
const customerSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobile_number: {
    type: Number,
    required: true,
  },
});

const Customer = mongoose.model('Customer', customerSchema);



// Add a new customer
app.post('/customers/createContact', async (req, res) => {
  try {
    const { first_name, last_name, email, mobile_number } = req.body;
    const newCustomer = new Customer({ first_name, last_name, email, mobile_number });
    const savedCustomer = await newCustomer.save(); // Save to MongoDB
    res.status(201).send(savedCustomer);
  } catch (err) {
    res.status(500).send('Error creating customer');
  }
});



// Get all customers
app.get('/customers/getContacts', async (req, res) => {
  try {
    const customers = await Customer.find(); // Fetch all customers from MongoDB
    res.status(200).send(customers);
  } catch (err) {
    res.status(500).send('Error fetching customers');
  }
});



// Get a customer by ID
app.get('/customers/getContact/:id', async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id); // Fetch customer by ID from MongoDB
    if (!customer) {
      return res.status(404).send('Customer not found');
    }
    res.status(200).send(customer);
  } catch (err) {
    res.status(500).send('Error fetching customer');
  }
});



// Update a customer by ID
app.put('/customers/updateContact/:id', async (req, res) => {
  try {
    const { first_name, last_name, email, mobile_number } = req.body;
    const updatedCustomer = await Customer.findByIdAndUpdate(
      req.params.id,
      {first_name, last_name, email, mobile_number},
      { new: true } // Return the updated customer
    );
    if (!updatedCustomer) {
      return res.status(404).send('Customer not found');
    }
    res.status(200).send(updatedCustomer);
  } catch (err) {
    res.status(500).send('Error updating customer');
  }
});



// Delete a customer by ID
app.delete('/customers/deleteContact/:id', async (req, res) => {
  try {
    const deletedCustomer = await Customer.findByIdAndDelete(req.params.id); // Delete customer by ID from MongoDB
    if (!deletedCustomer) {
      return res.status(404).send('Customer not found');
    }
    res.status(200).send('Customer deleted');
  } catch (err) {
    res.status(500).send('Error deleting customer');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});