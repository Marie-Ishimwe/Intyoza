export const Stats = () => {
  const statsData = [
    { number: 3_165_000, description: "Youth in Rwanda" },
    {
      number: "10%",
      description: "Men engaging in sexual intercourse before age 15",
    },
    {
      number: "5%",
      description: "Women engaging in sexual intercourse before age 15",
    },
    {
      number: 2,
      description: "Components of Intyoza Solutions (App & Training Center)",
    },
  ];

  return (
    <section className="bg-green-700 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        {statsData.map((stat, index) => (
          <div key={index}>
            <h2 className="text-3xl font-bold">{stat.number}</h2>
            <hr className="my-2 border-t-2 border-white w-[70px] mx-auto" />
            <p className="mt-2 text-base">{stat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
