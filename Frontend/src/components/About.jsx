import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="bg-gray-50 text-gray-800">

      {/* HERO SECTION */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <img
          src={assets.about_hero}
          alt="hotel"
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Experience Luxury & Comfort
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl">
            Discover a perfect blend of elegance, comfort, and world-class
            hospitality at our premium stays.
          </p>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <img
          src={assets.about}
          alt="about hotel"
          className="rounded-2xl shadow-lg"
        />

        <div>
          <h2 className="text-3xl font-bold mb-4">About Our Hotel</h2>
          <p className="text-gray-600 mb-4">
            Our hotel offers an exceptional stay experience with modern rooms,
            luxurious interiors, and unmatched service. Whether you're here for
            business or leisure, we ensure your stay is memorable.
          </p>
          <p className="text-gray-600">
            Located in prime destinations, our properties are designed to
            provide comfort, convenience, and elegance—all in one place.
          </p>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Why Choose Us</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Luxury Rooms",
                desc: "Spacious rooms with modern design and premium comfort.",
              },
              {
                title: "24/7 Service",
                desc: "Round-the-clock assistance for a seamless stay.",
              },
              {
                title: "Prime Locations",
                desc: "Stay in the heart of the city with easy access.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-xl shadow-md hover:shadow-xl transition"
              >
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 text-center gap-6">
          {[
            { number: "500+", label: "Happy Guests" },
            { number: "120+", label: "Luxury Rooms" },
            { number: "50+", label: "Cities Covered" },
            { number: "10+", label: "Years Experience" },
          ].map((stat, index) => (
            <div key={index}>
              <h3 className="text-3xl font-bold text-blue-600">
                {stat.number}
              </h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-blue-600 text-white py-16 text-center px-6">
        <h2 className="text-3xl font-bold mb-4">
          Book Your Stay Today
        </h2>
        <p className="mb-6">
          Experience comfort, luxury, and unforgettable memories.
        </p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
          Explore Rooms
        </button>
      </section>

    </div>
  );
};

export default About;