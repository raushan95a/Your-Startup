import './globals.css'

export const metadata = {
  title: 'Tech Startup | Websites, Apps & Custom Software',
  description: 'Developer-led tech startup helping businesses in India go digital. We build websites, apps, and custom software that help your business grow.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
