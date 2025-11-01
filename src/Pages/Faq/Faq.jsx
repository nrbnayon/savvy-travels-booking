import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const Faq = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const faqData = [
    {
      question: "What is the minimum number of rooms to be a group?",
      answer:
        "In most cities hotels will only quote 9 rooms or more although in some secondary cities they will quote 5 or more.",
    },
    {
      question: "How do group reservations work?",
      answer:
        'We take your request for a group reservation that you have submitted to us and arrange for this request to be sent to multiple hotels matching your budget, star rating range and other requirements. Each hotel will respond individually to your request online in the form of a bid with their group rates, policies and availability. We will notify you via email when new hotel bids arrive so that you can view the full offer details online. Upon viewing your responses from hotels online, you can either decline a bid and ask for a new bid or you can use the "Contact Hotel" button to lock in the rate and finalize all the details regarding your group reservation. Offers made by hotels to you and any bookings you make with them will be subject to the terms and conditions specified by the hotel, including but not limited to: (a) the time frames for which the offers are valid; (b) payment terms; (c) cancellation terms; and (d) incidental charges terms.',
    },
    {
      question: "Help! I need to change/cancel my reservation!",
      answer:
        "Help is on the way: if you booked your travel on the GROUP BOOKING site with one of our providers, then you can go to Bookings and get info on around-the-clock support. If you booked your travel outside of GROUP BOOKING or were redirected from our site to a provider's web page to complete your booking, then you'll need to get in contact with the provider directly. Not sure who your provider is? Our partnering travel providers take your data privacy seriously, which is why GROUP BOOKING doesn't have access to your booking to make changes or resend confirmation emails. If you've been charged already, you can find out who you booked with by checking the payee name against any pending or completed charges. Get in touch with the hotel to find out which travel provider your booking came from. If you used your computer or mobile web browser to book, you can retrace your steps by checking your browser history to see which travel provider's website you were redirected to after GROUP BOOKING.",
    },
    {
      question: "What is the reservation cut-off date?",
      answer:
        "This is the date when the hotel will consider your group a definite booking. At this time, the hotel will need to have final information regarding your group, and confirm any changes such as payment type, number of rooms, etc. If final reservations and additional information are not received by the cut-off date, the hotel may release the room reservation block and rooms will be on a space available basis only.",
    },
    {
      question: "How do I reserve my hotel room?",
      answer:
        'Our reservation process is very simple. After you have submitted your hotel request, you will be notified by email every time a hotel bids on your stay. When you receive a bid that interests you, you may log into your account and click on the "Contact Hotel" button to begin the reservation process.',
    },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-12 pt-8 sm:pt-12 lg:pt-16">
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 text-left">
        Frequently Asked Questions
      </h1>

      <div className="space-y-3 sm:space-y-4 lg:space-y-6">
        {faqData.map((item, index) => (
          <div key={index} className="border-b border-gray-300 overflow-hidden">
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex justify-between items-center"
            >
              <span className="text-base sm:text-lg lg:text-xl font-medium text-[#103928] pr-4">
                {item.question}
              </span>
              <div className="flex-shrink-0">
                {openItems[index] ? (
                  <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500" />
                )}
              </div>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openItems[index]
                  ? "max-h-[700px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-4 sm:px-6 pb-3 sm:pb-4 pt-2">
                <p className="text-sm sm:text-base lg:text-lg text-[#4F5B67] leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
