import React from "react";
import Image from "next/image";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import axios from "axios";

// key: "rzp_test_H7d718IB2F8ucc",
// key_secret: "XrlfqWFyPUSgyM2egrwXxkti",
const InfoCard = (props) => {
  const { img, location, title, description, star, price, total } = props;
  const router = useRouter();

  const makePayment = async () => {
    alert("Thank you for booking");
    const res = await initializeRazorpay();

    if (!res) {
      alert("Razorpay SDK Failed to load");
      return;
    }

    // Make API call to the serverless API
    const data = await fetch("/pages/api/razorpay", { method: "POST" }).then(
      (t) => t.json()
    );
    console.log(data);
    var options = {
      key: process.env.RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
      name: "RentEasy Pvt Ltd",
      currency: data.currency,
      amount: data.amount,
      order_id: data.id,
      description: "Thankyou for Booking the hotel",
      image: "https://manuarora.in/logo.png",
      handler: function (response) {
        // Validate payment at server - using webhooks is a better idea.
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      prefill: {
        name: "Kushagra Krishna",
        email: "krishna619@gmail.com",
        contact: "9999999999",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      // document.body.appendChild(script);

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  return (
    <div className='flex py-7 px-2 pr-4 border-b  hover:opacity-80 hover:shadow-lg  transition duration-150 ease-in-out first:border-t'>
      <div className='relative h-24 w-40 md: h-52 md:w-80 flex-shrink-0'>
        <Image
          src={img}
          layout='fill'
          objectFit='cover'
          className='rounded-2xl'
        />
      </div>
      <div className='flex flex-col flex-grow pl-5'>
        <div className='flex justify-between'>
          <p>{location}</p>
          <HeartIcon className='h-6 cursor-pointer' />
        </div>
        <h4 className='text-xl'>{title}</h4>
        <div className='border-b w-10 pt-2' />
        <p className='text-sm text-gray-500 pt-2 flex-grow'>{description}</p>
        <div className='flex justify-between items-center pt-5'>
          <p className='flex items-center'>
            <StarIcon className='h-5 text-red-400' />
            {star}
          </p>
          <div>
            <p className='text-lg lg:text-2xl font-semibold pb-2'>{price}</p>
            <p className='text-right font-light'>{total}</p>
            <button
              onClick={() => router.push("/Payment")}
              className='text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5 hover:bg-red-500 hover:text-white hover:ease-in-out transition duration-200 active:scale-90'
            >
              Book Property
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
