import React, { useEffect } from "react";

interface ProductModalProps {
  show: boolean;
  handleClose: () => void;
  title: string;
  price: string;
  features: string[];
  image: string;
  link: string;
}

const ProductModal: React.FC<ProductModalProps> = ({
  show,
  handleClose,
  title,
  price,
  features,
  image,
  link,
}) => {
  useEffect(() => {
    if (show) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";

    const esc = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };

    window.addEventListener("keydown", esc);
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", esc);
    };
  }, [show, handleClose]);

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4"
      onClick={handleClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl relative overflow-hidden"
      >
        {/* Close */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-5 text-2xl font-bold text-[#333]  z-10"
        >
          ✕
        </button>

        <div className="grid md:grid-cols-2">
          {/* LEFT — IMAGE */}
          <div className=" flex items-center justify-center p-6">
            <img
              src={image}
              alt={title}
              className="max-h-[420px] object-contain rounded-xl"
            />
          </div>

          {/* RIGHT — DETAILS */}
          <div className="p-8 flex flex-col">
            <h5 className="text-2xl font-semibold text-[#333] mb-2">{title}</h5>

            <p className="text-2xl font-semibold text-[#88CA4E] mb-4">
              {price}
            </p>

            <p className="text-[#333] mb-4">Available</p>

            <h4 className="font-semibold text-lg mb-2">What’s Included:</h4>

            <ul className="space-y-2 mb-6">
              {features.map((f, i) => (
                <li key={i} className="flex items-start gap-2 text-[#333]">
                  <span className="text-[#88CA4E] font-bold">✔</span> {f}
                </li>
              ))}
            </ul>

            <button
              onClick={() => window.open(link, "_blank")}
              className="mt-auto bg-[#88CA4E] h text-white font-semibold py-3 rounded-lg text-lg transition"
            >
              Proceed to Booking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
