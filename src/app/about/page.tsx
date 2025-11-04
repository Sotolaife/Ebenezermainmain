import Image from 'next/image';
import placeholderData from '@/lib/placeholder-images.json';

const { placeholderImages: PlaceHolderImages } = placeholderData;

export default function AboutPage() {
  const portraitImage = PlaceHolderImages.find((img) => img.id === 'artist-portrait');

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <header className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Art is a mirror for the mind.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground">
            My journey as an artist is a relentless pursuit of this reflection, an exploration of how lines, colors, and textures can reshape our inner worlds.
          </p>
        </header>

        <div className="grid md:grid-cols-5 gap-8 md:gap-16 items-center">
          <div className="md:col-span-2">
            {portraitImage && (
              <div className="aspect-square relative rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={portraitImage.imageUrl}
                  alt={portraitImage.description}
                  fill
                  className="object-cover grayscale"
                  data-ai-hint={portraitImage.imageHint}
                />
              </div>
            )}
          </div>
          <div className="md:col-span-3">
            <h2 className="text-3xl font-bold mb-4">My Story</h2>
            <div className="space-y-6 text-base md:text-lg text-foreground/80 font-body">
              <p>
                From an early age, I found solace and expression in the boundless world of creativity. Art wasn't just a hobby; it was a language that allowed me to communicate ideas and emotions that words could not capture. My love for creativity stems from a profound belief in its power to transform, to challenge the status quo, and to inspire meaningful change.
              </p>
              <p>
                I believe that art is not merely decorative but is a transformative experience. Each piece I create is an invitation to a dialogue—a dialogue between the artwork and the viewer, and ultimately, a dialogue within the viewer's own mind. My goal is to craft pieces that are not just seen but felt, artworks that resonate long after the initial viewing and become a part of one's personal story.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-24 md:mt-32 py-12 border-t border-b">
           <h3 className="text-2xl md:text-3xl font-bold font-headline tracking-tight">
            "Art that echoes in time."
          </h3>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Creating works that hold their value, not just financially, but emotionally and intellectually for generations to come.
          </p>
        </div>
      </div>
    </div>
  );
}
