import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fermah | Proof Cost Estimator',
  description: 'Calculate ZK proving costs on Fermah network',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: '#001529', margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
