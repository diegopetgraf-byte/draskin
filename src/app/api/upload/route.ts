/**
 * Local logo upload API route.
 * Saves uploaded files to /public/uploads/ — no external service required.
 */

import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();
        const file = formData.get('file') as File | null;

        if (!file) {
            return NextResponse.json({ error: 'No file provided' }, { status: 400 });
        }

        if (file.size > 10 * 1024 * 1024) {
            return NextResponse.json({ error: 'File too large (max 10MB)' }, { status: 400 });
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        const ext = file.name.split('.').pop() || 'webp';
        const filename = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
        const uploadsDir = path.join(process.cwd(), 'public', 'uploads');

        await mkdir(uploadsDir, { recursive: true });
        await writeFile(path.join(uploadsDir, filename), buffer);

        return NextResponse.json({ url: `/uploads/${filename}` });
    } catch (err) {
        return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
    }
}
