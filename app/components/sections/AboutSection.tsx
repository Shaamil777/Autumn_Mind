import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen bg-background py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-primary mb-4">About Us</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-primary/70 max-w-2xl mx-auto">
            Discover our story, mission, and the values that drive us forward
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image Side */}
          <div className="relative">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/autumn.png"
                alt="Our Story"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/10 rounded-full -z-10"></div>
          </div>

          {/* Content Side */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-primary">Our Story</h3>
            <p className="text-primary/80 leading-relaxed">
              Founded with a vision to transform the industry, we've grown from a small team of passionate individuals 
              into a trusted partner for businesses worldwide. Our journey began with a simple belief: that excellence 
              comes from dedication, innovation, and a genuine commitment to our clients' success.
            </p>
            <p className="text-primary/80 leading-relaxed">
              Today, we continue to push boundaries and set new standards, always staying true to the values that 
              defined us from day one. Every project we undertake is an opportunity to make a meaningful impact.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">10+</div>
                <div className="text-sm text-primary/60">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">500+</div>
                <div className="text-sm text-primary/60">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">98%</div>
                <div className="text-sm text-primary/60">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Mission Card */}
          <div className="bg-secondary-bg rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-background" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
            <p className="text-primary/70 leading-relaxed">
              To deliver exceptional solutions that empower our clients to achieve their goals. We strive to create 
              lasting value through innovation, integrity, and unwavering commitment to excellence in everything we do.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-secondary-bg rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-calm-accent rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-background" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
            <p className="text-primary/70 leading-relaxed">
              To be recognized as a global leader in our field, setting industry standards and inspiring positive change. 
              We envision a future where our innovative solutions make a meaningful difference in the lives of people worldwide.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-primary mb-4">Our Core Values</h3>
          <p className="text-primary/70 max-w-2xl mx-auto mb-12">
            The principles that guide our decisions and define who we are
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            { title: 'Excellence', icon: '⭐', description: 'We pursue the highest standards in everything we do' },
            { title: 'Integrity', icon: '🤝', description: 'We build trust through honesty and transparency' },
            { title: 'Innovation', icon: '💡', description: 'We embrace creativity and continuous improvement' },
            { title: 'Collaboration', icon: '🌟', description: 'We achieve more when we work together' },
          ].map((value, index) => (
            <div 
              key={index} 
              className="bg-background border-2 border-secondary-bg rounded-xl p-6 text-center hover:border-accent transition-colors duration-300"
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h4 className="text-xl font-bold text-primary mb-3">{value.title}</h4>
              <p className="text-sm text-primary/60">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}