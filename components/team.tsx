import Image from "next/image";

const fetchTestimonial = async () => {
  try {
    const data = await fetch(
      "https://randomuser.me/api/?results=4"
    );

    const result = await data.json();

    return [...result.results];
  } catch (error) {
    console.log(error);
  }
}

const Team = async () => {
  const trainerData = await fetchTestimonial() || [];
  return (
    <section className="py-12 " id="team">
      <div className="container mx-auto h-full flex flex-col items-center justify-center">
        <h2 className="text-2xl p-4  uppercase font-extrabold text-center mb-6">
          Our trainers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 mb-12">
          {trainerData.map((trainer, index) => (
            <div key={index} className="flex flex-col border-2 border-red-500 justify-center items-center gap-4 text-center h-full">
              <div>
                <Image src={trainer.picture.large} height={248} width={248} alt={trainer.name} className="border-b-2 border-red-500" />
              </div>
              <p className="font-semibold uppercase text-xl ">{trainer.name.first}</p>
              <p className="uppercase text-xs tracking-[3px] mb-2">
                Trainer
              </p>
              <p className="mb-6 max-w-[320px] mx-auto">
                {trainer.cell}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section >
  );
};

export default Team;
