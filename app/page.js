import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="hero-bg text-white py-20 text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Building AI/ML Solutions for Education</h1>
          <p className="text-lg md:text-xl mb-6">Hi, I’m Ombasa Nickey, an AI/ML enthusiast creating personalized learning tools.</p>
          <div className="space-x-4">
            <Link href="/projects" className="bg-accent text-white px-6 py-3 rounded hover:bg-green-600">View Projects</Link>
            <Link href="/contact" className="border border-white px-6 py-3 rounded hover:bg-white hover:text-primary">Contact Me</Link>
          </div>
        </div>
      </section>
      <section className="container mx-auto py-10">
        <h2 className="text-3xl font-bold text-center mb-6">Welcome to My Portfolio</h2>
        <p className="text-center max-w-2xl mx-auto">I specialize in AI/ML for edutech, building tools like chatbots and recommendation systems to enhance learning experiences, inspired by Kenya’s CBC and SDG 4.</p>
      </section>
    </div>
  );
}