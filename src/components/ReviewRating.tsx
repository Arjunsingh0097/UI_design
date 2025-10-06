export default function ReviewRating() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Left Side - Rating */}
            <div className="flex items-center gap-4">
              {/* Rating Number */}
              <div className="text-4xl font-bold text-gray-900">
                4.9
              </div>
              
              {/* Stars */}
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    className="w-6 h-6 text-teal-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              {/* Review Count */}
              <div className="text-gray-600 text-lg">
                226 reviews
              </div>
            </div>
            
            {/* Right Side - Write Review Button */}
            <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-full font-medium transition-colors duration-200">
              Write a review
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
