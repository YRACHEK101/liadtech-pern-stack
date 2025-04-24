import React from 'react'

const TrustedByClientsSection = () => {
  return (
    <section className="container mx-auto text-center my-8 md:my-16 px-4">
        <h2 className="text-[#2f1c6a] font-bold scale-y-95 mb-2 text-3xl xl:text-4xl">
          +100 entreprises nous font déjà confiance
        </h2>

        <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16 mt-8 md:mt-16">
          <div className="text-center w-full sm:w-auto">
            <img
              className="w-[70px] h-[60px] md:w-[95px] md:h-[83px] mx-auto"
              alt="Vector"
              src="/images/Vector.svg"
            />
            <p className="font-bold text-[#2d1f67] text-sm md:text-base mt-3 md:mt-6 max-w-[326px] mx-auto">
              Recommandé par + de 100 clients satisfaits
            </p>
          </div>

          <div className="text-center w-full sm:w-auto">
            <img
              className="w-[160px] h-[120px] md:w-[220px] md:h-[172px] mx-auto"
              alt="review icon logo"
              src="/images/image.png"
            />
          </div>

          <div className="text-center w-full sm:w-auto">
            <img
              className="w-[70px] h-[70px] md:w-[95px] md:h-[95px] mx-auto"
              alt="Seo expert svgrepo"
              src="/images/seo-expert-svgrepo-com.svg"
            />
            <p className="font-bold text-[#2d1f67]  mt-2 md:mt-4 max-w-[270px] mx-auto">
              +60 experts tech, créa &amp; marketing
            </p>
          </div>

          <div className="text-center w-full sm:w-auto">
            <img
              className="w-[70px] h-[70px] md:w-[95px] md:h-[95px] mx-auto"
              alt="Seo expert svgrepo"
              src="/images/web.svg"
            />
            <p className="font-bold text-[#2d1f67]  mt-2 md:mt-4 max-w-[286px] mx-auto">
              3 pays, 2 studios, 1 équipe unie
            </p>
          </div>
        </div>
      </section>
  )
}

export default TrustedByClientsSection