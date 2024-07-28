import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { EbookData } from "../context/ebookContext"; // Adjust the path as necessary
import { server } from "../main";
import axios from "axios";
import toast from "react-hot-toast";
import { UserData } from "../context/userContext";
import Loading from "../components/loading/loading";

const EbookDescription = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const { fetchEbook, ebook } = EbookData();
  const { fetchUser, user } = UserData();



  useEffect(() => {
    fetchEbook(params.id);
  }, [params.id]);



  const handlePurchase = async () => {
    setLoading(true);

    try {
      // Initiate checkout
      const { data: { order } } = await axios.post(
        `${server}/api/ebook/checkout/${params.id}`,
        {},
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );

      const options = {
        key: "rzp_test_O08KSxJATKVPW6", // Your Razorpay Key ID
        amount: order.amount, // Ensure amount is in paise (₹100 = 10000)
        currency: "INR",
        name: "SanskritMala",
        description: "Purchase eBook",
        order_id: order.id,
        handler: async function (response) {
          const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = response;

          try {
            // Verify payment
            const { data } = await axios.post(
              `${server}/api/ebookverification/${params.id}`,
              {
                razorpay_order_id,
                razorpay_payment_id,
                razorpay_signature,
              },
              {
                headers: {
                  token: localStorage.getItem("token"),
                },
              }
            );

            await fetchUser(); // Refresh user data
            toast.success(data.message);
            setLoading(false);
            navigate(`/ebook-payment-success/${razorpay_payment_id}`);
          } catch (error) {
            toast.error(error.response.data.message);
            setLoading(false);
          }
        },
        theme: {
          color: "#8a4baf",
        },
      };
      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      toast.error("Failed to initiate payment");
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {ebook && (
            <div className="container mx-auto px-4 py-20 lg:py-40">
              <div className="bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden w-full max-w-4xl mx-auto transition-transform transform hover:scale-105 duration-300 ease-in-out">
                <div className="flex flex-col lg:flex-row">
                  <img
                    src={`${server}/${ebook.coverImage}`}
                    alt={ebook.title}
                    className="w-full lg:w-1/2 h-64 lg:h-80 object-cover rounded-lg shadow-md"
                  />
                  <div className="lg:ml-6 flex-1 p-6">
                    <h2 className="text-4xl font-bold mb-4 text-indigo-400">{ebook.title}</h2>
                    <p className="text-lg mb-2 text-gray-400">Author: <span className="font-semibold">{ebook.author}</span></p>
                    <p className="text-lg mb-4 text-gray-300">{ebook.description}</p>
                    <p className="text-xl font-semibold mb-6 text-yellow-500">Price: ₹{ebook.price}</p>

                    <button
                      onClick={handlePurchase}
                      className="w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white rounded-md shadow-lg transition-transform transform hover:scale-105 duration-300"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default EbookDescription;
