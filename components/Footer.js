import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-brand-light-blue border-t border-brand-medium-blue">
      <div className="container py-16 px-[5%]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-bold text-brand-dark mb-4">YourStartup</h4>
            <p className="text-sm text-brand-text-muted">Building digital solutions for growing businesses in India.</p>
          </div>
          <div>
            <h5 className="font-semibold text-brand-dark mb-4">Services</h5>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services" className="hover:text-brand-soft-purple">Website Development</Link></li>
              <li><Link href="/services" className="hover:text-brand-soft-purple">Mobile Apps</Link></li>
              <li><Link href="/services" className="hover:text-brand-soft-purple">Custom Software</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-brand-dark mb-4">Company</h5>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-brand-soft-purple">About Us</Link></li>
              <li><Link href="/portfolio" className="hover:text-brand-soft-purple">Portfolio</Link></li>
              <li><Link href="/contact" className="hover:text-brand-soft-purple">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-brand-dark mb-4">Contact</h5>
            <p className="text-sm text-brand-text-muted mb-2">hello@yourstartup.com</p>
            <p className="text-sm text-brand-text-muted">+91 95765 49225</p>
          </div>
        </div>
        <div className="border-t border-brand-medium-blue pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-brand-text-muted mb-4 md:mb-0">© 2024 YourStartup. All rights reserved.</p>
          <div className="flex gap-4 text-sm">
            <Link href="#" className="hover:text-brand-soft-purple">Privacy Policy</Link>
            <Link href="#" className="hover:text-brand-soft-purple">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
