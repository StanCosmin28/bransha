export default function MUNNCustomLayoutV1({
  imageSrc = "",
  title = "Rapoarte",
  descriptions = ["Consumuri", "Activitate", "Eficiență"],
  altText = "Section image",
  description2 = "Totul clar și automat.",
}) {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center h-auto text-white p-6 relative">
      <div className="w-full lg:w-2/5 p-4 space-y-4 min-h-[400px] flex flex-col justify-between text-left lg:ml-10">
        <h2 className="text-5xl font-bold text-white">
          {title}{" "}
          <span className="bg-green-400 p-2 rounded-md text-black ml-2">
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
        <div className="w-fit relative">
          <h3 className="text-4xl font-bold text-white mb-3">{description2}</h3>
          <div className="w-[55%] h-2 bg-green-400 absolute -right-[15%]"></div>
        </div>
      </div>
      <div className="w-full lg:w-3/5 p-4">
        <img
          src={imageSrc}
          alt={altText}
          className="w-[90%] h-auto object-cover rounded-lg mx-auto"
        />
      </div>
    </div>
  );
}
