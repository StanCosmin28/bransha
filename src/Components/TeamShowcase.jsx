import data from "../Model/data";
export default function TeamShowcase() {
  return (
    <section className="bg-gray-800 text-white py-12 px-4 lg:px-10">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row lg:items-center justify-between">
        {/* Text Content */}
        <div className="lg:w-2/5 mb-8 lg:mb-0 p-4 text-left">
          <p className="text-lg lg:text-xl mb-4 lg:max-w-full max-w-lg">
            Mai mult decăt R&D. Suntem energia din spatele proiectelor smart,
            dusă până la capăt cu stil și eficiență.
          </p>
          <p className="text-xl lg:text-2xl mb-4 font-semibold">
            Ready when you are.
          </p>
          <p className="text-3xl text-[#DCFC00] font-bold mt-10">
            Technologically, we care!
          </p>
        </div>

        {/* Illustration */}
        <div className="lg:w-3/5">
          <img
            src={data.teamSVG}
            alt="Team Illustration"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
