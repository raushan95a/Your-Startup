'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    phone: '',
    email: '',
    service: '',
    description: '',
    budget: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', business: '', phone: '', email: '', service: '', description: '', budget: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <>
      <Header />
      
      {/* HERO */}
      <section className="bg-brand-light-blue py-16 px-[5%] pt-32">
        <div className="max-w-6xl mx-auto">
          <div className="section-label">Get in touch</div>
          <h2 className="section-title">Let's talk about your project</h2>
          <p className="section-sub">No sales pitch. No templates. Just an honest conversation about what you're building and whether we can help.</p>
        </div>
      </section>

      {/* FORM & SIDEBAR */}
      <section className="py-20 px-[5%]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* FORM */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-brand-dark mb-2">Your name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Raj Sharma"
                  className="w-full px-4 py-3 border border-brand-medium-blue border-opacity-40 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-soft-purple bg-white"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-brand-dark mb-2">Business name</label>
                <input
                  type="text"
                  name="business"
                  value={formData.business}
                  onChange={handleChange}
                  placeholder="e.g. Fresh Bakery"
                  className="w-full px-4 py-3 border border-brand-medium-blue border-opacity-40 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-soft-purple bg-white"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-brand-dark mb-2">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 border border-brand-medium-blue border-opacity-40 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-soft-purple bg-white"
                  />
                  <p className="text-xs text-brand-text-muted mt-1">We'll WhatsApp to confirm</p>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-brand-dark mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@business.com"
                    className="w-full px-4 py-3 border border-brand-medium-blue border-opacity-40 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-soft-purple bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-brand-dark mb-2">What do you need? *</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-brand-medium-blue border-opacity-40 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-soft-purple bg-white"
                >
                  <option value="">Select a service</option>
                  <option value="website">Website development</option>
                  <option value="app">Mobile app</option>
                  <option value="software">Custom software</option>
                  <option value="consultation">Just looking for advice</option>
                  <option value="other">Something else</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-brand-dark mb-2">Tell us about your project</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="What's the problem you're trying to solve? Even a rough idea works."
                  rows="6"
                  className="w-full px-4 py-3 border border-brand-medium-blue border-opacity-40 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-soft-purple bg-white"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-brand-dark mb-2">Budget range</label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-brand-medium-blue border-opacity-40 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-soft-purple bg-white"
                >
                  <option value="">Select a range</option>
                  <option value="under-50k">Under ₹50,000</option>
                  <option value="50k-150k">₹50,000 – ₹1,50,000</option>
                  <option value="150k-500k">₹1,50,000 – ₹5,00,000</option>
                  <option value="above-500k">₹5,00,000+</option>
                  <option value="not-sure">Not sure yet</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full btn-primary"
              >
                Send my message
              </button>

              {submitted && (
                <div className="p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg text-sm">
                  ✓ Got it! We'll be in touch within 24 hours.
                </div>
              )}

              <p className="text-xs text-brand-text-muted">We'll never spam you or share your info. You'll hear from us within 24 hours, no exceptions.</p>
            </form>
          </div>

          {/* SIDEBAR */}
          <div className="space-y-6">
            {/* Quick Call */}
            <div className="bg-brand-light-blue border border-brand-medium-blue border-opacity-40 rounded-3xl p-8">
              <h3 className="font-semibold text-brand-dark mb-2 text-lg">Prefer a quick call?</h3>
              <p className="text-sm text-brand-text-muted mb-6">Book a free 30-minute call with one of our founders. No pitch, no follow-up emails.</p>
              <a href="https://cal.com" className="block w-full text-center px-6 py-3 border-2 border-brand-soft-purple text-brand-dark font-medium rounded-lg hover:bg-brand-soft-purple hover:text-white transition">
                Book on Calendly
              </a>
            </div>

            {/* Contact Info */}
            <div className="bg-brand-light-blue border border-brand-medium-blue border-opacity-40 rounded-3xl p-8">
              <h3 className="font-semibold text-brand-dark mb-6 text-lg">Contact us directly</h3>
              <div className="space-y-5">
                <div>
                  <p className="text-xs text-brand-text-muted uppercase tracking-wider font-semibold mb-1">Email</p>
                  <a href="mailto:hello@yourstartup.com" className="text-brand-dark font-medium hover:text-brand-soft-purple transition">hello@yourstartup.com</a>
                </div>
                <div>
                  <p className="text-xs text-brand-text-muted uppercase tracking-wider font-semibold mb-1">WhatsApp</p>
                  <a href="https://wa.me/919876543210" className="text-brand-dark font-medium hover:text-brand-soft-purple transition">+91 98765 43210</a>
                  <p className="text-xs text-brand-text-muted mt-1">Mon–Sat, 9am–6pm IST</p>
                </div>
                <div>
                  <p className="text-xs text-brand-text-muted uppercase tracking-wider font-semibold mb-1">Location</p>
                  <p className="text-brand-dark font-medium">India</p>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-brand-light-blue border border-brand-medium-blue border-opacity-40 rounded-3xl p-8">
              <h3 className="font-semibold text-brand-dark mb-6 text-lg">Common questions</h3>
              <div className="space-y-6 text-sm">
                <div>
                  <p className="font-semibold text-brand-dark mb-2">How much does a website cost?</p>
                  <p className="text-xs text-brand-text-muted leading-relaxed">Websites start at ₹25,000–₹60,000 depending on complexity. Custom software and apps are higher.</p>
                </div>
                <div>
                  <p className="font-semibold text-brand-dark mb-2">How long will my project take?</p>
                  <p className="text-xs text-brand-text-muted leading-relaxed">Simple websites: 2–3 weeks. Apps: 6–12 weeks. We'll give you a timeline after the first call.</p>
                </div>
                <div>
                  <p className="font-semibold text-brand-dark mb-2">Do you charge for the consultation?</p>
                  <p className="text-xs text-brand-text-muted leading-relaxed">No. The first call is completely free. We just want to understand your problem.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-brand-light-blue py-20 px-[5%] border-t border-brand-medium-blue">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl text-brand-dark text-center mb-12">How it works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { num: '1', title: 'You reach out', desc: 'Send a message or book a call. Tell us what you\'re building.' },
              { num: '2', title: 'We listen', desc: 'Ask questions. Understand your business, not just the tech.' },
              { num: '3', title: 'We propose', desc: 'Clear scope, timeline, cost. No surprises later.' },
              { num: '4', title: 'We build', desc: 'Regular updates. You\'re never in the dark. Launch on time.' }
            ].map((step, i) => (
              <div key={i} className="bg-white border border-brand-medium-blue border-opacity-40 rounded-2xl p-6">
                <div className="bg-brand-soft-purple text-white w-12 h-12 rounded-full flex items-center justify-center font-serif text-xl font-bold mb-4">{step.num}</div>
                <h3 className="font-semibold text-brand-dark mb-2">{step.title}</h3>
                <p className="text-sm text-brand-text-muted leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

  return (
    <>
      <Header />
      
      {/* Hero */}
      <section className="bg-brand-light-blue py-12 px-4 pt-20">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Let's talk about your project</h1>
          <p className="text-brand-text-muted max-w-2xl">
            Tell us what you're working on and we'll get back to you within 24 hours. No sales pitch — just an honest conversation about whether we can help.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="container grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-brand-dark mb-2">Your name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Ravi Sharma"
                  required
                  className="w-full px-4 py-2 border border-brand-medium-blue rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-soft-purple"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-brand-dark mb-2">Business name</label>
                <input
                  type="text"
                  name="business"
                  value={formData.business}
                  onChange={handleChange}
                  placeholder="e.g. Sharma Electronics"
                  className="w-full px-4 py-2 border border-brand-medium-blue rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-soft-purple"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-brand-dark mb-2">Phone number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-brand-medium-blue rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-soft-purple"
                />
                <p className="text-xs text-brand-text-muted mt-1">We'll WhatsApp you to confirm</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-brand-dark mb-2">Email address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@yourbusiness.com"
                  required
                  className="w-full px-4 py-2 border border-brand-medium-blue rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-soft-purple"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-brand-dark mb-2">What do you need? *</label>
                <select
                  name="need"
                  value={formData.need}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-brand-medium-blue rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-soft-purple"
                >
                  <option value="">Select an option</option>
                  <option value="website">Website development</option>
                  <option value="app">Mobile app</option>
                  <option value="custom">Custom software</option>
                  <option value="advice">Not sure yet — need advice</option>
                  <option value="other">Something else</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-brand-dark mb-2">Tell us about your project</label>
                <textarea
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  placeholder="Even a rough idea is fine"
                  rows="5"
                  className="w-full px-4 py-2 border border-brand-medium-blue rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-soft-purple"
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-brand-dark mb-2">Budget range</label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-brand-medium-blue rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-soft-purple"
                >
                  <option value="">Select a range</option>
                  <option value="under-50k">Under ₹50,000</option>
                  <option value="50k-150k">₹50,000 – ₹1,50,000</option>
                  <option value="150k-500k">₹1,50,000 – ₹5,00,000</option>
                  <option value="above-500k">₹5,00,000+</option>
                  <option value="not-sure">Not sure yet</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-brand-soft-purple text-brand-dark font-medium rounded-lg hover:bg-opacity-90 transition"
              >
                Send message
              </button>

              {submitted && (
                <div className="p-4 bg-green-100 text-green-700 rounded-lg text-sm">
                  Thanks! We've received your message and will get back to you within 24 hours.
                </div>
              )}

              <p className="text-xs text-brand-text-muted">We never share your details. You'll hear from us within 24 hours.</p>
            </form>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Book a Call */}
            <div className="bg-brand-light-blue border border-brand-medium-blue rounded-lg p-6">
              <h3 className="font-bold text-brand-dark mb-2">Prefer a call?</h3>
              <p className="text-sm text-brand-text-muted mb-4">Book a free 30-minute discovery call directly in our calendar. No back-and-forth needed.</p>
              <button className="w-full px-4 py-2 border border-brand-soft-purple text-brand-dark font-medium rounded-lg hover:bg-brand-soft-purple hover:text-white transition">
                Book a free call
              </button>
            </div>

            {/* Contact Details */}
            <div className="bg-brand-light-blue rounded-lg p-6">
              <h3 className="font-bold text-brand-dark mb-4">Contact Details</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-semibold text-brand-dark">Email</p>
                  <p className="text-brand-text-muted">hello@yourstartup.com</p>
                </div>
                <div>
                  <p className="font-semibold text-brand-dark">WhatsApp</p>
                  <p className="text-brand-text-muted">+91 98765 43210</p>
                  <p className="text-xs text-brand-text-muted">Mon–Sat, 9am–7pm IST</p>
                </div>
                <div>
                  <p className="font-semibold text-brand-dark">Location</p>
                  <p className="text-brand-text-muted">India</p>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-brand-light-blue rounded-lg p-6">
              <h3 className="font-bold text-brand-dark mb-4">FAQ</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-semibold text-brand-dark mb-1">How much does a project cost?</p>
                  <p className="text-brand-text-muted text-xs">Websites start around ₹30,000–₹60,000. Apps or custom software from ₹1,50,000.</p>
                </div>
                <div>
                  <p className="font-semibold text-brand-dark mb-1">How long does it take?</p>
                  <p className="text-brand-text-muted text-xs">Websites: 2–4 weeks. Apps/software: 6–12 weeks. We'll give you a clear timeline.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="bg-brand-light-blue py-16 px-4">
        <div className="container">
          <h2 className="text-2xl font-bold text-brand-dark mb-8 text-center">What Happens Next</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { step: '1', title: 'We read your message', desc: 'A real person on our team will read what you\'ve written before responding.' },
              { step: '2', title: 'Within 24 hours', desc: 'We\'ll confirm receipt and suggest a time to talk.' },
              { step: '3', title: 'Free 30-min call', desc: 'We ask questions about your business — no pressure, no pitch.' },
              { step: '4', title: 'Get a proposal', desc: 'Clear scope, timeline, and cost within 2–3 business days.' }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-lg border-l-4 border-brand-soft-purple text-center">
                <div className="bg-brand-soft-purple text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mb-3 mx-auto">
                  {item.step}
                </div>
                <h4 className="font-semibold text-brand-dark mb-2 text-sm">{item.title}</h4>
                <p className="text-xs text-brand-text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
