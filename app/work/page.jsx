import Link from "next/link";
import React from "react";
import Card from "../components/card/Card";

const page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono  flex flex-col">
        <div className="flex flex-col gap-4 items-center pt-36">
          <h1 className="text-4xl sm:text-7xl lg:text-8xl font-bold text-stroke text-black">
            CONTEMPORARY
          </h1>
          <h1 className="text-4xl sm:text-7xl lg:text-8xl font-bold">
            INNOVATION
          </h1>
        </div>
        <div className="flex pt-24 gap-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-[80vw] 2xl:w-[65vw]">
            <Card
              backgroundColor="#3C3C3B"
              logo="/palermo/palermo.svg"
              link="/work/palermo"
              title="stone and ceramic products"
              paragraph=""
            />{" "}
            <Card
              backgroundColor="#96171A"
              logo="/shinfer/shinfer.svg"
              link="/work/shinfer"
              title="Home Appliances"
              paragraph=""
            />
            <Card
              backgroundColor="#003942"
              logo="/ps/ps.svg"
              link="/work/persianstandard"
              title="Manufacturing Industry"
              paragraph=""
            />
            <Card
              backgroundColor="#223E83"
              logo="/mcd/mcd.svg"
              link="/work/mcd-academy"
              title="Finance broker"
              paragraph=""
            />{" "}
            <Card
              backgroundColor="#E12729"
              logo="/rashak/rashak.svg"
              link="/work/rashak"
              title="Food Industry"
              paragraph=""
            />
            <Card
              backgroundColor="#2695B3"
              logo="/ok/ok.svg"
              link="/work/oktamam"
              title="Consultancy and Services"
              paragraph=""
            />
            <Card
              backgroundColor="#C1A020"
              logo="/homano/homano.svg"
              link="/work/homano"
              title="Real Estate Crowd-Funding Platform"
              paragraph=""
            />
            <Card
              backgroundColor="#194E8C"
              logo="/opo/opo.svg"
              link="/work/opo"
              title="Finance broker"
              paragraph=""
            />
            <Card
              backgroundColor="#37185B"
              logo="/bahar/bahar.svg"
              link="/work/bahar"
              title="educational Services"
              paragraph=""
            />
            <Card
              backgroundColor="#1F1F42"
              logo="/omid/omid.svg"
              link="/work/omidanalyzer"
              title="Financial Company"
              paragraph=""
            />
            <Card
              backgroundColor="#EB8B33"
              logo="/maple/maple.svg"
              link="/work/maplemania"
              paragraph=""
            />
            <Card
              backgroundColor="#E72C47"
              logo="/darisun/darisun.svg"
              link="/work/darisun"
              title="kitchen baskets Production"
              paragraph=""
            />
            {/* <Card
              backgroundImage="/stationary/1.jpg"
              link="/work/first"
              title="Food Industry"
              paragraph="Rashak is a factory that specializes in the production and supply of high-quality spices ..."
            />
            <Card
              backgroundImage="/stationary/1.jpg"
              link="/work/first"
              title="Food Industry"
              paragraph="Rashak is a factory that specializes in the production and supply of high-quality spices ..."
            /> */}
          </div>
          {/* <div className="flex flex-col gap-4">
            <Card
              backgroundImage="/stationary/1.jpg"
              link="/work/first"
              title="Food Industry"
              paragraph="Rashak is a factory that specializes in the production and supply of high-quality spices ..."
            />
            <Card
              backgroundImage="/stationary/1.jpg"
              link="/work/first"
              title="Food Industry"
              paragraph="Rashak is a factory that specializes in the production and supply of high-quality spices ..."
            />
            <Card
              backgroundImage="/stationary/1.jpg"
              link="/work/first"
              title="Food Industry"
              paragraph="Rashak is a factory that specializes in the production and supply of high-quality spices ..."
            />
          </div> */}
        </div>
      </div>
    </main>
  );
};

export default page;
