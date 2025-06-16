export default function SimpleBlockComponent() {
  return (
    <div className="min-h-screen">
      <div className="h-[50vh] flex items-center justify-center bg-gradient-to-br bg-black text-center p-4">
        <section className="flex items-center justify-center relative overflow-hidden">
          <div className="text-center text-white z-10">
            <h1 className="text-6xl md:text-8xl font-thin tracking-tight mb-4">
              BRANSHA
            </h1>
            <p className="text-xl md:text-2xl font-light opacity-80">
              Think Different
            </p>
          </div>
        </section>
      </div>
      <div className="h-[50vh] flex items-center justify-center bg-gradient-to-br from-gray-100 via-white to-gray-50 text-center p-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">
            Ce se întâmplă când automatizarea preia controlul unei clădiri?
          </h1>
          <p className="text-base text-gray-600 mb-2">
            Totul devine mai simplu, mai sigur, mai eficient. BMS-ul lucrează
            discret, dar impactul e vizibil zi de zi.
          </p>
          <p className="text-sm text-gray-500">
            Descoperă cum ar putea funcționa și clădirea ta.
          </p>
          {/* <div className="mt-4 h-1 w-12 bg-gray-400 rounded-full"></div> */}
        </div>
      </div>
    </div>
  );
}
