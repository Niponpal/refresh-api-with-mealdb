const Contact = () => {
  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-5xl w-full bg-white shadow-lg rounded-2xl p-8 grid md:grid-cols-2 gap-8">

        {/* Left Side - Info */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-6">
            Have any questions or need help? Feel free to reach out to us anytime.
          </p>

          <div className="space-y-3">
            <p><span className="font-semibold">📍 Address:</span> Dhaka, Bangladesh</p>
            <p><span className="font-semibold">📞 Phone:</span> +880 1234-567890</p>
            <p><span className="font-semibold">📧 Email:</span> support@example.com</p>
          </div>
        </div>

        {/* Right Side - Form */}
        <form className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Message Here</label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Send Message Here
          </button>
        </form>

      </div>
    </section>
  );
};

export default Contact;