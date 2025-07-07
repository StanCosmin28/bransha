export default function MUNNCustomLayoutV2({
  imageSrc = "https://cdn.thewirecutter.com/wp-content/media/2024/05/protablets-2048px-232431.jpg?auto=webp&quality=75&width=1024",
  title = "Date",
  descriptions = ["Grafice clare", "Informații simple", "Decizii rapide"],
  altText = "Section image",
}) {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center h-auto  text-white p-6 relative">
      <div className="w-full lg:w-2/3 p-18">
        <img
          src={imageSrc}
          alt={altText}
          className="w-[90%] h-auto object-cover rounded-lg"
        />
      </div>
      <div className="w-full lg:w-1/3 p-4 space-y-4 flex flex-col lg:items-start items-center">
        <h2 className="text-5xl text-left font-bold text-white leading-18">
          {title}{" "}
          <span className="bg-green-400 p-2 rounded-md text-black xl:ml-2">
            Smart
          </span>
        </h2>
        <ul>
          {descriptions.map((desc, index) => (
            <li
              className="flex justify-start items-center p-2 gap-2 text-3xl font-bold"
              key={index}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-4"
              >
                <circle cx="9.85156" cy="10.1348" r="9.5" fill="#33E281" />
              </svg>
              {desc}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
