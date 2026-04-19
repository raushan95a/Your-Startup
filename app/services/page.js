'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function Services() {
  return (
    <>
      <Header />
      
      {/* HERO */}
      <section className="bg-brand-light-blue py-16 px-[5%] pt-32">
        <div className="max-w-6xl mx-auto">
          <div className="section-label">What we build</div>
          <h2 className="section-title">Services that help your business grow online</h2>
          <p className="section-sub">We build digital products for businesses that want to reach more customers, work more efficiently, and look professional online.</p>
        </div>
      </section>

      {/* SERVICES DETAIL */}
      <section className="py-20 px-[5%]">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Website Development */}
          <div className="bg-brand-light-blue rounded-3xl p-8 lg:p-12">
            <div className="badge badge-main mb-4">Most popular</div>
            <h2 className="font-serif text-3xl text-brand-dark mb-3">Website Development</h2>
            <p className="text-lg text-brand-text-muted mb-6">Your business, online — fast, beautiful, and built to convert</p>
            <p className="text-brand-dark mb-8">A great website is your most important sales tool. We design and build websites that look professional, load fast on every device, and turn visitors into paying customers. From simple brochure sites to full e-commerce stores — we build what your business actually needs.</p>
            <div>
              <h4 className="font-semibold text-brand-dark mb-4">What's included:</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {['Custom design', 'Mobile-first development', 'SEO setup', 'Contact forms', 'Google Analytics integration', 'Fast hosting setup', '1 month free support post-launch'].map((item, i) => (
                  <li key={i} className="text-sm text-brand-text-muted flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-soft-purple flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Mobile App Development */}
          <div className="bg-brand-light-blue rounded-3xl p-8 lg:p-12">
            <div className="badge badge-soft mb-4">Android & iOS</div>
            <h2 className="font-serif text-3xl text-brand-dark mb-3">Mobile App Development</h2>
            <p className="text-lg text-brand-text-muted mb-6">Put your business in your customers' pockets</p>
            <p className="text-brand-dark mb-8">More than 80% of internet usage in India happens on mobile. We build Android and iOS apps that are fast, easy to use, and built around how your customers actually behave — not just how apps are supposed to look.</p>
            <div>
              <h4 className="font-semibold text-brand-dark mb-4">What's included:</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {['Android & iOS development', 'UX/UI design', 'Push notifications', 'Payment integration (Razorpay, UPI)', 'App Store & Play Store submission', 'Admin dashboard', 'Bug fixes post-launch'].map((item, i) => (
                  <li key={i} className="text-sm text-brand-text-muted flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-soft-purple flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Custom Software */}
          <div className="bg-brand-light-blue rounded-3xl p-8 lg:p-12">
            <div className="badge badge-outline mb-4">Tailored to you</div>
            <h2 className="font-serif text-3xl text-brand-dark mb-3">Custom Software</h2>
            <p className="text-lg text-brand-text-muted mb-6">Built around your business, not the other way around</p>
            <p className="text-brand-dark mb-8">Off-the-shelf software forces your business to adapt to it. We flip that around. Whether you need a billing system, an inventory tracker, a booking platform, or an internal operations tool — we build software that fits exactly how you work and scales as you grow.</p>
            <div>
              <h4 className="font-semibold text-brand-dark mb-4">Popular examples:</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {['Invoice & billing portals', 'Appointment booking systems', 'Inventory management tools', 'Staff management dashboards', 'Client portals', 'Reporting and analytics dashboards'].map((item, i) => (
                  <li key={i} className="text-sm text-brand-text-muted flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-soft-purple flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-brand-light-blue py-20 px-[5%]">
        <div className="max-w-6xl mx-auto">
          <div className="section-label">Who we build for</div>
          <h2 className="section-title">Industries we know well</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
            {[
              { icon: '🛒', title: 'Retail & e-commerce', desc: 'Online stores, product catalogues, and inventory systems' },
              { icon: '🍽', title: 'Restaurants & hospitality', desc: 'Menus, online ordering, table booking, and loyalty tools' },
              { icon: '🏥', title: 'Healthcare & clinics', desc: 'Appointment booking, patient portals, and report management' },
              { icon: '📚', title: 'Education & coaching', desc: 'Student portals, fee management, attendance, and results' },
              { icon: '🏠', title: 'Real estate', desc: 'Property listings, lead capture, and CRM integration' },
              { icon: '💼', title: 'Professional services', desc: 'Websites and tools for consultants, lawyers, and agencies' }
            ].map((industry, i) => (
              <div key={i} className="bg-white border border-brand-medium-blue border-opacity-40 rounded-2xl p-4 hover:bg-white transition">
                <h4 className="text-sm font-semibold text-brand-dark mb-1">{industry.icon} {industry.title}</h4>
                <p className="text-xs text-brand-text-muted leading-relaxed">{industry.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-[5%]">
        <div className="max-w-4xl mx-auto bg-brand-light-blue rounded-3xl p-12 text-center border border-brand-medium-blue border-opacity-40">
          <h2 className="font-serif text-3xl text-brand-dark mb-4">Not sure what you need?</h2>
          <p className="text-brand-text-muted mb-8 max-w-2xl mx-auto">Most of our clients come to us with a problem, not a solution. Tell us what's not working in your business, and we'll figure out together what to build.</p>
          <Link href="/contact" className="btn-primary inline-block">Book a free call</Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
      
      {/* Hero */}
      <section className="bg-brand-light-blue py-12 px-4 pt-20">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Services that help your business grow online</h1>
          <p className="text-brand-text-muted max-w-2xl">
            We build digital products for businesses that want to reach more customers, work more efficiently, and look professional online.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4">
        <div className="container space-y-12">
          {/* Website Development */}
          <div className="bg-brand-light-blue rounded-lg p-8">
            <div className="inline-block bg-brand-soft-purple text-white text-xs font-bold px-3 py-1 rounded-full mb-4">Most popular</div>
            <h2 className="text-2xl font-bold text-brand-dark mb-2">Website Development</h2>
            <p className="text-brand-text-muted mb-6">Your business, online — fast, beautiful, and built to convert</p>
            <p className="text-brand-dark mb-6">
              A great website is your most important sales tool. We design and build websites that look professional, load fast on every device, and turn visitors into paying customers.
            </p>
            <div>
              <h4 className="font-semibold text-brand-dark mb-3">What's included:</h4>
              <ul className="space-y-2 text-sm text-brand-text-muted">
                <li>✓ Custom design</li>
                <li>✓ Mobile-first development</li>
                <li>✓ SEO setup</li>
                <li>✓ Contact forms</li>
                <li>✓ Google Analytics integration</li>
                <li>✓ Fast hosting setup</li>
                <li>✓ 1 month free support post-launch</li>
              </ul>
            </div>
          </div>

          {/* Mobile App Development */}
          <div className="bg-brand-light-blue rounded-lg p-8">
            <div className="inline-block bg-brand-medium-blue text-brand-dark text-xs font-bold px-3 py-1 rounded-full mb-4">Android & iOS</div>
            <h2 className="text-2xl font-bold text-brand-dark mb-2">Mobile App Development</h2>
            <p className="text-brand-text-muted mb-6">Put your business in your customers' pockets</p>
            <p className="text-brand-dark mb-6">
              More than 80% of internet usage in India happens on mobile. We build Android and iOS apps that are fast, easy to use, and built around how your customers actually behave.
            </p>
            <div>
              <h4 className="font-semibold text-brand-dark mb-3">What's included:</h4>
              <ul className="space-y-2 text-sm text-brand-text-muted">
                <li>✓ Android & iOS development</li>
                <li>✓ UX/UI design</li>
                <li>✓ Push notifications</li>
                <li>✓ Payment integration (Razorpay, UPI)</li>
                <li>✓ App Store & Play Store submission</li>
                <li>✓ Admin dashboard</li>
                <li>✓ Bug fixes post-launch</li>
              </ul>
            </div>
          </div>

          {/* Custom Software */}
          <div className="bg-brand-light-blue rounded-lg p-8">
            <div className="inline-block bg-brand-off-white text-brand-dark text-xs font-bold px-3 py-1 rounded-full mb-4">Tailored to you</div>
            <h2 className="text-2xl font-bold text-brand-dark mb-2">Custom Software</h2>
            <p className="text-brand-text-muted mb-6">Built around your business, not the other way around</p>
            <p className="text-brand-dark mb-6">
              Off-the-shelf software forces your business to adapt to it. We flip that around. We build software that fits exactly how you work and scales as you grow.
            </p>
            <div>
              <h4 className="font-semibold text-brand-dark mb-3">Popular examples:</h4>
              <ul className="space-y-2 text-sm text-brand-text-muted">
                <li>• Invoice & billing portals</li>
                <li>• Appointment booking systems</li>
                <li>• Inventory management tools</li>
                <li>• Staff management dashboards</li>
                <li>• Client portals</li>
                <li>• Reporting and analytics dashboards</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-brand-light-blue py-16 px-4">
        <div className="container">
          <h2 className="text-3xl font-bold text-brand-dark mb-8">Who we build for</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { industry: 'Retail & e-commerce', work: 'Online stores, product catalogues, and inventory systems' },
              { industry: 'Restaurants & hospitality', work: 'Menus, online ordering, table booking, and loyalty tools' },
              { industry: 'Healthcare & clinics', work: 'Appointment booking, patient portals, and report management' },
              { industry: 'Education & coaching', work: 'Student portals, fee management, attendance, and results' },
              { industry: 'Real estate', work: 'Property listings, lead capture, and CRM integration' },
              { industry: 'Professional services', work: 'Websites and tools for consultants, lawyers, and agencies' },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-lg border border-brand-medium-blue">
                <h3 className="font-bold text-brand-dark mb-2">{item.industry}</h3>
                <p className="text-sm text-brand-text-muted">{item.work}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="container bg-brand-light-blue rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-brand-dark mb-2">Not sure what you need?</h2>
          <p className="text-brand-text-muted mb-6">
            Most of our clients come to us with a problem, not a solution. Tell us what's not working in your business, and we'll figure out together what to build.
          </p>
          <button className="px-6 py-3 bg-brand-soft-purple text-brand-dark font-medium rounded-lg hover:bg-opacity-90 transition">
            Book a free call
          </button>
        </div>
      </section>

      <Footer />
    </>
  )
}
