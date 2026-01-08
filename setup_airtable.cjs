
const fs = require('fs');
const path = require('path');

// Read .env manually since we might not have dotenv installed
const envPath = path.resolve('/home/biggerfisch/.gemini/antigravity/.env');
const envContent = fs.readFileSync(envPath, 'utf8');
const envVars = {};
envContent.split('\n').forEach(line => {
    const match = line.match(/^([^=]+)=(.*)$/);
    if (match) {
        let value = match[2].trim();
        if (value.startsWith('"') && value.endsWith('"')) value = value.slice(1, -1);
        envVars[match[1].trim()] = value;
    }
});

const API_KEY = envVars['AIRTABLE_API_KEY'];
if (!API_KEY) {
    console.error('Error: AIRTABLE_API_KEY not found in .env');
    process.exit(1);
}

const BASE_URL = 'https://api.airtable.com/v0';

async function main() {
    console.log('Checking Airtable connection...');

    // 1. List Bases
    const basesResp = await fetch(`${BASE_URL}/meta/bases`, {
        headers: { 'Authorization': `Bearer ${API_KEY}` }
    });

    if (!basesResp.ok) {
        console.error('Failed to list bases:', basesResp.status, await basesResp.text());
        return;
    }

    const basesData = await basesResp.json();
    const bases = basesData.bases;
    console.log(`Found ${bases.length} bases.`);

    const targetBaseName = "Bigger Fish Client Hub";
    const base = bases.find(b => b.name === targetBaseName);

    if (!base) {
        console.error(`Base "${targetBaseName}" not found. Available bases:`, bases.map(b => b.name).join(', '));
        return;
    }

    console.log(`Found Base: "${base.name}" (ID: ${base.id})`);

    // 2. List Tables
    const tablesResp = await fetch(`${BASE_URL}/meta/bases/${base.id}/tables`, {
        headers: { 'Authorization': `Bearer ${API_KEY}` }
    });

    if (!tablesResp.ok) {
        console.error('Failed to list tables:', tablesResp.status, await tablesResp.text());
        return;
    }

    const tablesData = await tablesResp.json();
    const tables = tablesData.tables;
    console.log(`Found ${tables.length} tables in base.`);

    const targetTableName = "Blueprints";
    let table = tables.find(t => t.name === targetTableName);

    if (table) {
        console.log(`Table "${targetTableName}" already exists (ID: ${table.id}).`);
        console.log('Fields:', table.fields.map(f => f.name).join(', '));
    } else {
        console.log(`Table "${targetTableName}" not found. Creating it...`);
        // 3. Create Table
        const createResp = await fetch(`${BASE_URL}/meta/bases/${base.id}/tables`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: targetTableName,
                description: "Storage for Diagnostic Tool blueprints",
                fields: [
                    { name: "Name", type: "singleLineText" },
                    { name: "Content", type: "multilineText" }, // 'Data' is reserved? No. using 'Content' or 'JSON'
                    { name: "Date", type: "date", options: { dateFormat: { name: "local" } } }
                ]
            })
        });

        if (!createResp.ok) {
            console.error('Failed to create table:', createResp.status, await createResp.text());
            return;
        }

        table = await createResp.json();
        console.log(`Table created successfully! ID: ${table.id}`);
    }

    // Output config for the user
    console.log('\n--- Configuration for Tool ---');
    console.log(`BASE_ID: ${base.id}`);
    console.log(`TABLE_ID: ${table.id}`); // Or name
}

main().catch(console.error);
