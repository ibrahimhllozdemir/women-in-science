const https = require('https');
const fs = require('fs');
const path = require('path');

function listModels() {
    // Load env manually if not present
    let apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;

    if (!apiKey) {
        console.log("Reading .env.local...");
        try {
            const envFile = fs.readFileSync(path.join(__dirname, '.env.local'), 'utf8');
            const match = envFile.match(/GOOGLE_GENERATIVE_AI_API_KEY=(.*)/);
            if (match) {
                apiKey = match[1].trim();
            }
        } catch (e) {
            console.error("Could not read .env.local");
        }
    }

    if (!apiKey) {
        console.error("API Key missing");
        return;
    }

    console.log("Using API Key: " + apiKey.substring(0, 5) + "...");

    const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`;

    https.get(url, (res) => {
        let data = '';
        res.on('data', (chunk) => {
            data += chunk;
        });
        res.on('end', () => {
            try {
                const json = JSON.parse(data);
                if (json.models) {
                    console.log("Available models:");
                    json.models.forEach(m => console.log(`- ${m.name} (${m.supportedGenerationMethods.join(', ')})`));
                } else {
                    console.log("Response:", JSON.stringify(json, null, 2));
                }
            } catch (e) {
                console.error("Error parsing JSON:", e);
                console.log("Raw Response:", data);
            }
        });
    }).on('error', (err) => {
        console.error("Error:", err.message);
    });
}

listModels();
