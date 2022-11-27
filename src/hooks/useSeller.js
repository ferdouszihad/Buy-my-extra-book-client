import { useEffect, useState } from "react";

const useSeller = (email) => {
  const [isSeller, setIsSeller] = useState(false);
  const [isSellerLoading, setIsSellerLoading] = useState(true);

  useEffect(() => {
    if (email) {
      fetch(`https://buymy-book-server.vercel.app/user/${email}`)
        .then((res) => res.json())
        .then((user) => {
          console.log(user);
          if (user.role === "seller") {
            setIsSeller(true);
            setIsSellerLoading(false);
          }
          setIsSellerLoading(false);
        });
    }
  }, [email]);

  return [isSeller, isSellerLoading];
};

export default useSeller;
