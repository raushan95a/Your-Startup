'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Carousel from '@/components/Carousel'
import Link from 'next/link'

export default function Portfolio() {
  const carouselItems = [
    {
      category: 'Restaurant & Food',
      title: 'Direct ordering for a local restaurant — zero commission',
      description: 'A restaurant losing 30% per order to Swiggy/Zomato. We built a mobile-first website with online ordering, Razorpay integration, table booking system, and complete Google Business setup.',
      stats: [
        { value: '40%', label: 'More direct orders' },
        { value: '₹0', label: 'Commission per order' },
        { value: 'Top 3', label: 'Google local ranking' }
      ]
    },
    {
      category: 'Retail & eCommerce',
      title: 'Electronics shop goes online — from zero to 25+ orders/month',
      description: '10-year-old walk-in shop lost everything during the pandemic. We built a full e-commerce platform with product catalog, UPI/credit card payments, inventory management, and an intuitive admin panel they could manage themselves.',
      stats: [
        { value: '25+', label: 'Orders in month 1' },
        { value: '2×', label: 'Reach vs walk-in' },
        { value: '90%', label: 'Repeat customers' }
      ]
    },
    {
      category: 'Education & Training',
      title: 'Coaching institute saves 8 hours per week',
      description: '200+ students managed on paper and WhatsApp. We built a complete student management portal with online fees collection, attendance tracking, result publishing, parent access, and automated notifications.',
      stats: [
        { value: '8 hrs', label: 'Saved per week' },
        { value: '95%', label: 'On-time fee collection' },
        { value: '200+', label: 'Students managed' }
      ]
    },
    {
      category: 'Healthcare & Wellness',
      title: 'Healthcare clinic reduces phone calls by 60%',
      description: 'Managing appointments entirely over phone created bottlenecks. We built an online booking system with automated WhatsApp confirmations, doctor scheduling, and a complete admin dashboard for managing operations.',
      stats: [
        { value: '60%', label: 'Fewer phone calls' },
        { value: '4.9★', label: 'Google rating' },
        { value: '100%', label: 'Appointment confirmation' }
      ]
    }
  ];

  return (
    <>
      <Header />
      
      {/* HERO */}
      <section className="bg-brand-light-blue py-16 px-[5%] pt-32">
        <div className="max-w-6xl mx-auto">
          <div className="section-label">Our work</div>
          <h2 className="section-title">Projects we're proud of</h2>
          <p className="section-sub">Real projects, real results, real businesses transformed. See what we've built for companies like yours.</p>
        </div>
      </section>

      {/* CAROUSEL SHOWCASE */}
      <section className="bg-brand-light-blue py-20 px-[5%] border-t border-brand-medium-blue">
        <div className="max-w-6xl mx-auto">
          <Carousel items={carouselItems} autoPlay={true} autoPlayInterval={6000} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-dark text-white py-20 px-[5%]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-4xl lg:text-5xl mb-4 leading-tight">Ready for your success story?</h2>
          <p className="text-white text-opacity-55 mb-8 text-lg">Let's talk about what's possible for your business. Book a free consultation today.</p>
          <Link href="/contact" className="btn-primary inline-block">Book a free call</Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
