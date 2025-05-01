const incentives = [
  {
    name: "Экспертиза",
    imageSrc: "/icons/lawyer-1.svg",
    description:
      "Экспертиза в различных областях права, позволяющая клиентам получать всеобъемлющее обслуживание.",
  },
  {
    name: "Индивидуальный подход",
    imageSrc: "/icons/lawyer-2.svg",
    description:
      "Мы применяем индивидуальный подход к конкретным потребностям каждого клиента.",
  },
  {
    name: "Долгосрочное партнерство",
    imageSrc: "/icons/lawyer-3.svg",
    description:
      "Мы строим долгосрочные партнерские отношения, основанные на доверии и профессионализме.",
  },
];

export default function Incentives() {
  return (
    <div className="bg-gray-900">
      <div className="mx-auto max-w-7xl py-24 sm:px-2 lg:px-4">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
          <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-white">
                Миссия и принципы
              </h2>
              <p className="mt-4 text-white">
                Мы считаем, что доверие - это основа успешного бизнеса.
                Долгосрочные партнерские отношения - наш самый ценный актив.
                Благодаря профессиональному подходу и детальному знанию
                потребностей наших клиентов мы стремимся обеспечить им
                юридическую определенность. Мы сторонники командной работы. Мы
                объединяем наши знания и личный опыт и рассматриваем каждый
                конкретный случай с разных сторон, тем самым предоставляя нашим
                клиентам точные и практически ориентированные решения.
              </p>
            </div>
            <img
              alt=""
              src="/incentives-hero-image.jpg"
              className="aspect-3/2 w-full rounded-lg bg-gray-100 object-cover"
            />
          </div>
          <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
            {incentives.map((incentive) => (
              <div key={incentive.name} className="sm:flex lg:block">
                <div className="sm:shrink-0">
                  <div className="h-10 w-10 flex items-center justify-center rounded-full bg-[#95161C]">
                    <img
                      alt=""
                      src={incentive.imageSrc}
                      className="h-6 w-6"
                      style={{ filter: "brightness(0) invert(1)" }}
                    />
                  </div>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                  <h3 className="text-sm font-medium text-white">
                    {incentive.name}
                  </h3>
                  <p className="mt-2 text-sm text-white">
                    {incentive.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
