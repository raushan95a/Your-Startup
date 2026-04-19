'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Header />
      
      {/* HERO */}
      <div className="pt-24 pb-16 px-[5%]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-brand-light-blue border border-brand-medium-blue rounded-full px-4 py-2 mb-6 animate-fadeInUp">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-soft-purple"></span>
              <span className="text-xs font-semibold text-brand-soft-purple uppercase tracking-wide">Serving businesses across India</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight text-brand-dark mb-6 animate-fadeInUp animate-delay-100">
              We build websites, apps, and <em className="italic text-brand-text-muted not-italic">software</em> that grow your business
            </h1>
            <p className="text-lg text-brand-text-muted mb-8 max-w-lg animate-fadeInUp animate-delay-200">
              From your first website to a full custom platform — we build it fast, you grow with it. No agencies, no middlemen. Just developers who care.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 animate-fadeInUp animate-delay-300">
              <Link href="/contact" className="btn-primary inline-block hover-lift">Book a free discovery call</Link>
              <Link href="#portfolio" className="btn-secondary inline-block hover-lift">See our work</Link>
            </div>
          </div>

          {/* Right visual */}
          <div className="hidden lg:block relative h-96 overflow-hidden animate-slideInRight animate-delay-200">
            <div className="absolute top-0 right-0 w-5/6 bg-white border border-brand-medium-blue rounded-3xl p-7 shadow-md-soft hover-lift transition-smooth">
              <div className="badge badge-main mb-3">Restaurant website</div>
              <div className="h-2 bg-brand-medium-blue rounded w-3/5 mb-2"></div>
              <div className="h-2 bg-brand-medium-blue rounded w-2/5 mb-2"></div>
              <div className="h-2 bg-brand-medium-blue bg-opacity-40 rounded w-full mb-4"></div>
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-brand-light-blue rounded p-3"><div className="text-xl font-bold text-brand-dark">40%</div><div className="text-xs text-brand-text-muted">More orders</div></div>
                <div className="bg-brand-light-blue rounded p-3"><div className="text-xl font-bold text-brand-dark">3wk</div><div className="text-xs text-brand-text-muted">Delivery</div></div>
                <div className="bg-brand-light-blue rounded p-3"><div className="text-xl font-bold text-brand-dark">₹0</div><div className="text-xs text-brand-text-muted">Commission</div></div>
              </div>
            </div>
            <div className="absolute bottom-8 left-0 w-2/3 bg-brand-light-blue border border-brand-medium-blue rounded-2xl p-5">
              <div className="badge badge-soft mb-2">Clinic booking</div>
              <div className="text-xs font-semibold text-brand-dark mb-3">Appointments this week</div>
              <ul className="text-xs text-brand-text-muted space-y-1">
                <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-brand-soft-purple"></span>Online bookings: 47</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-brand-soft-purple"></span>Zero double bookings</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-brand-soft-purple"></span>60% fewer calls</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* PROOF BAR */}
      <div className="bg-brand-light-blue border-t border-b border-brand-medium-blue py-6 px-[5%]">
        <div className="max-w-6xl mx-auto flex justify-center gap-8 lg:gap-12 flex-wrap">
          <div className="text-sm font-medium text-brand-text-muted"><strong className="text-brand-dark">12+</strong> projects delivered</div>
          <div className="text-sm font-medium text-brand-text-muted"><strong className="text-brand-dark">100%</strong> on-time delivery</div>
          <div className="text-sm font-medium text-brand-text-muted">Trusted by <strong className="text-brand-dark">businesses across India</strong></div>
          <div className="text-sm font-medium text-brand-text-muted"><strong className="text-brand-dark">5+ years</strong> combined experience</div>
        </div>
      </div>

      {/* SERVICES */}
      <section id="services" className="py-20 px-[5%]">
        <div className="max-w-6xl mx-auto">
          <div className="section-label">What we build</div>
          <h2 className="section-title">Three things we're really good at</h2>
          <p className="section-sub mb-12">We work with small businesses, startups, and growing companies across India.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: '🌐',
                badge: 'Most popular',
                title: 'Website Development',
                desc: 'Professional sites that look great, load fast, and turn visitors into paying customers. From brochure sites to full e-commerce stores.',
                items: ['Custom design, mobile-first', 'SEO setup + Google Analytics', 'Contact forms + fast hosting', '1 month free support post-launch']
              },
              {
                icon: '📱',
                badge: 'Android & iOS',
                badgeClass: 'badge-soft',
                title: 'Mobile App Development',
                desc: '80%+ of India\'s internet usage is on mobile. We build apps that are fast, easy to use, and built around how your customers actually behave.',
                items: ['Android & iOS development', 'Razorpay + UPI integration', 'App Store & Play Store submission', 'Admin dashboard included']
              },
              {
                icon: '⚙️',
                badge: 'Tailored to you',
                badgeClass: 'badge-outline',
                title: 'Custom Software',
                desc: 'Off-the-shelf software forces your business to adapt to it. We flip that. Billing systems, booking platforms, inventory tools — built exactly for you.',
                items: ['Invoice & billing portals', 'Appointment booking systems', 'Inventory + staff dashboards', 'Client portals & analytics']
              }
            ].map((service, i) => (
              <div key={i} className={`card border-t-4 border-t-brand-soft-purple hover:border-t-brand-soft-purple animate-fadeInUp hover-glow`} style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="w-12 h-12 bg-brand-light-blue border border-brand-medium-blue rounded-lg flex items-center justify-center text-2xl mb-4 transition-smooth hover:scale-110 hover:bg-brand-soft-purple hover:bg-opacity-20">
                  {service.icon}
                </div>
                <div className={`badge ${service.badgeClass || 'badge-main'} mb-3`}>{service.badge}</div>
                <h3 className="font-serif text-xl mb-2 text-brand-dark">{service.title}</h3>
                <p className="text-sm text-brand-text-muted mb-4">{service.desc}</p>
                <ul className="space-y-2">
                  {service.items.map((item, j) => (
                    <li key={j} className="text-xs text-brand-text-muted flex items-center gap-2 transition-smooth hover:translate-x-1">
                      <span className="w-1 h-1 rounded-full bg-brand-soft-purple flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-brand-light-blue py-20 px-[5%]">
        <div className="max-w-6xl mx-auto">
          <div className="section-label">Why us</div>
          <h2 className="section-title">Why businesses choose us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 auto-rows-fr">
            {[
              {
                num: '01',
                title: 'We speak your language',
                desc: 'No jargon. We explain everything in plain terms so you always know what\'s happening. The people you talk to are the same people who build your product.'
              },
              {
                num: '02',
                title: 'We deliver on time',
                desc: 'Every project ships with a clear timeline and milestones. No surprises, no delays. We set deadlines and we meet them — 100% of the time so far.'
              },
              {
                num: '03',
                title: 'We stay after launch',
                desc: 'We don\'t disappear once the site is live. Support, updates, and new features — we\'re here for the long haul. Most of our work comes from clients who come back.'
              }
            ].map((item, i) => (
              <div key={i} className="bg-white border border-brand-medium-blue border-opacity-60 rounded-3xl p-7 h-full flex flex-col animate-fadeInUp hover-lift" style={{ animationDelay: `${i * 0.15}s` }}>
                <div className="font-serif text-5xl text-brand-soft-purple opacity-70 mb-3 transition-smooth group-hover:scale-110">{item.num}</div>
                <h3 className="text-lg font-semibold text-brand-dark mb-2">{item.title}</h3>
                <p className="text-sm text-brand-text-muted leading-relaxed flex-grow">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-[5%]">
        <div className="max-w-6xl mx-auto">
          <div className="section-label">What clients say</div>
          <h2 className="section-title">Trusted by businesses across India</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              {
                quote: "They built our website so well that we went from 0 customers online to 40+ orders in the first month. Game changer for our business.",
                author: "Raj Sharma",
                role: "Owner, Fresh Bakery",
                rating: 5
              },
              {
                quote: "Finally, someone who understands our business and doesn't try to sell us unnecessary features. Support is incredible.",
                author: "Priya Gupta",
                role: "Manager, Electronics Store",
                rating: 5
              },
              {
                quote: "The app they built saved us 8 hours per week on admin work. The team stayed responsive even after launch. Highly recommend.",
                author: "Vikram Patel",
                role: "Director, Coaching Institute",
                rating: 5
              }
            ].map((testimonial, i) => (
              <div key={i} className="testimonial-card animate-fadeInUp" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <span key={j} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-sm text-brand-text-muted mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-soft-purple flex items-center justify-center text-white font-bold text-sm">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-brand-dark text-sm">{testimonial.author}</p>
                    <p className="text-xs text-brand-text-muted">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="bg-brand-dark py-20 px-[5%] text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { number: '12+', label: 'Projects Delivered', desc: 'Across 5+ industries' },
              { number: '100%', label: 'On-time Delivery', desc: 'Every single project' },
              { number: '8', label: 'Happy Clients', desc: 'Coming back for more' },
              { number: '5+', label: 'Years Experience', desc: 'Combined expertise' }
            ].map((stat, i) => (
              <div key={i} className="stat-item animate-fadeInUp" style={{ animationDelay: `${i * 0.15}s` }}>
                <div className="stat-number text-white">{stat.number}</div>
                <p className="font-semibold text-white mb-2">{stat.label}</p>
                <p className="text-sm text-white text-opacity-70">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 px-[5%]">
        <div className="max-w-6xl mx-auto">
          <div className="section-label">How we work</div>
          <h2 className="section-title">Simple from start to launch</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-7 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-brand-medium-blue to-transparent"></div>
            {[
              { step: 1, title: 'Discovery call', desc: 'We learn about your business, goals, and what you need built. Free, no commitment.' },
              { step: 2, title: 'Proposal', desc: 'Clear plan with timeline, cost, and exactly what we\'ll build — within 2–3 days.' },
              { step: 3, title: 'We build it', desc: 'Regular updates so you\'re never left wondering what\'s happening.' },
              { step: 4, title: 'Launch + support', desc: 'We go live together, and we stick around to make sure everything runs smoothly.' }
            ].map((item, i) => (
              <div key={i} className="text-center animate-fadeInUp hover-lift" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="w-14 h-14 rounded-full bg-white border-2 border-brand-medium-blue mx-auto mb-4 flex items-center justify-center font-serif text-2xl text-brand-dark hover:bg-brand-soft-purple hover:border-brand-soft-purple transition-smooth hover:scale-110">
                  {item.step}
                </div>
                <h3 className="font-semibold text-brand-dark mb-2">{item.title}</h3>
                <p className="text-xs text-brand-text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="bg-brand-light-blue py-20 px-[5%] border-t border-brand-medium-blue">
        <div className="max-w-6xl mx-auto">
          <div className="section-label">Our work</div>
          <h2 className="section-title">Projects we're proud of</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12">
            {/* Featured */}
            <div className="lg:col-span-2 bg-white border border-brand-medium-blue border-opacity-60 rounded-3xl p-8 lg:p-12 animate-fadeInUp hover-lift">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="badge badge-main">Restaurant</span>
                    <span className="badge badge-soft">Website + ordering</span>
                    <span className="badge badge-outline">3 weeks · ₹40,000</span>
                  </div>
                  <h3 className="font-serif text-2xl mb-3 text-brand-dark">Direct ordering for a local restaurant — zero commission</h3>
                  <p className="text-sm text-brand-text-muted mb-4 leading-relaxed">A restaurant losing 30% per order to Swiggy/Zomato. We built a mobile-first site with online ordering, Razorpay, table booking, and Google Business setup.</p>
                  <div className="bg-brand-light-blue border-l-4 border-brand-soft-purple rounded-r p-4 text-xs text-brand-text-muted italic leading-relaxed">
                    "We didn't realise how many customers were searching for us online and couldn't find us. Within a month, we were getting direct orders every day." — Owner, local restaurant
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-brand-light-blue rounded-lg p-4"><div className="text-2xl font-bold text-brand-dark">40%</div><div className="text-xs text-brand-text-muted mt-1">More direct orders in 60 days</div></div>
                  <div className="bg-brand-light-blue rounded-lg p-4"><div className="text-2xl font-bold text-brand-dark">₹0</div><div className="text-xs text-brand-text-muted mt-1">Commission on direct orders</div></div>
                  <div className="bg-brand-light-blue rounded-lg p-4"><div className="text-2xl font-bold text-brand-dark">Top 3</div><div className="text-xs text-brand-text-muted mt-1">Google local search ranking</div></div>
                  <div className="bg-brand-light-blue rounded-lg p-4"><div className="text-2xl font-bold text-brand-dark">3 wk</div><div className="text-xs text-brand-text-muted mt-1">Brief to launch</div></div>
                </div>
              </div>
            </div>

            {/* Case 2 */}
            <div className="bg-white border border-brand-medium-blue border-opacity-60 rounded-3xl p-8 hover-lift transition-smooth animate-fadeInUp animate-delay-100">
              <div className="flex gap-2 mb-3">
                <span className="badge badge-soft">Retail</span>
                <span className="badge badge-outline">4 weeks · ₹45,000</span>
              </div>
              <h3 className="font-serif text-xl mb-2 text-brand-dark">Electronics shop goes online</h3>
              <p className="text-sm text-brand-text-muted mb-4 leading-relaxed">10-year-old walk-in shop lost everything during the pandemic. We built a full e-commerce store with product catalogue, UPI payments, and an admin panel they manage themselves.</p>
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="bg-brand-light-blue rounded p-3"><div className="font-bold text-brand-dark">25+</div><div className="text-xs text-brand-text-muted">Online orders, month 1</div></div>
                <div className="bg-brand-light-blue rounded p-3"><div className="font-bold text-brand-dark">2×</div><div className="text-xs text-brand-text-muted">Reach vs walk-in only</div></div>
              </div>
              <div className="text-xs text-brand-text-muted italic">"They built it so simply that even I can update products and check orders myself." — Shop owner</div>
            </div>

            {/* Case 3 */}
            <div className="bg-white border border-brand-medium-blue border-opacity-60 rounded-3xl p-8 hover-lift transition-smooth animate-fadeInUp animate-delay-200">
              <div className="flex gap-2 mb-3">
                <span className="badge badge-main">Education</span>
                <span className="badge badge-outline">4 weeks · ₹50,000</span>
              </div>
              <h3 className="font-serif text-xl mb-2 text-brand-dark">Coaching institute saves 8hrs/week</h3>
              <p className="text-sm text-brand-text-muted mb-4 leading-relaxed">200+ students, everything on paper and WhatsApp. We built a student portal with online fees, attendance, results, and parent access.</p>
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="bg-brand-light-blue rounded p-3"><div className="font-bold text-brand-dark">8 hrs</div><div className="text-xs text-brand-text-muted">Admin saved per week</div></div>
                <div className="bg-brand-light-blue rounded p-3"><div className="font-bold text-brand-dark">95%</div><div className="text-xs text-brand-text-muted">Fees collected on time</div></div>
              </div>
              <div className="text-xs text-brand-text-muted italic">"Our staff used to spend half their day on phone calls. Now everything is on the portal." — Director</div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS - PROFESSIONAL SHOWCASE */}
      <section className="py-20 px-[5%] bg-gradient-to-b from-transparent via-brand-light-blue to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="section-label">Featured projects</div>
          <h2 className="section-title">Real results from real clients</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[
              {
                industry: 'Restaurant & Food',
                title: 'Direct orders, zero commission',
                challenge: 'Losing 30% revenue to delivery platforms',
                solution: 'Built mobile-first site with direct ordering',
                result: '40% more direct orders in 60 days',
                impact: 'Top 3 Google ranking',
                icon: '🍽️'
              },
              {
                industry: 'E-commerce',
                title: 'From walk-in to online',
                challenge: 'Lost business during pandemic lockdowns',
                solution: 'Built full e-commerce store with UPI/CC',
                result: '25+ orders in first month',
                impact: '2× reach vs walk-in only',
                icon: '🛒'
              },
              {
                industry: 'Education',
                title: 'Admin work down 8 hours/week',
                challenge: 'Managing 200+ students manually on paper',
                solution: 'Built student portal with auto fee collection',
                result: '95% fees collected on time',
                impact: 'Staff focus on teaching, not admin',
                icon: '📚'
              },
              {
                industry: 'Healthcare',
                title: 'Phone calls down 60%',
                challenge: 'Bottleneck from manual appointment booking',
                solution: 'Online booking with WhatsApp alerts',
                result: '4.9★ Google rating',
                impact: '100% appointment confirmations',
                icon: '🏥'
              },
              {
                industry: 'Real Estate',
                title: 'Leads tripled in 90 days',
                challenge: 'No online presence for listings',
                solution: 'Property portal with lead capture forms',
                result: '3× qualified leads',
                impact: '60% faster close rate',
                icon: '🏠'
              },
              {
                industry: 'Professional Services',
                title: 'Doubled client reach',
                challenge: 'Limited to local referrals only',
                solution: 'Professional website + online scheduling',
                result: '2× new clients from web',
                impact: 'Booked 3 months in advance',
                icon: '💼'
              }
            ].map((project, i) => (
              <div key={i} className="case-study-card animate-fadeInUp hover-lift" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="case-study-image flex items-center justify-center text-6xl bg-gradient-to-br from-brand-medium-blue to-brand-soft-purple">
                  {project.icon}
                </div>
                <div className="case-study-content">
                  <span className="text-xs font-semibold text-brand-soft-purple uppercase tracking-wider">{project.industry}</span>
                  <h3 className="case-study-title">{project.title}</h3>
                  
                  <div className="space-y-3 text-xs leading-relaxed mb-4">
                    <div>
                      <p className="font-semibold text-brand-dark mb-1">Challenge:</p>
                      <p className="text-brand-text-muted">{project.challenge}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-brand-dark mb-1">Solution:</p>
                      <p className="text-brand-text-muted">{project.solution}</p>
                    </div>
                  </div>

                  <div className="border-t border-brand-medium-blue pt-3 mt-auto">
                    <p className="text-xs text-brand-soft-purple font-semibold mb-1">{project.result}</p>
                    <p className="text-xs text-brand-text-muted">{project.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/portfolio" className="btn-primary inline-block">See all projects</Link>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-20 px-[5%]">
        <div className="max-w-6xl mx-auto">
          <div className="section-label">Who we build for</div>
          <h2 className="section-title">Industries we know well</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-12">
            {[
              { icon: '🛒', title: 'Retail & e-commerce', desc: 'Online stores, product catalogues, inventory systems' },
              { icon: '🍽', title: 'Restaurants', desc: 'Menus, online ordering, table booking, loyalty tools' },
              { icon: '🏥', title: 'Healthcare & clinics', desc: 'Appointment booking, patient portals, reports' },
              { icon: '📚', title: 'Education & coaching', desc: 'Student portals, fee management, results, attendance' },
              { icon: '🏠', title: 'Real estate', desc: 'Property listings, lead capture, CRM integration' },
              { icon: '💼', title: 'Professional services', desc: 'Websites and tools for consultants, lawyers, agencies' }
            ].map((industry, i) => (
              <div key={i} className="bg-white border border-brand-medium-blue border-opacity-40 rounded-2xl p-4 hover:bg-brand-light-blue transition-smooth animate-fadeInUp hover-lift" style={{ animationDelay: `${i * 0.08}s` }}>
                <h4 className="text-sm font-semibold text-brand-dark mb-1">{industry.icon} {industry.title}</h4>
                <p className="text-xs text-brand-text-muted leading-relaxed">{industry.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-brand-dark text-white py-20 px-[5%]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-4xl lg:text-5xl mb-4 leading-tight animate-fadeInUp">Ready to build something?</h2>
          <p className="text-white text-opacity-55 mb-8 text-lg animate-fadeInUp animate-delay-100">Tell us what you need. We'll get back to you within 24 hours with a free consultation. No commitment, no sales pressure.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-4 animate-fadeInUp animate-delay-200">
            <Link href="/contact" className="btn-primary inline-block hover-lift">Book a free call</Link>
            <button className="px-7 py-3 border-2 border-white border-opacity-20 rounded-lg font-medium text-white text-opacity-70 hover:bg-white hover:bg-opacity-10 transition-smooth hover:border-opacity-40 inline-block">Send us a message</button>
          </div>
          <p className="text-xs text-white text-opacity-35 animate-fadeInUp animate-delay-300">No commitment. No sales pressure. Just a conversation.</p>
        </div>
      </section>

      <Footer />
    </>
  )
}
