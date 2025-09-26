import React from "react";
import test1 from "../../../public/test1.jpeg";
import test2 from "../../../public/test2.jpeg";
import test3 from "../../../public/test3.jpeg";
import test4 from "../../../public/test4.jpeg";
import test5 from "../../../public/test5.jpeg";
import test6 from "../../../public/test6.jpeg";
import Image from "next/image";

const Testimonilas = () => {
  const data = [
    {
      content:
        "The quality and fit are absolutely perfect! From the moment I put it on, I could feel the attention to detail and craftsmanship. The fabric is soft yet durable, making it perfect for everyday wear while still looking stylish. Definitely my new go-to brand!",
      name: "— Alex Carter",
      img: test1,
    },
    {
      content:
        "The quality and fit are absolutely perfect! From the moment I put it on, I could feel the attention to detail and craftsmanship. The fabric is soft yet durable, making it perfect for everyday wear while still looking stylish. Definitely my new go-to brand!",
      name: "— Alex Carter",
      img: test2,
    },
    {
      content:
        "The quality and fit are absolutely perfect! From the moment I put it on, I could feel the attention to detail and craftsmanship. The fabric is soft yet durable, making it perfect for everyday wear while still looking stylish. Definitely my new go-to brand!",
      name: "— Alex Carter",
      img: test3,
    },
    {
      content:
        "The quality and fit are absolutely perfect! From the moment I put it on, I could feel the attention to detail and craftsmanship. The fabric is soft yet durable, making it perfect for everyday wear while still looking stylish. Definitely my new go-to brand!",
      name: "— Alex Carter",
      img: test4,
    },
    {
      content:
        "The quality and fit are absolutely perfect! From the moment I put it on, I could feel the attention to detail and craftsmanship. The fabric is soft yet durable, making it perfect for everyday wear while still looking stylish. Definitely my new go-to brand!",
      name: "— Alex Carter",
      img: test5,
    },
    {
      content:
        "The quality and fit are absolutely perfect! From the moment I put it on, I could feel the attention to detail and craftsmanship. The fabric is soft yet durable, making it perfect for everyday wear while still looking stylish. Definitely my new go-to brand!",
      name: "— Alex Carter",
      img: test6,
    },
  ];
  return (
    <div>
      <h1 className="text-2xl pt-20 text-center sm:text-4xl font-medium">
        What Our Customers Say
      </h1>
      <p className="text-center py-4 text-gray-400 text-lg">
        Real experiences. Authentic style. See why <br /> everyone loves Véon
      </p>
      <div className="grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 pb-10 ">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-[#f8f8f8] py-12 px-5 flex flex-col justify-center items-center
        gap-5 text-center p-4 rounded-2xl m-2 -tracking-tighter"
          >
            <p>{item.content}</p>
            <Image
              src={item.img}
              alt="User Pic"
              className="h-14 w-14 rounded-full object-cover "
            />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonilas;
