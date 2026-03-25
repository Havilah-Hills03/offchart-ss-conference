import React, { useState } from "react";
import { usePaystackPayment } from "react-paystack";

const Modal: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    tickets: 1,
  });

  const amount = form.tickets * 5000 * 100; // ₦5000 per ticket (Paystack uses kobo)

  const config = {
    reference: new Date().getTime().toString(),
    email: form.email,
    amount: amount,
    publicKey: "pk_test_acbed8df19f8cf1cad803f92fdcf80ef37df06ac", 
  };

  const onSuccess = (reference: any) => {
    console.log("Payment successful:", reference);
    alert("Payment successful!");
  };

  const onClose = () => {
    console.log("Payment closed");
  };

  const initializePayment = usePaystackPayment(config);

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handlePayment = (e: any) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.phone) {
      alert("Please fill all fields");
      return;
    }

  initializePayment({
  onSuccess,
  onClose,
});
  };

  return (
    <section className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="w-[90%] max-w-md bg-white rounded-2xl shadow-2xl p-6 relative">
        
        <h2 className="text-xl font-semibold mb-6 text-center">
          Get Your Ticket
        </h2>

        <form onSubmit={handlePayment} className="space-y-4">

          <input
            type="text"
            name="name"
            placeholder="Full Name *"
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address *"
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number *"
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
          />

          <select
            name="tickets"
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
          >
            <option value="1">1 Ticket</option>
            <option value="2">2 Tickets</option>
            <option value="3">3 Tickets</option>
          </select>

          <button
            type="submit"
            className="w-full bg-red-600 text-white font-semibold py-3 rounded-lg"
          >
            Pay ₦{form.tickets * 5000}
          </button>

          <p className="text-xs text-gray-500 text-center">
            You'll be redirected to Paystack for secure payment processing.
          </p>
        </form>
      </div>
    </section>
  );
};

export default Modal;