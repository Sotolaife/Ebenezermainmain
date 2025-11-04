import { Gallery } from '@/components/portfolio/gallery';

export default function PortfolioPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <header className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          The Gallery
        </h1>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground">
          Each artwork is a narrative, a moment of reflection captured in form and color. Click on any piece to explore its story.
        </p>
      </header>
      <Gallery />
    </div>
  );
}
