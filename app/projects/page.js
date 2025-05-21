import Image from 'next/image';
import Link from 'next/link';

export default function Projects() {
  const projects = [
    {
      title: 'Personalized Quiz Generator',
      description: 'An NLP-based tool using Hugging Face Transformers to generate adaptive quizzes, improving student engagement.',
      tech: 'Python, Hugging Face, Flask',
      github: 'https://github.com/ombasanickey/quiz-generator',
      demo: 'https://quiz-generator-demo.vercel.app',
      image: '/images/quiz-generator.png',
    },
    {
      title: 'Student Performance Predictor',
      description: 'A Scikit-learn model predicting student quiz scores based on historical data.',
      tech: 'Python, Scikit-learn, Pandas',
      github: 'https://github.com/ombasanickey/student-predictor',
      demo: '',
      image: '/images/student-predictor.png',
    },
    {
      title: 'Cyburst Solutions Website',
      description: 'A responsive web app for a tech company offering networking and IT solutions.',
      tech: 'React, Node.js, Tailwind CSS, Vercel',
      github: 'https://github.com/ombasanickey/cyburst',
      demo: 'https://cyburst-solutions.vercel.app',
      image: '/images/cyburst.png',
    },
  ];

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-6">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="border rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <Image src={project.image} alt={project.title} width={400} height={200} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="text-gray-600">{project.description}</p>
              <p className="text-sm mt-2"><strong>Tech:</strong> {project.tech}</p>
              <div className="flex space-x-4 mt-4">
                <Link href={project.github} className="text-accent hover:underline">GitHub</Link>
                {project.demo && <Link href={project.demo} className="text-accent hover:underline">Demo</Link>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}