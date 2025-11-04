"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { artworks, type Artwork } from '@/lib/artworks';
import { WHATSAPP_LINK } from '@/lib/constants';
import Link from 'next/link';

// As placeholder-images.ts is deleted, we import from json directly.
import placeholderData from '@/lib/placeholder-images.json';
const { placeholderImages: PlaceHolderImages } = placeholderData;


export function Gallery() {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.substring(1);
      if (hash) {
        const artwork = artworks.find(art => art.id === hash);
        if (artwork) {
          setSelectedArtwork(artwork);
        }
      }
    }
  }, []);

  const handleOpenChange = (isOpen: boolean) => {
    if (!isOpen) {
      setSelectedArtwork(null);
      // Update URL without hash
      if (typeof window !== 'undefined') {
        history.pushState("", document.title, window.location.pathname + window.location.search);
      }
    }
  };


  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        {artworks.map((artwork, index) => {
          const image = PlaceHolderImages.find((img) => img.id === artwork.imageId);
          return (
            <Card
              id={artwork.id}
              key={artwork.id}
              className="overflow-hidden group cursor-pointer animate-in fade-in-0 duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedArtwork(artwork)}
            >
              <CardContent className="p-0 relative">
                <div className="overflow-hidden">
                {image && (
                  <Image
                    src={image.imageUrl}
                    alt={artwork.title}
                    width={600}
                    height={750}
                    className="object-cover w-full h-auto aspect-[4/5] group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    data-ai-hint={image.imageHint}
                  />
                )}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-bold text-white">{artwork.title}</h3>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Dialog open={!!selectedArtwork} onOpenChange={handleOpenChange}>
        <DialogContent className="max-w-4xl p-0">
          {selectedArtwork && (
            <div className="grid md:grid-cols-2">
              <div>
                {(() => {
                  const image = PlaceHolderImages.find(
                    (img) => img.id === selectedArtwork.imageId
                  );
                  return image ? (
                    <Image
                      src={image.imageUrl}
                      alt={selectedArtwork.title}
                      width={800}
                      height={1000}
                      className="object-cover w-full h-full"
                      data-ai-hint={image.imageHint}
                    />
                  ) : null;
                })()}
              </div>
              <div className="flex flex-col p-8">
                <DialogHeader>
                  <DialogTitle className="text-3xl font-bold mb-2">{selectedArtwork.title}</DialogTitle>
                  <DialogDescription className="text-base text-muted-foreground font-body">
                    {selectedArtwork.description}
                  </DialogDescription>
                </DialogHeader>
                <div className="mt-auto pt-6">
                   <Button asChild size="lg" className="w-full">
                     <Link href={`${WHATSAPP_LINK}?text=I'm interested in your artwork: ${encodeURIComponent(selectedArtwork.title)}`} target="_blank">
                      Inquire via WhatsApp
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
