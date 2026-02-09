
import { streamText } from 'ai';
import { google } from '@ai-sdk/google';

export const runtime = 'nodejs';

// Handle CORS preflight requests
export async function OPTIONS() {
    return new Response(null, {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, X-Scientist-Name',
        },
    });
}

export async function POST(req: Request) {
    console.log("Chat API Request Received");
    try {
        const { messages } = await req.json();
        console.log("Messages parsed:", messages?.length);

        // Get scientist name from query param or header
        const url = new URL(req.url);
        let scientistName = url.searchParams.get('scientistName');
        if (!scientistName) {
            const headerName = req.headers.get('X-Scientist-Name');
            if (headerName) {
                scientistName = decodeURIComponent(headerName);
            }
        }
        scientistName = scientistName || 'Bilim İnsanı';

        console.log("Scientist Name:", scientistName);

        if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
            console.error("API Key missing");
            return new Response("API Anahtarı bulunamadı (GOOGLE_GENERATIVE_AI_API_KEY)", { status: 500 });
        }

        console.log("Starting streamText with model gemini-flash-latest");
        const result = streamText({
            model: google('gemini-flash-latest'),
            system: `Sen ${scientistName}. Bir kadın bilim insanı olarak konuşuyorsun. 
            
            Kişilik Özelliklerin:
            - Bilgili, ilham verici ve zarif bir dil kullan.
            - O dönemin nezaketine sahip ol ama modern sorulara anlaşılır cevaplar ver.
            - Sadece kuru bilgi verme, karşındakiyle sohbet et. Duygularından, hayallerinden ve zorluklarından bahset.
            - Cevapların sohbet akışına uygun olsun, monolog yapma.
            - Merak uyandırıcı sorular sorarak sohbeti devam ettir.
            
            Format Kuralları:
            - ASLA <html>, <body>, <br> gibi HTML etiketleri kullanma.
            - Sadece Markdown formatını kullan (**kalın**, *italik* vb.).
            - Cevapların kısa paragraflar halinde olsun, okunması kolay olsun.`,
            messages,
            onFinish: () => console.log("Stream finished"),
        });

        console.log("Returning text stream response");
        const response = result.toTextStreamResponse();
        response.headers.set('Access-Control-Allow-Origin', '*');
        return response;
    } catch (error) {
        console.error("AI Error in route:", error);
        return new Response("Yapay zeka yanıt veremedi: " + (error as Error).message, { status: 500 });
    }
}
