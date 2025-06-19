import React from 'react'

const Hero = () => {
  return (
    <section className="relative text-white min-h-screen px-6 md:px-20 py-24 flex flex-col justify-center items-center text-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-5">
        <video src="/hero-section1.mp4" autoPlay playsInline loop muted className=' inset-0 h-full w-full object-cover'></video>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10">
        <h1 className="text-4xl md:text-8xl font-bold mb-6">
          Grow Your Business with
          <span className="text-purple-300"> High-Converting Ads</span>
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Data-driven ads that deliver leads, sales, and real ROI for your
          business.
        </p>
        <a
          href="#"
          className="bg-purple-900 hover:bg-purple-600 text-white px-6 py-3 rounded-full transition"
        >
          Get a Free Ad Audit
        </a>
      </div>
    </section>
  )
}

export default Hero
