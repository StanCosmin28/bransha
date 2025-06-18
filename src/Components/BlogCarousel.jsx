import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import samplePosts from "../Model/blogData";

const BlogCard = ({ post }) => {
  const { image, title, description, date, link } = post;

  return (
    <div className="min-w-[280px] max-w-sm flex-shrink-0 bg-white border border-gray-200 rounded-lg shadow-sm mx-2 my-4">
      <a href={link}>
        <img
          className="rounded-t-lg w-full h-48 object-cover"
          src={image}
          alt={title}
        />
      </a>
      <div className="p-5 text-left">
        <a href={link}>
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700">{description}</p>
        <p className="mb-3 text-sm text-gray-500">{date}</p>
        <a
          href={link}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#0655D1] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 hover:font-bold transition-all duration-300 hover:scale-105"
        >
          Read more
          <svg
            className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default function BlogCarousel({ posts = samplePosts }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    const container = carouselRef.current;
    if (!container) return;

    const scrollAmount = direction === "left" ? -300 : 300;
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });

    setTimeout(() => {
      setScrollPosition(container.scrollLeft);
    }, 500);
  };

  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;

    const handleScroll = () => {
      setScrollPosition(container.scrollLeft);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const canScrollLeft = scrollPosition > 0;
  const canScrollRight = carouselRef.current
    ? scrollPosition <
      carouselRef.current.scrollWidth - carouselRef.current.clientWidth - 10
    : true;

  return (
    <section id="blog" className="py-8 px-4 md:px-8 small-blog bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            Ultimele Noutăți
          </h2>
          <div className="flex space-x-2">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`p-2 rounded-full border ${
                canScrollLeft
                  ? "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
                  : "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
              }`}
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`p-2 rounded-full border ${
                canScrollRight
                  ? "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
                  : "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
              }`}
              aria-label="Scroll right"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="relative">
          <div
            ref={carouselRef}
            className="flex overflow-x-auto pb-6 scrollbar-hide scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
          <div
            className="absolute top-0 right-0 h-full w-34 bg-gradient-to-l from-white to-transparent pointer-events-none"
            style={{ zIndex: 10 }}
          />
        </div>
      </div>
      <style jsx>{`
        @media only screen and (max-width: 360px) {
          .small-blog h2 {
            text-align: left;
            margin-left: 10px;
          }
        }
      `}</style>
    </section>
  );
}
