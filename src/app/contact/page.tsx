import { ContactForm } from '@/components/contact/contact-form';
import { Button } from '@/components/ui/button';
import { INSTAGRAM_LINK, WHATSAPP_LINK } from '@/lib/constants';
import { Instagram, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <header className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Let's Connect
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground">
            Whether you are interested in acquiring a piece, commissioning a new work, or simply wish to share your thoughts, I would be delighted to hear from you.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 max-w-5xl mx-auto">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6">Send an Inquiry</h2>
            <ContactForm />
          </div>

          <div className="flex flex-col items-start space-y-8 rounded-lg bg-card border p-8">
             <h2 className="text-3xl font-bold">Other Ways to Reach Out</h2>
             
            <div>
              <h3 className="text-lg font-semibold flex items-center">
                <MessageCircle className="mr-3 h-5 w-5 text-primary"/>
                Direct Message
              </h3>
              <p className="text-muted-foreground mt-2 mb-4">For immediate inquiries or to discuss an artwork live.</p>
              <Button asChild>
                <Link href={`${WHATSAPP_LINK}?text=Hello! I'm interested in discussing an artwork.`} target="_blank">
                  Discuss on WhatsApp
                </Link>
              </Button>
            </div>
            
            <div className="border-t w-full"></div>

            <div>
              <h3 className="text-lg font-semibold flex items-center">
                <Instagram className="mr-3 h-5 w-5 text-primary"/>
                Follow My Journey
              </h3>
              <p className="text-muted-foreground mt-2 mb-4">See behind-the-scenes content and new works as they are created.</p>
               <Button variant="outline" asChild>
                <Link href={INSTAGRAM_LINK} target="_blank">
                  Follow on Instagram
                </Link>
              </Button>
            </div>
             <p className="text-sm text-muted-foreground pt-4">Location: Based in a studio where ideas take form.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
