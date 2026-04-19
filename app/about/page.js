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
            We started this company because we saw too many small businesses getting left behind. We wanted to be different.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4">
        <div className="container max-w-3xl">
          <h2 className="text-2xl font-bold text-brand-dark mb-6">Our Story</h2>
          <p className="text-brand-text-muted mb-4">
            We're a team of developers who spent years building products for other companies. Along the way, we kept seeing the same problem: small and medium businesses in India needed modern technology to compete and grow, but the options available to them were either too expensive, too generic, or too complicated to manage.
          </p>
          <p className="text-brand-text-muted mb-4">
            So we started our own company — built from the ground up to serve businesses like yours. We're developer-led, which means the people who talk to you are the same people who build your product. No middlemen, no miscommunication, no outsourcing your project overseas.
          </p>
          <p className="text-brand-text-muted">
            We build for clients across India — from the biggest metros to tier-2 towns. We understand what it takes to succeed in the Indian market.
          </p>
        </div>
      </section>

      {/* By the Numbers */}
      <section className="bg-brand-light-blue py-16 px-4">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { metric: '12+', label: 'Projects delivered' },
              { metric: '8', label: 'Happy clients' },
              { metric: '3', label: 'Industries served' },
              { metric: '100%', label: 'On-time delivery' }
            ].map((item, i) => (
              <div key={i}>
                <p className="text-3xl md:text-4xl font-bold text-brand-dark">{item.metric}</p>
                <p className="text-sm text-brand-text-muted mt-2">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4">
        <div className="container">
          <h2 className="text-2xl font-bold text-brand-dark mb-12 text-center">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, i) => (
              <div key={i} className="bg-brand-light-blue p-6 rounded-lg border border-brand-medium-blue">
                <h3 className="font-bold text-brand-dark mb-1">{member.name}</h3>
                <p className="text-sm text-brand-soft-purple font-medium mb-3">{member.role}</p>
                <p className="text-sm text-brand-text-muted">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-brand-light-blue py-16 px-4">
        <div className="container">
          <h2 className="text-2xl font-bold text-brand-dark mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                title: 'Honesty over sales',
                desc: 'We\'ll tell you if we think you don\'t need something, or if there\'s a cheaper way to solve your problem. We\'d rather build trust than close a deal.'
              },
              {
                title: 'Simplicity by default',
                desc: 'We don\'t build complex things to look impressive. We build the simplest thing that solves your problem well — and grows with you.'
              },
              {
                title: 'Accountability on every project',
                desc: 'We set deadlines and we meet them. If something goes wrong, we tell you immediately and fix it — no excuses.'
              },
              {
                title: 'Long-term relationships',
                desc: 'Most of our work comes from clients who come back. We\'re invested in your growth, not just your first project.'
              }
            ].map((value, i) => (
              <div key={i} className="bg-white p-6 rounded-lg border-l-4 border-brand-soft-purple">
                <h3 className="font-bold text-brand-dark mb-2">{value.title}</h3>
                <p className="text-sm text-brand-text-muted">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 px-4">
        <div className="container max-w-3xl">
          <h2 className="text-2xl font-bold text-brand-dark mb-8 text-center">Tech Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { category: 'Web', tech: 'React, Next.js, Tailwind CSS, Node.js' },
              { category: 'Mobile', tech: 'React Native, Flutter, Android, iOS' },
              { category: 'Backend', tech: 'Node.js, Python, PostgreSQL, Firebase' },
              { category: 'Hosting', tech: 'Vercel, AWS, Google Cloud, DigitalOcean' },
              { category: 'Payments', tech: 'Razorpay, Stripe, UPI integration' },
              { category: 'Design', tech: 'Figma, Adobe XD, custom UI systems' }
            ].map((item, i) => (
              <div key={i} className="bg-brand-light-blue p-4 rounded-lg">
                <h4 className="font-semibold text-brand-dark mb-1">{item.category}</h4>
                <p className="text-sm text-brand-text-muted">{item.tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-light-blue py-16 px-4">
        <div className="container text-center">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Want to work with us?</h2>
          <p className="text-brand-text-muted mb-8">We're always open to new projects. Let's have a conversation about what you're building.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-brand-soft-purple text-brand-dark font-medium rounded-lg hover:bg-opacity-90 transition">
              Book a free call
            </button>
            <button className="px-6 py-3 border-2 border-brand-medium-blue text-brand-dark font-medium rounded-lg hover:bg-brand-off-white transition">
              See our work
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
