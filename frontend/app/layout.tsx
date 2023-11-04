import type { Metadata } from 'next'
import { Josefin_Sans } from 'next/font/google'
import './globals.css'
import { API_URL } from './consts';

const josefin = Josefin_Sans({
  style: 'normal',
  subsets: ['latin-ext'],
})

export const metadata: Metadata = {
    title: 'Medical kiosk',
    description: 'Medical kiosk',
};

async function checkHealth() {
  let res = null;

  try {
    res = await fetch(`${API_URL}/health`);
  }
  catch (e) {
    return false;
  }

  const data = await res.json();

  if (data.message === 'ok') {
    return true;
  }

  return false;
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
  }) {
  
  const isHealthy = await checkHealth();
  
  return (
      <html lang="en">
          <head>
              <link
                  rel="stylesheet"
                  href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"
              ></link>
          </head>
      <body className={josefin.className}>
              <div className="flex flex-col justify-center">
                  <div className='ml-20'>
                  </div>
              </div>
              {isHealthy ? (
                  children
              ) : (
                  <div className="text-3xl p-5">
                      😕 Service is not <u>available</u>, please check your
                      backend configuration.
                  </div>
              )}
          </body>
      </html>
  );
}
