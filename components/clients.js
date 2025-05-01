import Image from "next/image";

export default function Clients() {
  return (
    <div className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
          <div className="mx-auto w-full max-w-xl lg:mx-0">
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              Наши клиенты
            </h2>
            <p className="mt-6 text-lg/8 text-gray-600">
              Нашими клиентами являются болгарские и иностранные физические и
              юридические лица. Мы консультируем и представляем интересы
              коммерческих компаний в сфере услуг, строительства, энергетики, а
              также продюсерских компаний, банковских и небанковских финансовых
              учреждений, неправительственных организаций. В целях всеобъемлющей
              защиты интересов своих клиентов фирма сотрудничает с широким
              кругом специалистов, включая бухгалтеров, инженеров, страховщиков
              и др.
            </p>
          </div>
          <div className="mx-auto w-full max-w-xl lg:mx-0 lg:max-w-none lg:pl-8">
            <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(10)].map((_, index) => (
                <div
                  key={`client-${index + 1}`}
                  className="w-full flex justify-center"
                  style={{ width: "calc(100% - 16px)" }}
                >
                  <div
                    className="group relative flex items-center justify-center overflow-hidden rounded-lg bg-gray-50 p-2 shadow-sm transition hover:shadow-md w-full"
                    style={{ width: "100%" }}
                  >
                    <Image
                      alt={`Клиент ${index + 1}`}
                      src={`/client-${index + 1}.jpg`}
                      width={240}
                      height={180}
                      quality={90}
                      loading="lazy"
                      className="w-full h-auto object-contain transition duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
