const https = require('https');

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:8081';

async function checkUrl(path) {
    return new Promise((resolve) => {
        const url = `${SITE_URL}${path}`;
        const req = https.get(url, (res) => {
            let data = '';
            res.on('data', (chunk) => { data += chunk; });
            res.on('end', () => {
                resolve({
                    path,
                    status: res.statusCode,
                    headers: res.headers,
                    body: data
                });
            });
        });
        req.on('error', (err) => {
            // Fallback to http for local testing
            const http = require('http');
            http.get(url, (res) => {
                let data = '';
                res.on('data', (chunk) => { data += chunk; });
                res.on('end', () => {
                    resolve({
                        path,
                        status: res.statusCode,
                        headers: res.headers,
                        body: data
                    });
                });
            }).on('error', (e) => resolve({ path, error: e.message }));
        });
    });
}

async function validate() {
    console.log(`🔍 Validating SEO for ${SITE_URL}...\n`);

    const tests = [
        { name: 'Homepage', path: '/' },
        { name: 'Sitemap', path: '/sitemap.xml' },
        { name: 'Robots', path: '/robots.txt' },
        { name: 'Valid Collection', path: '/grafica-estetica' },
        { name: 'Valid Product', path: '/grafica-estetica/ficha-mmp-capilar' },
        { name: 'Invalid Path (404)', path: '/this-path-does-not-exist' },
    ];

    for (const test of tests) {
        const result = await checkUrl(test.path);
        if (result.error) {
            console.log(`❌ ${test.name}: Error - ${result.error}`);
            continue;
        }

        const is404Test = test.path.includes('not-exist');
        const statusMatch = is404Test ? result.status === 404 : result.status === 200;

        console.log(`${statusMatch ? '✅' : '❌'} ${test.name}: HTTP ${result.status}`);

        if (result.status === 200) {
            if (test.path.endsWith('.xml') || test.path.endsWith('.txt')) {
                console.log(`   📄 Content check: ${result.body.length > 0 ? 'Pass' : 'Empty'}`);
            } else {
                const hasCanonical = result.body.includes('rel="canonical"');
                const hasJsonLd = result.body.includes('application/ld+json');
                console.log(`   🔗 Canonical: ${hasCanonical ? 'PRESENT' : 'MISSING'}`);
                console.log(`   📦 JSON-LD: ${hasJsonLd ? 'PRESENT' : 'MISSING'}`);
            }
        }

        if (result.status === 404) {
            const hasNoIndex = result.body.includes('noindex') || result.headers['x-robots-tag']?.includes('noindex');
            console.log(`   🚫 NoIndex: ${hasNoIndex ? 'CONFIRMED' : 'MISSING'}`);
        }
        console.log('');
    }
}

validate();
