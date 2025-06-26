import data from "../Model/data";

export default function MUNNHeaderComponent({
  imageSrc = "",
  title = "MUNN - Your Digital Building Brain",
  descriptions = [
    "athis is a descriptionription for the MUNN application!",
    "athis is a descriptionription for the MUNN application!",
    "athis is a descriptionription for the MUNN application!",
  ],
  altText = "Section image",
}) {
  return (
    <div className="flex flex-col lg:flex-row items-center bg-white justify-evenly h-auto text-black p-20 relative z-10">
      <div className="absolute w-[100vw] h-full -z-10">
        <img className="w-[100vw] h-auto" src={data.headerParticles} alt="" />
      </div>
      <div className="w-full lg:w-2/3 p-4">
        <img
          src={imageSrc}
          alt={altText}
          className="w-[90%] h-auto object-cover rounded-lg"
        />
      </div>
      <div className="w-full lg:w-1/3 p-4 space-y-4">
        <h2 className="text-3xl text-black font-bold">{title}</h2>
        <ul>
          {descriptions.map((desc, index) => (
            <li key={index}>{desc}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
