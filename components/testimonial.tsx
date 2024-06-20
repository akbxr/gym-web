
import Image from "next/image";

import { FaQuoteLeft } from "react-icons/fa6";

import "swiper/css";
import "swiper/css/pagination";

const testiMessage = [
  {
    message:
      "Joining this gym has been a game-changer for me. The modern equipment and supportive environment have taken my fitness to the next level!",
  },
  {
    message:
      "The trainers here are simply the best. Their personalized approach and encouragement have helped me achieve goals I never thought possible",
  },
  {
    message:
      "I love how affordable the membership is, especially considering the top-notch facilities and variety of classes offered. An amazing experience! ",
  },
  {
    message:
      "From the moment I walked in, I knew this was the place for me. The cutting-edge machines and clean, spacious layout make every workout a pleasure.",
  }
];


const fetchTestimonial = async () => {
  try {
    const data = await fetch(
      "https://randomuser.me/api/?results=4&inc=name,picture,location,email,cell"
    );

    const result = await data.json();

    return [...result.results];
  } catch (error) {
    console.log(error);
  }
}


const Testimonial = async () => {
  const testimonialData = await fetchTestimonial() || [];

  return (
    <section className="p-8 " id="testimonial">
      <p className="h2 p-4  uppercase font-oswald text-center mb-6">
        Our Testimonials
      </p>
      <div className="container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mx-auto">
        {testimonialData.map((person: any, index: any) => (
          <div key={index} className="flex flex-col justify-center items-center gap-6 text-center h-100 w-90 border-2 border-gray-300 rounded-md p-4 m-4 overflow-auto">
            <Image
              src={person.picture.large}
              width={90}
              height={90}
              alt={person.name.first}
              className="rounded-full border-2 border-accent"
            />
            <span className="text-2xl text-accent">{person.name.first}</span>
            <div className="flex flex-col justify-center items-center">
              <FaQuoteLeft className="text-2xl text-gray-300" />
              <p className="max-w-[380px] mb-4">{testiMessage[index].message}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
