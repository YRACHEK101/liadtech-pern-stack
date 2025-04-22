import React from 'react'

const TrustedByClientsSection = () => {
  return (
    <section className="container mx-auto text-center my-16">
        <h2 className="font-bold ">
          +100 entreprises nous font déjà confiance
        </h2>

        <div className="flex justify-center items-center gap-16 mt-16">
          <div className="text-center">
            <img
              className="w-[95px] h-[83px] mx-auto"
              alt="Vector"
              src="/images/Vector.svg"
            />
            <p className="font-bold text-[#2d1f67] text-[23px] leading-[29px] font-['Raleway',Helvetica] mt-6 max-w-[326px]">
              Recommandé par + de 100 clients satisfaits
            </p>
          </div>

          <div className="text-center">
            <img
              className="w-[220px] h-[172px] mx-auto"
              alt="review icon logo"
              src="/images/image.png"
            />
          </div>

          <div className="text-center">
            <img
              className="w-[95px] h-[95px] mx-auto"
              alt="Seo expert svgrepo"
              src="/images/seo-expert-svgrepo-com.svg"
            />
            <p className="font-bold text-[#2d1f67] text-[23px] leading-[29px] font-['Raleway',Helvetica] mt-4 max-w-[270px]">
              +60 experts tech, créa &amp; marketing
            </p>
          </div>

          <div className="text-center">
            <img
              className="w-[95px] h-[95px] mx-auto"
              alt="Seo expert svgrepo"
              src="/images/web.svg"
            />
            <p className="font-bold text-[#2d1f67] text-[23px] leading-[29px] font-['Raleway',Helvetica] mt-4 max-w-[286px]">
              3 pays, 2 studios, 1 équipe unie
            </p>
          </div>
        </div>
      </section>
  )
}

export default TrustedByClientsSection