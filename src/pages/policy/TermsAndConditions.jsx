import React from "react";
import { Shield, FileText, Lock, AlertCircle } from "lucide-react";

const TermsAndConditions = () => {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content:
        "By accessing and using Kabra Fashion's website (www.kabrafashion.com) and services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our services.",
    },
    {
      title: "2. Account Registration",
      content:
        "To place orders, you may need to create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You must provide accurate and complete information.",
    },
    {
      title: "3. Products and Pricing",
      content:
        "All products are handcrafted and may have slight variations. We reserve the right to modify prices without prior notice. Product images are for reference only and actual colors may vary slightly due to photographic lighting and screen settings.",
      subpoints: [
        "Prices are in Indian Rupees (₹) and inclusive of GST",
        "Additional shipping charges may apply",
        "Customization charges are extra",
        "All products are subject to availability",
      ],
    },
    {
      title: "4. Orders and Payments",
      content:
        "By placing an order, you make an offer to purchase the selected products. We reserve the right to accept or reject orders for any reason. We accept various payment methods including credit/debit cards, UPI, net banking, and cash on delivery.",
      subpoints: [
        "Order confirmation will be sent via email/SMS",
        "Payment must be completed before shipment",
        "For COD orders, cash payment is required upon delivery",
        "International orders require full payment upfront",
      ],
    },
    {
      title: "5. Shipping and Delivery",
      content:
        "We ship across India and internationally. Delivery times are estimates and may vary based on location, customs clearance, and other factors. We are not responsible for delays caused by third-party shipping services.",
      subpoints: [
        "Standard delivery: 5-7 business days within India",
        "Express delivery: 2-3 business days (extra charges apply)",
        "International shipping: 10-15 business days",
        "Remote areas may take additional time",
      ],
    },
    {
      title: "6. Returns and Exchanges",
      content: "We offer returns and exchanges under the following conditions:",
      subpoints: [
        "Return request must be made within 3 days of delivery",
        "Products must be unused, unwashed, and in original condition",
        "Original tags and packaging must be intact",
        "Customized products cannot be returned",
        "Return shipping charges are the customer's responsibility",
        "Refunds will be processed within 7-10 business days",
      ],
    },
    {
      title: "7. Cancellation Policy",
      content: "Orders can be cancelled under the following conditions:",
      subpoints: [
        "Before shipment: Full refund",
        "After shipment: Return policy applies",
        "Custom orders cannot be cancelled once production starts",
        "International orders cannot be cancelled after processing",
      ],
    },
    {
      title: "8. Intellectual Property",
      content:
        "All content on this website including text, graphics, logos, images, and software is the property of Kabra Fashion and is protected by Indian copyright laws. Unauthorized use is strictly prohibited.",
    },
    {
      title: "9. Limitation of Liability",
      content:
        "Kabra Fashion shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our products or services. Our total liability shall not exceed the purchase price of the product.",
    },
    {
      title: "10. Warranties",
      content: "We provide the following warranties:",
      subpoints: [
        "Quality guarantee on all products",
        "Manufacturing defects covered for 30 days",
        "Zari and embroidery quality guarantee",
        "Color fastness guarantee on dyed products",
      ],
    },
    {
      title: "11. Prohibited Activities",
      content: "You agree not to:",
      subpoints: [
        "Use the website for any illegal purpose",
        "Attempt to gain unauthorized access to our systems",
        "Interfere with the website's functionality",
        "Upload malicious content or viruses",
        "Copy or resell our products without permission",
      ],
    },
    {
      title: "12. Force Majeure",
      content:
        "We shall not be liable for delays or failures in performance resulting from circumstances beyond our reasonable control including but not limited to natural disasters, government actions, pandemics, strikes, or internet failures.",
    },
    {
      title: "13. Governing Law",
      content:
        "These terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Surat, Gujarat.",
    },
    {
      title: "14. Amendments",
      content:
        "We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Continued use of the website constitutes acceptance of modified terms.",
    },
    {
      title: "15. Contact Information",
      content:
        "For any questions regarding these Terms and Conditions, please contact us at:",
      subpoints: [
        "Email: connect@kabraemporium.com",
        "Phone: +91 98905 33709",
        "Address: PLOT NO -380/09, 657/B/380, PADMAVISHWA CENTER, OLD PANDIT COLONY, NASHIK - 422002",
        "Business Hours: 10 AM - 7 PM (Monday to Saturday)",
      ],
    },
  ];

  return (
    <div className="min-h-screen pb-5">
      {/* Hero Section */}

      <div className="py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2 py-5 md:py-2">
          <div className="flex items-center space-x-4 mb-2">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
                Terms & Conditions
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Terms Sections */}
        <div className="rounded-2xl overflow-hidden">
          <div className="">
            {sections.map((section, index) => (
              <div key={index} className="p-6 md:p-8">
                <p className="text-gray-700 mb-4 text-lg">{section.content}</p>

                {section.subpoints && (
                  <ul className="space-y-2 ml-4">
                    {section.subpoints.map((point, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-[#eb8749] mr-2 mt-1">•</span>
                        <span className="text-gray-600">{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
