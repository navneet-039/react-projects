import React, { useEffect, useState } from "react";

export default function ImageLoader({ url, limit, skip }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [count, setCount] = useState(0);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `${url}?limit=${limit}&skip=${count === 0 ? 0 : count * 20}`
      );
      const data = await response.json();

      if (data && data.products) {
        setProducts(data.products);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  if (loading) {
    return <div className="items-center font-inter text-richblack-900">Loading...</div>;
  }

  if (error) {
    return <div className="items-center font-inter text-red-500">Error: {error}</div>;
  }

  return (
  <div className="text-center mx-auto max-w-maxContent m-3 ">
    <div className="grid grid-cols-4 gap-2 text-center">
      {products.length > 0 &&
        products.map((item, index) => (
          <div key={index} className="items-center border-2">
            <img src={item.images[0]} alt={item.title}   />
            <p>{item.title}</p>
            
            
          </div>
        ))}
    </div>

    {/* Move button outside grid to center it */}
    <div className="mt-4 flex justify-center">
      {count === 5 ? (
        <p>You reached your limit</p>
      ) : (
        <button
          onClick={() => setCount(count + 1)}
          className="bg-richblack-700 text-richblack-5 rounded-md h-[50px] w-[150px]"
        >
          Load more
        </button>
      )}
    </div>
  </div>
);
}
   