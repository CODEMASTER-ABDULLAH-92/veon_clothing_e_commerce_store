import React, { useEffect, useRef, useState } from "react";
import Card from "../Components/Card";
import BestSellerNav from "../Components/BestSellerNav";
import { dataApi } from "../../../public/assets";

const BestSeller = () => {
  const sectionRef = useRef(null);
  const [showNav, setShowNav] = useState(false);
  const [bestSeller,setBestSeller] = useState([]);
  useEffect(()=>{
    const filteredData = dataApi.filter((item)=> item.bestSeller === true);
    setBestSeller(filteredData);
  },[]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // entry.isIntersecting === true means BestSeller is visible
        setShowNav(entry.isIntersecting);
      },
      { threshold: 0 } // fires when any part of BestSeller is visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <>
      {/* Conditionally render LowerNav only when BestSeller is visible */}
      {showNav && (
        <div className="sticky top-30 mt-28 z-30">
          <BestSellerNav/>
        </div>
      )}

      {/* The BestSeller section */}
      <div ref={sectionRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {bestSeller.map((item, index) => (
          <Card
            key={index}
            _id={item._id}
            heading={item.heading}
            imag1={item.imag1}
            price={item.price}
          />
        ))}
      </div>
    </>
  );
};

export default BestSeller;
