import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Load environment variables locally
dotenv.config();

setInterval(() => {
    // Keep alive
}, 10000);

const app = express();
app.use(cors());
app.use(express.json());

// Debug Middleware
app.use((req, res, next) => {
    console.log(`[Request] ${req.method} ${req.url}`);
    next();
});

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const AIRTABLE_BASE_ID = 'appJMqQ5FmP2MkQ7z';
const AIRTABLE_TABLE_ID = 'tbl2OzYFfFk4cb8aK';

// API: Get Blueprint
app.get('/api/get-blueprint', async (req, res) => {
    const { recordId } = req.query;
    if (!recordId) return res.status(400).json({ error: 'Missing recordId' });

    const apiKey = process.env.AIRTABLE_API_KEY;
    if (!apiKey) return res.status(500).json({ error: 'Server misconfigured: Missing API Key' });

    try {
        const url = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_ID}/${recordId}`;
        const response = await fetch(url, {
            headers: { Authorization: `Bearer ${apiKey}` }
        });

        if (!response.ok) {
            const errText = await response.text();
            console.error('Airtable Error:', errText);
            return res.status(response.status).json({ error: 'Failed to fetch from Airtable' });
        }

        const data = await response.json();
        // Return validity check?
        // data.fields.Content should exist.
        res.json(data);
    } catch (err) {
        console.error('Proxy Error:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// API: Verify Passcode
app.post('/api/verify-passcode', (req, res) => {
    const { passcode } = req.body;
    const CORRECT_CODE = process.env.ADMIN_PASSCODE || '123456';

    console.log(`[Auth] Received: '${passcode}' | Expected: '${CORRECT_CODE}'`);

    if (passcode === CORRECT_CODE) {
        res.json({ success: true });
    } else {
        res.status(401).json({ error: 'Invalid Passcode' });
    }
});

// API: Save Blueprint (Passcode Protected)
app.post('/api/save-blueprint', async (req, res) => {
    console.log('[Save Blueprint] Request received');
    const { passcode, payload } = req.body;

    // Check Passcode (Default 123456 for dev)
    const CORRECT_CODE = process.env.ADMIN_PASSCODE || '123456';
    console.log(`[Save Blueprint] Passcode check: ${passcode === CORRECT_CODE ? 'PASS' : 'FAIL'}`);

    if (passcode !== CORRECT_CODE) {
        console.log('[Save Blueprint] Invalid passcode');
        return res.status(401).json({ error: 'Invalid Passcode' });
    }

    const apiKey = process.env.AIRTABLE_API_KEY;
    console.log(`[Save Blueprint] API Key present: ${!!apiKey}`);

    if (!apiKey) {
        console.log('[Save Blueprint] No API key configured');
        return res.status(500).json({ error: 'Server API Key not configured' });
    }

    try {
        const url = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_ID}`;
        console.log(`[Save Blueprint] Calling Airtable: ${url}`);
        console.log(`[Save Blueprint] Payload:`, JSON.stringify(payload).substring(0, 200));

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        console.log(`[Save Blueprint] Airtable response status: ${response.status}`);

        if (!response.ok) {
            const errorText = await response.text();
            console.error('[Save Blueprint] Airtable error:', errorText);
            res.setHeader('Content-Type', 'application/json');
            return res.status(response.status).json({ error: errorText || 'Airtable request failed' });
        }

        const record = await response.json();
        console.log(`[Save Blueprint] Success! Record:`, JSON.stringify(record).substring(0, 200));

        if (!record || !record.id) {
            console.error('[Save Blueprint] Invalid record received:', record);
            res.setHeader('Content-Type', 'application/json');
            return res.status(500).json({ error: 'Invalid record received from Airtable' });
        }

        res.setHeader('Content-Type', 'application/json');
        return res.status(200).json(record);
    } catch (err) {
        console.error('[Save Blueprint] Exception:', err);
        res.setHeader('Content-Type', 'application/json');
        return res.status(500).json({ error: err.message || 'Airtable Save Failed' });
    }
});

// Serve Static Files (Production)
// This will serve the 'dist' folder created by 'vite build'
app.use(express.static(path.join(__dirname, 'dist')));

// Fallback for SPA routing (if any)
app.get(/.*/, (req, res) => {
    // If request accepts html
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    } else {
        res.status(404).send('Not found');
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Test API: http://localhost:${PORT}/api/get-blueprint?recordId=...`);
});
