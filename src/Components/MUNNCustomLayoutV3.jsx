export default function MUNNCustomLayoutV3({
  imageSrc = "",
  title = "MUNN - Your Digital Building Brain",
  descriptions = ["athis is a descriptionription for the MUNN application!"],
  altText = "Section image",
}) {
  return (
    <div className="flex flex-col items-center justify-center h-auto bg-black text-white p-6 max-w-7xl mx-auto">
      <div className="w-full p-4 space-y-4 flex flex-col xl:flex-row justify-between items-center mb-10">
        <h2 className="text-3xl font-bold text-green-400">{title}</h2>
        <ul>
          {descriptions.map((desc, index) => (
            <li key={index}>{desc}</li>
          ))}
        </ul>
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
