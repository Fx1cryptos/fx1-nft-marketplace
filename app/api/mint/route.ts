import { NextRequest, NextResponse } from 'next/server';

// IPFS CID of your promotional flyer for the Frame image
const FRAME_IMAGE_URL = 'https://gateway.pinata.cloud/ipfs/bafybeigc6v5wizyuksl6wxninz76irvrfjscuzjgydkctbzirsu6oiro34';
const APP_URL = process.env.NEXT_PUBLIC_URL || 'https://fx1-hubs-miniapp.vercel.app/'; // IMPORTANT: Update this to your deployed URL

// Farcaster Frames require a POST endpoint for interaction
export async function POST(req: NextRequest): Promise<Response> {
  // If this is the initial GET request (e.g., from a bot crawler), we return the same metadata
  if (req.method === 'GET') {
    return getInitialFrame();
  }

  // Handle the button click (POST request)
  const body = await req.json();
  const { trustedData } = body;
  
  // 1. You could verify the message here using Neynar SDK:
  // const isValid = await neynarClient.validateFrameMessage(trustedData.messageBytes);

  // 2. For simplicity, we create the next Frame state that prompts a deeper action
  
  // Check which button was clicked (if applicable, or just move to next step)
  // const buttonIndex = trustedData.buttonIndex; 

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Step 2: Enter the 3D Hub</title>
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="${FRAME_IMAGE_URL}" />
        <meta property="fc:frame:post_url" content="${APP_URL}/api/frame" />
        
        <meta property="fc:frame:button:1" content="View 3D Gallery (External)" />
        <meta property="fc:frame:button:1:action" content="link" />
        <meta property="fc:frame:button:1:target" content="${APP_URL}" />

        <meta property="fc:frame:button:2" content="Mint Featured NFT 🚀" />
        <meta property="fc:frame:button:2:action" content="post" />
        <meta property="fc:frame:button:2:target" content="${APP_URL}/api/mint" />

        <meta property="fc:frame:button:3" content="Follow @fx1_hubs" />
        <meta property="fc:frame:button:3:action" content="link" />
        <meta property="fc:frame:button:3:target" content="https://warpcast.com/fx1_hubs" />
      </head>
      <body>
        <h1>FX1 HUBS: Your Onchain Destination</h1>
      </body>
    </html>
  `;
  return new NextResponse(html, { headers: { 'Content-Type': 'text/html' } });
}

// Initial GET request handler (same as what a simple GET would return)
export async function GET(): Promise<Response> {
  return getInitialFrame();
}

function getInitialFrame() {
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>FX1 HUBS MiniApp</title>
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="${FRAME_IMAGE_URL}" />
        <meta property="fc:frame:post_url" content="${APP_URL}/api/frame" />
        <meta property="fc:frame:button:1" content="Enter FX1 HUBS (Tap to reveal options)" />
      </head>
      <body>
        <h1>FX1 HUBS: Styling the Blockchain Metaverse</h1>
      </body>
    </html>
  `;
  return new NextResponse(html, { headers: { 'Content-Type': 'text/html' } });
}
