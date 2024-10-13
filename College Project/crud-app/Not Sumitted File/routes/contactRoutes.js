import express from 'express';
import fetch from 'node-fetch';
const router = express.Router();

// FreshSales API configuration
const FRESHSALES_DOMAIN = process.env.FRESHSALES_DOMAIN;
const FRESHSALES_API_KEY = process.env.FRESHSALES_API_KEY;
const API_URL = `https://${FRESHSALES_DOMAIN}.freshsales.io/api`;

// Helper function to set headers for FreshSales API
const getFreshSalesHeaders = () => ({
    'Authorization': `Token token=${FRESHSALES_API_KEY}`,
    'Content-Type': 'application/json'
});


//1. Create Contact
router.post('/createContact', async (req, res) => {
    const { first_name, last_name, email, mobile_number, data_store } = req.body;

    if (data_store === 'CRM') {
        try {
            const response = await fetch(`${API_URL}/contacts`, {
                method: 'POST',
                headers: getFreshSalesHeaders(),
                body: JSON.stringify({
                    contact: { first_name, last_name, email, mobile_number }
                })
            });

            // Check if the response is okay (status code 200-299)
            if (!response.ok) {
                const errorData = await response.text(); // Get the response text
                return res.status(response.status).json({ error: errorData }); // Return as JSON
            }

            const data = await response.json();
            res.json(data);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    } else {
        res.status(400).json({ error: 'Invalid data_store value' });
    }
});


// 2. Retrieve Contact
router.post('/getContact', async (req, res) => {
    const { contact_id, data_store } = req.body;

    if (data_store === 'CRM') {
        try {
            const response = await fetch(`${API_URL}/contacts/${contact_id}`, {
                method: 'GET',
                headers: getFreshSalesHeaders()
            });
            const data = await response.json();
            res.json(data);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    } else {
        res.status(400).json({ error: 'Invalid data_store value' });
    }
});

// 3. Update Contact
router.post('/updateContact', async (req, res) => {
    const { contact_id, new_email, new_mobile_number, data_store } = req.body;

    if (data_store === 'CRM') {
        try {
            const response = await fetch(`${API_URL}/contacts/${contact_id}`, {
                method: 'PUT',
                headers: getFreshSalesHeaders(),
                body: JSON.stringify({
                    contact: { email: new_email, mobile_number: new_mobile_number }
                })
            });
            const data = await response.json();
            res.json(data);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    } else {
        res.status(400).json({ error: 'Invalid data_store value' });
    }
});

// 4. Delete Contact
router.post('/deleteContact', async (req, res) => {
    const { contact_id, data_store } = req.body;

    if (data_store === 'CRM') {
        try {
            const response = await fetch(`${API_URL}/contacts/${contact_id}`, {
                method: 'DELETE',
                headers: getFreshSalesHeaders()
            });
            res.json({ message: 'Contact deleted from CRM', response: response.status });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    } else {
        res.status(400).json({ error: 'Invalid data_store value' });
    }
});

export default router
