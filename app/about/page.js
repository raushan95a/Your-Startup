'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function About() {
  return (
    <>
      <Header />
      
      {/* HERO */}
      <section className="bg-brand-light-blue py-16 px-[5%] pt-32">
        <div className="max-w-6xl mx-auto">
          <div className="section-label">About us</div>
          <h2 className="section-title">We build things for people who care</h2>
          <p className="section-sub">A small team of developers who left bigger companies to build products that actually solve real problems for real businesses.</p>
        </div>
      </section>

      {/* STORY */}
      <section className="py-20 px-[5%]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl text-brand-dark mb-8">The story so far</h2>
          <div className="space-y-6 text-brand-text-muted leading-relaxed">
            <p>We're a team of developers who spent years building products inside bigger companies. We saw smart engineering, yes — but we also saw a lot of waste. Projects delayed, budgets blown, clients confused by technical jargon, and tech stacks chosen because they looked impressive on a resume, not because they solved the business problem.</p>
            <p>Then we noticed something else: small and medium businesses in India needed modern digital tools to compete and grow. But the options available to them were either outrageously expensive, one-size-fits-all garbage, or so poorly built they'd need a full-time engineer just to keep them running.</p>
            <p>So we left. We started YourStartup to prove you could build better — faster, more honestly, and at prices that actually make sense for growing businesses. No venture capital pushing us to chase growth over profitability. No massive overhead. Just developers who care about building things that work.</p>
            <p>We've built for businesses across India — restaurants, retail shops, coaching institutes, clinics, and service-based companies. We understand the Indian market, the local constraints, and how to build digital products that actually work for your customers. From metro cities to tier-2 towns, we've seen what works.</p>
          </div>
        </div>
      </section>

      {/* METRICS */}
      <section className="bg-brand-light-blue py-20 px-[5%]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { number: '12+', label: 'Projects delivered' },
              { number: '100%', label: 'On-time delivery' },
              { number: '8', label: 'Repeat clients' },
              { number: '3', label: 'Industries leading' }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="font-serif text-4xl lg:text-5xl text-brand-dark mb-2">{item.number}</div>
                <p className="text-sm text-brand-text-muted">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 px-[5%]">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl text-brand-dark mb-12 text-center">How we work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Honesty first',
                desc: 'We\'ll tell you if you don\'t need something. We\'d rather build trust than close a sale.'
              },
              {
                title: 'Simple by default',
                desc: 'We build the simplest solution that works — not complex code to look impressive.'
              },
              {
                title: 'Accountable always',
                desc: 'We set deadlines and meet them. Problems get fixed immediately, not hidden.'
              },
              {
                title: 'Focused on growth',
                desc: 'Most clients come back. We\'re invested in your long-term success, not just project-by-project.'
              }
            ].map((value, i) => (
              <div key={i} className="bg-brand-light-blue border border-brand-medium-blue border-opacity-40 rounded-2xl p-6">
                <h3 className="font-semibold text-brand-dark mb-2">{value.title}</h3>
                <p className="text-sm text-brand-text-muted leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="py-20 px-[5%] bg-brand-light-blue">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl text-brand-dark mb-12 text-center">What we build with</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { category: '🌐 Web', tech: 'React, Next.js, Tailwind CSS, Node.js, TypeScript' },
              { category: '📱 Mobile', tech: 'React Native, Flutter, Android, iOS' },
              { category: '⚙️ Backend', tech: 'Node.js, Python, PostgreSQL, Firebase, APIs' },
              { category: '🚀 Hosting', tech: 'Vercel, AWS, Google Cloud, DigitalOcean' },
              { category: '💳 Payments', tech: 'Razorpay, Stripe, UPI, WhatsApp Integration' },
              { category: '🎨 Design', tech: 'Figma, Adobe XD, Design systems' }
            ].map((item, i) => (
              <div key={i} className="bg-white border border-brand-medium-blue border-opacity-40 rounded-2xl p-6">
                <h3 className="font-semibold text-brand-dark mb-2">{item.category}</h3>
                <p className="text-sm text-brand-text-muted leading-relaxed">{item.tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-dark text-white py-20 px-[5%]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-4xl lg:text-5xl mb-4 leading-tight">Want to work together?</h2>
          <p className="text-white text-opacity-55 mb-8 text-lg">Let's talk about what you're building. No pressure, no sales pitch — just a conversation about what's possible.</p>
          <Link href="/contact" className="btn-primary inline-block">Book a free call</Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
