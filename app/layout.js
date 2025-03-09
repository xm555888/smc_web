import './globals.css';

export const metadata = {
  title: '深圳大学传播学院',
  description: '深圳大学传播学院官方网站',
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>
        {children}
      </body>
    </html>
  );
} 