import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import placeholderData from '@/lib/placeholder-images.json';
import { artworks } from '@/lib/artworks';
import { ArrowRight } from 'lucide-react';

const { placeholderImages: PlaceHolderImages } = placeholderData;

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');
  const featuredArtworks = artworks.filter((art) => art.featured);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section 
        className="relative h-[70vh] md:h-[90vh] w-full flex items-center justify-center text-center text-primary-foreground bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: heroImage ? `url(${heroImage.imageUrl})` : 'none' }}
        data-ai-hint={heroImage?.imageHint}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex flex-col items-center px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Transforming minds through timeless art.
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl text-primary-foreground/80">
            Welcome to the online gallery of Pavillion_art.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href="/portfolio">
              Explore the Gallery <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Artist Introduction */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Meet the Artist</h2>
          <div className="flex justify-center">
            <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
              Pavillion is a bold and elegant creator whose work serves as a powerful medium for introspection and transformation. Each piece is a story, a catalyst for shifting perspectives and discovering long-term value in the abstract.
            </p>
          </div>
          <Button asChild variant="link" className="mt-4 text-lg">
            <Link href="/about">
              Read My Story <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>
      
      {/* Featured Artworks */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredArtworks.map((artwork) => {
              const image = PlaceHolderImages.find((img) => img.id === artwork.imageId);
              return (
                <Link href={`/portfolio#${artwork.id}`} key={artwork.id}>
                  <Card className="overflow-hidden group cursor-pointer border-2 hover:border-primary transition-all duration-300">
                    <CardContent className="p-0">
                      {image && (
                        <div className="overflow-hidden">
                          <Image
                            src={image.imageUrl}
                            alt={artwork.title}
                            width={600}
                            height={750}
                            className="object-cover w-full h-auto aspect-[4/5] group-hover:scale-105 transition-transform duration-500"
                            data-ai-hint={image.imageHint}
                          />
                        </div>
                      )}
                      <div className="p-6 bg-card">
                        <h3 className="text-xl font-bold">{artwork.title}</h3>
                        <p className="text-muted-foreground mt-2 line-clamp-2">{artwork.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
