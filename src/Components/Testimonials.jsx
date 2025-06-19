import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Aman Patel",
    image: "https://images.unsplash.com/photo-1633115738411-58ece4eb47b5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Leafny helped scale our revenue with high-converting ad campaigns. Truly impressed!",
  },
  {
    name: "Sonal Mehta",
    image: "https://images.pexels.com/photos/8297124/pexels-photo-8297124.jpeg",
    text: "Their team is knowledgeable, responsive, and focused on results. Highly recommended!",
  },
  {
    name: "Rajesh Bhingare",
    image: "https://images.pexels.com/photos/32976/pexels-photo.jpg",
    text: "Leafny helped scale our revenue with high-converting ad campaigns. Truly impressed!",
  },
  {
    name: "Ravi Sharma",
    image: "https://images.pexels.com/photos/7580991/pexels-photo-7580991.jpeg",
    text: "From 0 to hundreds of leads per month. The ROI speaks for itself. Great experience!",
  },
  {
    name: "Aranya Nair",
    image: "https://images.pexels.com/photos/7580821/pexels-photo-7580821.jpeg",
    text: "Their team is knowledgeable, responsive, and focused on results. Highly recommended!",
  },
];

function Testimonials() {
  return (
    <section className="bg-purple-700 py-24 px-6 md:px-20 text-center">
      <h2 className="text-4xl font-bold text-white mb-6 uppercase ">
        What Our Clients Say
      </h2>
      <p className="text-white font-bold mb-12 max-w-2xl mx-auto">
        Hear directly from those who’ve seen real growth with Leafny.
      </p>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop={true}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-xl shadow-md p-4 mx-2 h-[600px] flex flex-col items-center justify-center gap-6">
              <img
                src={t.image}
                alt={t.name}
                className="w-96 h-96 rounded-2xl object-cover"
              />
              <p className="text-purple-900 italic mb-3">“{t.text}”</p>
              <h4 className="font-semibold text-purple-700">{t.name}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Testimonials;
