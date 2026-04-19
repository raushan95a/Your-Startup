'use client'

import Link from 'next/link'
import { useState } from 'react'
import BirdIcon from './BirdIcon'

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState(null)

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-white bg-opacity-90 transition-all duration-300 hover:bg-opacity-95" style={{ backgroundColor: 'rgba(251, 251, 251, 0.95)' }}>
      {/* Bottom border with glow effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ backgroundColor: 'var(--accent-soft)', boxShadow: '0 0 8px rgba(196, 217, 255, 0.3)' }}></div>
      
      <nav className="container px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 flex-shrink-0 transition-all duration-300 hover:scale-105 group">
          <BirdIcon />
          <span className="text-xl font-bold transition-colors duration-300 group-hover:text-brand-soft-purple" style={{ color: 'var(--text-dark)' }}>
            YourStartup
          </span>
        </Link>

        {/* Center Navigation Pills */}
        <div className="hidden lg:flex items-center gap-1 px-6 py-3 rounded-full border-2 transition-all duration-300 hover:border-opacity-100" style={{ borderColor: 'var(--accent-soft)', backgroundColor: 'transparent', borderOpacity: 0.6 }}>
          <div className="relative group">
            <button className="flex items-center gap-1 px-4 py-1 font-medium transition-all duration-300 text-sm hover:text-brand-dark group-hover:text-brand-soft-purple" style={{ color: 'var(--text-muted)' }}>
              Services
              <span className="text-xs transition-transform duration-300 group-hover:rotate-180">▾</span>
            </button>
            <div className="absolute left-0 top-full mt-2 w-40 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 backdrop-blur-sm pt-2 pb-2">
              <Link href="/services" className="block px-4 py-2.5 hover:bg-brand-light-blue text-sm transition-colors duration-200 rounded-lg mx-1" style={{ color: 'var(--text-muted)' }}>
                Website Development
              </Link>
              <Link href="/services" className="block px-4 py-2.5 hover:bg-brand-light-blue text-sm transition-colors duration-200 rounded-lg mx-1" style={{ color: 'var(--text-muted)' }}>
                Mobile Apps
              </Link>
              <Link href="/services" className="block px-4 py-2.5 hover:bg-brand-light-blue text-sm transition-colors duration-200 rounded-lg mx-1" style={{ color: 'var(--text-muted)' }}>
                Custom Software
              </Link>
            </div>
          </div>

          <div className="relative group">
            <button className="flex items-center gap-1 px-4 py-1 font-medium transition-all duration-300 text-sm hover:text-brand-dark group-hover:text-brand-soft-purple" style={{ color: 'var(--text-muted)' }}>
              Industries
              <span className="text-xs transition-transform duration-300 group-hover:rotate-180">▾</span>
            </button>
            <div className="absolute left-0 top-full mt-2 w-44 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 backdrop-blur-sm pt-2 pb-2">
              <Link href="/portfolio" className="block px-4 py-2.5 hover:bg-brand-light-blue text-sm transition-colors duration-200 rounded-lg mx-1" style={{ color: 'var(--text-muted)' }}>
                Retail & E-commerce
              </Link>
              <Link href="/portfolio" className="block px-4 py-2.5 hover:bg-brand-light-blue text-sm transition-colors duration-200 rounded-lg mx-1" style={{ color: 'var(--text-muted)' }}>
                Healthcare
              </Link>
              <Link href="/portfolio" className="block px-4 py-2.5 hover:bg-brand-light-blue text-sm transition-colors duration-200 rounded-lg mx-1" style={{ color: 'var(--text-muted)' }}>
                Education
              </Link>
            </div>
          </div>

          <Link href="/portfolio" className="px-4 py-1 font-medium transition-all duration-300 text-sm hover:text-brand-soft-purple" style={{ color: 'var(--text-muted)' }}>
            Portfolio
          </Link>

          <div className="relative group">
            <button className="flex items-center gap-1 px-4 py-1 font-medium transition-all duration-300 text-sm hover:text-brand-dark group-hover:text-brand-soft-purple" style={{ color: 'var(--text-muted)' }}>
              Insights
              <span className="text-xs transition-transform duration-300 group-hover:rotate-180">▾</span>
            </button>
            <div className="absolute left-0 top-full mt-2 w-40 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 backdrop-blur-sm pt-2 pb-2">
              <Link href="#" className="block px-4 py-2.5 hover:bg-brand-light-blue text-sm transition-colors duration-200 rounded-lg mx-1" style={{ color: 'var(--text-muted)' }}>
                Blog
              </Link>
              <Link href="#" className="block px-4 py-2.5 hover:bg-brand-light-blue text-sm transition-colors duration-200 rounded-lg mx-1" style={{ color: 'var(--text-muted)' }}>
                Resources
              </Link>
              <Link href="#" className="block px-4 py-2.5 hover:bg-brand-light-blue text-sm transition-colors duration-200 rounded-lg mx-1" style={{ color: 'var(--text-muted)' }}>
                Case Studies
              </Link>
            </div>
          </div>

          <Link href="/about" className="px-4 py-1 font-medium transition-all duration-300 text-sm hover:text-brand-soft-purple" style={{ color: 'var(--text-muted)' }}>
            About
          </Link>
        </div>

        {/* CTA Button */}
        <Link href="/contact" className="px-6 py-2.5 rounded-full font-medium text-brand-dark transition-all duration-300 hover:shadow-md-soft hover:scale-105 flex-shrink-0" style={{ backgroundColor: 'var(--accent-main)' }}>
          Book a Free Call
        </Link>

        {/* Mobile Menu Button */}
        <button className="lg:hidden flex flex-col gap-1.5 ml-4 transition-transform duration-300 hover:scale-110" onClick={() => setOpenDropdown(openDropdown ? null : 'mobile')}>
          <span className="w-6 h-0.5 transition-all duration-300" style={{ backgroundColor: 'var(--text-dark)' }}></span>
          <span className="w-6 h-0.5" style={{ backgroundColor: 'var(--text-dark)' }}></span>
          <span className="w-6 h-0.5" style={{ backgroundColor: 'var(--text-dark)' }}></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {openDropdown === 'mobile' && (
        <div className="lg:hidden border-t px-6 py-4 bg-white" style={{ borderColor: 'var(--accent-soft)' }}>
          <div className="space-y-3">
            <Link href="/services" className="block font-medium" style={{ color: 'var(--text-muted)' }}>
              Services
            </Link>
            <Link href="/portfolio" className="block font-medium" style={{ color: 'var(--text-muted)' }}>
              Industries
            </Link>
            <Link href="/portfolio" className="block font-medium" style={{ color: 'var(--text-muted)' }}>
              Portfolio
            </Link>
            <Link href="#" className="block font-medium" style={{ color: 'var(--text-muted)' }}>
              Insights
            </Link>
            <Link href="/about" className="block font-medium" style={{ color: 'var(--text-muted)' }}>
              About
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
