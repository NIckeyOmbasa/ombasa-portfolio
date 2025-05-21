import Link from 'next/link';

export default function Contact() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-6">Contact Me</h1>
      <p className="text-center mb-6">Let’s collaborate on innovative edutech solutions!</p>
      <div className="flex flex-col md:flex-row gap-6">
        <form action="https://formspree.io/f/your-form-id" method="POST" className="w-full md:w-1/2 space-y-4">
          <input type="text" name="name" placeholder="Name" className="w-full p-2 border rounded" required />
          <input type="email" name="email" placeholder="Email" className="w-full p-2 border rounded" required />
          <textarea name="message" placeholder="Message" className="w-full p-2 border rounded" rows="5" required></textarea>
          <button type="submit" className="bg-accent text-white p-2 rounded hover:bg-green-600">Send</button>
        </form>
        <div className="w-full md:w-1/2 space-y-2">
          <p><strong>Email:</strong> ombasanickey@example.com</p>
          <p><strong>LinkedIn:</strong> <Link href="https://linkedin.com/in/ombasanickey" className="text-accent hover:underline">Profile</Link></p>
          <p><strong>GitHub:</strong> <Link href="https://github.com/ombasanickey" className="text-accent hover:underline">Profile</Link></p>
          <p><strong>X:</strong> <Link href="https://x.com/ombasanickey" className="text-accent hover:underline">Profile</Link></p>
        </div>
      </div>
    </div>
  );
}