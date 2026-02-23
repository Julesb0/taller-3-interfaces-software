export default function Home() {
  const events = [
    {
      id: 1,
      date: "TODAY",
      time: "17:00",
      title: "Bergen International Film Festival",
      description: "Films from all over the world gather all film enthusiasts for unique moments at the Bergen International Film Festival.",
      bgColor: "bg-blue-100",
    },
    {
      id: 2,
      date: "22 - 31 OCT",
      time: "10:00",
      title: "Wool week",
      description: "ULLVEKA 2021 will be held for the eighth time in the period 22 - 31 October 2021, and will take place in the entire Bergen region.",
      bgColor: "bg-pink-100",
    },
    {
      id: 3,
      date: "22 - 31 OCT",
      time: "19:00",
      title: "Light park at Bergenhus Fortress",
      description: "LUMAGICA - a magical experience for young and old at Bergenhus Fortress, 12 November to 19 December 2021.",
      bgColor: "bg-orange-100",
    },
    {
      id: 4,
      date: "13 - 31 DEC",
      time: "10:00",
      title: "Gingerbread City 2021",
      description: "The world's largest Gingerbread Town can be found in the Xhibition shopping center, right in the center of Bergen",
      bgColor: "bg-green-100",
    },
  ];

  return (
    <div className="min-h-screen bg-blue-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Events</h1>

        <div className="space-y-4">
          {events.map((event) => (
            <div
              key={event.id}
              className="grid grid-cols-12 gap-4 bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              {/* Fecha y Hora - col-span-2 */}
              <div
                className={`col-span-2 ${event.bgColor} rounded-lg p-4 flex flex-col items-center justify-center text-center`}
              >
                <span className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                  {event.date}
                </span>
                <span className="text-2xl font-bold text-gray-800 mt-1">
                  {event.time}
                </span>
              </div>

              {/* Contenido - col-span-8 */}
              <div className="col-span-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>

              {/* Botón - col-span-2 */}
              <div className="col-span-2 flex items-center justify-end">
                <button className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded font-semibold transition-colors text-sm whitespace-nowrap">
                  + Add to calendar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
