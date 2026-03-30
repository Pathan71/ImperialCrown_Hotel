import React from "react";

const experiences = [
  {
    title: "Luxury Stay",
    desc: "Enjoy elegantly designed rooms with world-class comfort and stunning views.",
    img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
  },
  {
    title: "Fine Dining",
    desc: "Taste gourmet dishes prepared by top chefs with global flavors.",
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
  },
  {
    title: "Spa & Wellness",
    desc: "Relax your mind and body with our premium spa and wellness services.",
    img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874",
  },
  {
    title: "Infinity Pool",
    desc: "Unwind in our rooftop infinity pool with breathtaking city views.",
    img: "https://plus.unsplash.com/premium_photo-1683141185056-7d8fcf171800?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Experience = () => {
  return (
    <div className="bg-gray-50 text-gray-800">

      {/* HERO */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb"
          className="absolute w-full h-full object-cover"
          alt="experience"
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Experience Beyond Stay
          </h1>
          <p className="max-w-xl mx-auto text-lg">
            Discover unforgettable moments crafted with luxury, comfort, and care.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-5xl mx-auto px-6 py-14 text-center">
        <h2 className="text-3xl font-bold mb-4">Curated Experiences</h2>
        <p className="text-gray-600">
          From relaxation to adventure, every moment at our hotel is designed
          to give you a memorable and enriching experience.
        </p>
      </section>

      {/* EXPERIENCE CARDS */}
      <section className="max-w-7xl mx-auto px-6 pb-16 grid md:grid-cols-2 gap-10">
        {experiences.map((item, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
          >
            <div className="overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* HIGHLIGHT SECTION */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <img
            src="https://images.unsplash.com/photo-1559599189-fe84dea4eb79"
            className="rounded-2xl shadow-lg"
            alt="highlight"
          />

          <div>
            <h2 className="text-3xl font-bold mb-4">
              A Stay You’ll Never Forget
            </h2>
            <p className="text-gray-600 mb-4">
              Whether it's a romantic getaway, a business trip, or a family
              vacation, our experiences are designed to elevate every moment.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>✔ Personalized services</li>
              <li>✔ Premium comfort & luxury</li>
              <li>✔ Unique experiences curated for you</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-16 text-center px-6">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Experience Luxury?
        </h2>
        <p className="mb-6">
          Book your stay and enjoy world-class hospitality today.
        </p>
        <a href="/rooms" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
          Book Now
        </a>
      </section>

    </div>
  );
};

export default Experience;