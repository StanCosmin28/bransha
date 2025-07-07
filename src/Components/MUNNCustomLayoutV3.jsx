export default function MUNNCustomLayoutV3({
  imageSrc = "",
  title = "Istoric",
  description = "Ce s-a întâmplat, când și unde – totul salvat.",
  altText = "Section image",
}) {
  return (
    <div className="flex flex-col items-center justify-center h-auto bg-black text-white p-6 max-w-7xl mx-auto">
      <div className="w-full p-4 space-y-4 flex flex-col xl:flex-row justify-between items-center mb-10">
        <h2 className="text-5xl text-left font-bold text-white leading-18">
          {title}{" "}
          <span className="bg-green-400 p-2 rounded-md text-black xl:ml-2">
            Smart
          </span>
        </h2>

        <div className="flex justify-center ">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-3 mt-3"
          >
            <circle cx="9.85156" cy="10.1348" r="9.5" fill="#33E281" />
          </svg>
          <h2 className="text-4xl max-w-[22rem] text-left">{description}</h2>
        </div>
      </div>
      <div className="w-full p-4">
        <img
          src={imageSrc}
          alt={altText}
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
    </div>
  );
}
