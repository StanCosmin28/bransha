export default function MUNNCustomLayoutV2({
  imageSrc = "https://cdn.thewirecutter.com/wp-content/media/2024/05/protablets-2048px-232431.jpg?auto=webp&quality=75&width=1024",
  title = "MUNN - Your Digital Building Brain",
  descriptions = [
    "athis is a descriptionription for the MUNN application!",
    "athis is a descriptionription for the MUNN application!",
    "athis is a descriptionription for the MUNN application!",
  ],
  altText = "Section image",
}) {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center h-auto  text-white p-6 relative">
      <div className="w-full lg:w-2/3 p-10">
        <img
          src={imageSrc}
          alt={altText}
          className="w-[90%] h-auto object-cover rounded-lg"
        />
      </div>
      <div className="w-full lg:w-1/3 p-4 space-y-4">
        <h2 className="text-3xl font-bold text-green-400">{title}</h2>
        <ul>
          {descriptions.map((desc, index) => (
            <li key={index}>{desc}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
