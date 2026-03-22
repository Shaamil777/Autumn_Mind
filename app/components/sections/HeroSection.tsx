import Image from 'next/image';

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-screen bg-secondary-bg py-20 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center animate-slide-in-left">
          <h2 className="text-4xl font-bold text-primary mb-8">Hero Section</h2>
          <p className="text-lg text-primary/70 max-w-3xl mx-auto">
            Learn more about our approach to mental health and wellness.
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 opacity-20">
        <Image 
          src="/images/autumn.png" 
          alt="Autumn decoration" 
          width={1920} 
          height={400}
          className="w-full h-auto rotate-180"
        />
      </div>
    </section>
  );
}
