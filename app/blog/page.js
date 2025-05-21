import Link from 'next/link';

export default function Blog() {
  const posts = [
    {
      title: 'Building a Chatbot for Edutech with Hugging Face',
      excerpt: 'How I used Transformers to create a student FAQ chatbot, enhancing engagement.',
      date: 'May 15, 2025',
      link: '#',
    },
    {
      title: 'AI and Kenya’s CBC: Opportunities for Personalized Learning',
      excerpt: 'Exploring how AI can support competency-based education in Kenya.',
      date: 'May 10, 2025',
      link: '#',
    },
    {
      title: 'My 6-Month AI/ML Journey: Lessons Learned',
      excerpt: 'Key takeaways from mastering AI/ML for edutech applications.',
      date: 'May 5, 2025',
      link: '#',
    },
  ];

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-6">Blog</h1>
      <div className="space-y-6">
        {posts.map((post, index) => (
          <div key={index} className="border rounded-lg p-4 shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-gray-600">{post.excerpt}</p>
            <p className="text-sm text-gray-500">{post.date}</p>
            <Link href={post.link} className="text-accent hover:underline">Read More</Link>
          </div>
        ))}
      </div>
    </div>
  );
}