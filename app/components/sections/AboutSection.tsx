import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen bg-secondary-bg py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center animate-slide-in-left">
          <h2 className="text-4xl font-bold text-primary mb-8">About Us</h2>
          <p className="text-lg text-primary/70 max-w-3xl mx-auto">
            Learn more about our approach to mental health and wellness.
          </p>
        </div>
      </div>
    </section>
  );
}