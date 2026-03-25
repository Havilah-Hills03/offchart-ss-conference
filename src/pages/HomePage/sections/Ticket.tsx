import React, { useState } from "react";
import offChartPattern from "../../../assets/offchart-pattern.png";
import { usePaystackPayment } from "react-paystack";

// Define tickets with numeric prices
const tickets = [
  {
    id: 1,
    name: "Founder Pass",
    price: 20000, // Naira
    after: 30000,
    features: [
      "Everything in Guest Pass +",
      "Pass to Premium Sessions",
      "Networking Lounge Access",
      "Lunch & Tea Breaks (2 Days)",
      "Digital Resource Pack",
      "Conference Merch",
    ],
    button: "Register Founder Pass",
    highlight: true,
  },
  {
    id: 2,
    name: "Investor Pass",
    price: 100000,
    after: 120000,
    features: [
      "Everything in Founder Pass +",
      "Closed-Door Capital Sessions & LP-GP Roundtable",
      "Curated Deal Book",
      "Private Investor Networking",
      "Priority Seating & Concierge Introductions",
    ],
    button: "Register Investor Pass",
    highlight: false,
  },
  {
    id: 3,
    name: "Executive Pass",
    price: 250000,
    after: 300000,
    features: [
      "Everything in Investor Pass +",
      "Private Speaker Meet & Greet",
      "Curated Deal Book",
      "VIP Dinner (Invite Only)",
      "Front Row Reserved Seating",
      "Media Access",
    ],
    button: "Register Executive Pass",
    highlight: false,
  },
];

// Modal component
const Modal: React.FC<{
  ticket: typeof tickets[0];
  onClose: () => void;
}> = ({ ticket, onClose }) => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", quantity: 1 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const value = e.target.name === "quantity" ? Number(e.target.value) : e.target.value;
    setForm({ ...form, [e.target.name]: value });
  };

  const config = {
    reference: new Date().getTime().toString(),
    email: form.email,
    amount: ticket.price * (form.quantity || 1) * 100, // kobo
    publicKey: "pk_test_acbed8df19f8cf1cad803f92fdcf80ef37df06ac",  
  };

  const onSuccess = (reference: any) => {
    alert("Payment Successful! Reference: " + reference.reference);
    onClose();
  };

  const onClosePaystack = () => {
    console.log("Payment closed");
    onClose();
  };

  const initializePayment = usePaystackPayment(config);

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) {
      alert("Please fill all fields");
      return;
    }
    initializePayment({ onSuccess, onClose: onClosePaystack });
  };

  return (
    <section className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="w-[90%] max-w-md bg-white rounded-2xl shadow-2xl p-6 relative">
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-black text-xl"
          onClick={onClose}
        >
          ✕
        </button>

        <h2 className="text-xl font-semibold mb-6 text-center">{ticket.name}</h2>
        <p className="text-center text-gray-700 text-lg mb-4">
          ₦{ticket.price.toLocaleString()} per ticket
        </p>

        <form className="space-y-4" onSubmit={handlePayment}>
          <input
            type="text"
            name="name"
            placeholder="Full Name *"
            value={form.name}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address *"
            value={form.email}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number *"
            value={form.phone}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
          />

          {/* Quantity selector */}
          <div>
            <label className="text-sm font-medium block mb-1">Number of Tickets *</label>
            <select
              name="quantity"
              value={form.quantity}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2  "
            >
              {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                <option key={num} value={num}>
                  {num} {num === 1 ? "Ticket" : "Tickets"}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-[#13EC37] text-white font-semibold py-3 rounded-lg  transition"
          >
            Pay ₦{(ticket.price * (form.quantity || 1)).toLocaleString()}
          </button>
        </form>
      </div>
    </section>
  );
};

// Ticket page
const Ticket: React.FC = () => {
  const [selectedTicket, setSelectedTicket] = useState<typeof tickets[0] | null>(null);

  return (
    <section className="bg-[#074922CC] relative pt-24 text-center flex flex-col items-center" id="ticket">
      <h2 className="text-[#13EC37] text-4xl lg:text-5xl font-bold mb-4">Tickets</h2>
      <p className="text-white max-w-3xl mb-16 px-6">
        OffChart NXT introduces a tiered ticket structure designed to create access, connection, and participation for leaders shaping the future of technology and innovation.
      </p>

      {/* Ticket Cards */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 px-10 lg:px-16 mb-4 pb-4">
        {tickets.map((ticket) => (
          <div key={ticket.id} className="relative lg:w-[280px] group">
            {/* Offset Background */}
            <div
              className={`absolute inset-0 -translate-x-2 h-[492px] offset-bg-box rounded-xl border transition-colors duration-300 ${
                ticket.highlight ? "bg-[#FDB813]" : "bg-[#13EC37]"
              } group-hover:bg-[#FDB813]`}
            ></div>

            {/* Main Card */}
            <div
              className={`main-card relative rounded-xl p-6 bg-[#062414] mb-6 border transition-all duration-300 hover:shadow-[0_0_10px_0_#FDB813CC] h-[492px] flex flex-col justify-center items-start ${
                ticket.highlight ? "shadow-[0_0_10px_0_#FDB813CC]" : "border-[#011409]"
              }`}
            >
              <div className="w-full text-center">
                <h6 className="text-white text-xl font-semibold mb-2">{ticket.name}</h6>
                <p className="text-white text-4xl font-semibold mb-2">₦{ticket.price.toLocaleString()}</p>
                <p className="text-[#FDB813] text-sm mb-4">₦{ticket.after.toLocaleString()} after June 30, 2026</p>
              </div>

              {/* Features */}
              <ul className="space-y-2 mb-4 text-left pl-0">
                {ticket.features.map((feature, index) => (
                  <li key={index} className="text-white text-[15px] flex items-center gap-1">
                    <span className="text-[#D9D9D9] text-2xl">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button
                onClick={() => setSelectedTicket(ticket)}
                className="w-full cursor-pointer py-2 rounded-[15px] font-bold border border-[#13EC37] text-white hover:bg-[#13EC37] hover:text-[#062414] transition btn-border"
              >
                {ticket.button}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Sections */}
      <div className="text-center flex justify-center items-center gap-10 mb-10 pb-10 hero-btn">
        <h6 className="text-white text-[16px]">
          <a href="">
            <span className="text-[#13EC37] font-bold underline text-lg">Student?</span>
            <br /> Get free pass before June 30th
          </a>
        </h6>
        <h6 className="text-white text-[16px]">
          <a href="">
            <span className="text-[#FDB813] font-bold underline text-lg">Journalist?</span>
            <br /> Get pass here
          </a>
        </h6>
      </div>

      <div className="w-full">
        <img src={offChartPattern} className="w-full partner" alt="" />
      </div>

      {/* Modal */}
      {selectedTicket && <Modal ticket={selectedTicket} onClose={() => setSelectedTicket(null)} />}
    </section>
  );
};

export default Ticket;