import Image from 'next/image';

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-screen bg-secondary-bg py-20 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-in-left">
            <h1 className="font-[family-name:var(--font-playfair)] text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
              Autumn Mind: Finding Balance in Every Season.
            </h1>
            <p className="font-[family-name:var(--font-inter)] text-lg text-primary/70 mb-8 leading-relaxed">
              Compassionate, expert online psychiatric care and mental health wellness. Start your journey with a virtual consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full font-medium transition-colors uppercase tracking-wide">
                Book Your Virtual Consultation
              </button>
              <button className="bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-white px-8 py-4 rounded-full font-medium transition-colors">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-[500px] lg:h-[600px] animate-slide-in-right">
            <Image 
              src="/images/hero.jpg" 
              alt="Mental health wellness" 
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 opacity-20 pointer-events-none">
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
