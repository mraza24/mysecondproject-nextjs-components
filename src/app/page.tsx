// src/app/page.tsx
import Header from './components/header'; // Correct import path
import About from './components/about';    // Correct import path

export default function Home() {
  return (
    <main>
      <Header />
      <About />
    </main>
  );
}