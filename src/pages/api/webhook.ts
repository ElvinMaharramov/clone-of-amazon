import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
import { buffer } from 'micro';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20', // Bu kısımda hata almamanız için string olarak belirtildi.
});

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    let event: Stripe.Event; // Tip tanımlaması yapıldı.

    try {
      // Bu satır, gövdeyi ham olarak okur, bu yüzden 'bodyParser: false' ayarı gereklidir.
      const rawBody = await buffer(req);
      const sig = req.headers['stripe-signature']!;

      // Webhook olayını oluştur
      event = stripe.webhooks.constructEvent(rawBody, sig, endpointSecret);
    } catch (error: any) { // Hata türü 'any' olarak belirtildi.
      console.log(`⚠️  Webhook signature verification failed.`, error.message);
      res.status(400).send(`Webhook Error: ${error.message}`);
      return;
    }

    // Olayı işleyin
    switch (event.type) {
      case 'checkout.session.completed':
        const session = event.data.object; // Tipi 'Stripe.Checkout.Session' olabilir.
        // Burada işlemleri gerçekleştirin
        console.log('Checkout session completed:', session);
        break;
      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    res.status(200).json({ received: true });
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}

export const config = {
  api: {
    bodyParser: false, // Bu ayar, 'buffer' kullanımını mümkün kılar.
  },
};
