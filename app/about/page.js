import Image from 'next/image';

export default function About() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-6">About Me</h1>
      <div className="flex flex-col md:flex-row items-center gap-6">
        <Image src="/images/profile.jpg" alt="Ombasa Nickey" width={200} height={200} className="rounded-full" />
        <div>
          <p className="text-lg mb-4">
            I’m Ombasa Nickey, a developer passionate about using AI/ML to transform education in Africa, inspired by Kenya’s Competency-Based Curriculum (CBC) and SDG 4.
          </p>
          <p className="text-lg mb-4">
            I’m on a 6-month journey to master AI/ML, building tools like chatbots and personalized learning systems. My skills include Python, TensorFlow, Hugging Face, Scikit-learn, and web development with React and Tailwind CSS.
          </p>
          <h2 className="text-xl font-semibold mb-2">Skills</h2>
          <ul className="list-disc pl-5">
            <li>AI/ML: Python, TensorFlow, Scikit-learn, Hugging Face</li>
            <li>Web Development: React, Next.js, Tailwind CSS</li>
            <li>Edutech Focus: Personalized learning, intelligent tutoring systems</li>
          </ul>
        </div>
      </div>
    </div>
  );
}