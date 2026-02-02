// ContactPage.jsx
import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  XCircle,
  Building,
  Users,
  MessageSquare,
  Navigation,
  Map,
  Menu,
} from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  });

  const [activeMap, setActiveMap] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showAllAddresses, setShowAllAddresses] = useState(false);

  const addresses = [
    {
      id: 0,
      title: "Pandit Colony Showroom",
      icon: <Building className="w-5 h-5" />,
      address: [
        "Padma-vishwa Centre Old Pandit Colony Sharanpur Road, opp. Rajiv Gandhi Bhavan, Nashik, Maharashtra 422002",
      ],
      phone: "+91 98905 33709",
      email: "connect@kabraemporium.com",
      timings: "Mon-Sat: 10:00 AM - 7:00 PM",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.7852832528936!2d73.76411747497926!3d19.997212181406668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb84b8a16f99%3A0x2cf5d5ac4ce6e90c!2sNashik%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
      coordinates: "19.9972° N, 73.7907° E",
    },
    {
      id: 1,
      title: "Pandit Colony Showroom",
      icon: <MapPin className="w-5 h-5" />,
      address: [
        "Siddhi-Pooja Business Center, Sharanpur Rd, near Lions Club Garden, New Pandit Colony, Nashik, Maharashtra 422002",
      ],
      phone: "+91 98905 33709",
      email: "connect@kabraemporium.com",
      timings: "Mon-Sat: 10:00 AM - 9:00 PM, Sun: 11:00 AM - 7:00 PM",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.261122979978!2d72.828142974978!3d19.054387482069256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c96a34dc4401%3A0x3f4a2cd96e5c9c0!2sBandra%20West%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
      coordinates: "19.0544° N, 72.8281° E",
    },
    {
      id: 2,
      title: "Pandit Colony Showroom",
      icon: <Navigation className="w-5 h-5" />,
      address: [
        "1st Floor, Siddhi Pooja Business Center, Office No, 6 & 7, Sharanpur Rd, near Lions Club Garden, New Pandit Colony, Nashik, Maharashtra 422002",
      ],
      phone: "+91 98905 33709",
      email: "connect@kabraemporium.com",
      timings: "Mon-Sat: 10:00 AM - 8:00 PM",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.7852832528936!2d73.76411747497926!3d19.997212181406668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb84b8a16f99%3A0x2cf5d5ac4ce6e90c!2sNashik%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
      coordinates: "19.9972° N, 73.7907° E",
    },
  ];

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Call Us",
      details: ["+91 98905 33709", "+91 97634 04340"],
      color: "bg-gradient-to-br from-orange-500 to-amber-500",
      bgColor: "bg-orange-50",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email Us",
      details: ["connect@kabraemporium.com"],
      color: "bg-gradient-to-br from-orange-500 to-amber-500",
      bgColor: "bg-orange-50",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Working Hours",
      details: ["All Showrooms:", "Mon-Sat: 10:00 AM - 7:00 PM"],
      color: "bg-gradient-to-br from-orange-500 to-amber-500",
      bgColor: "bg-orange-50",
    },
  ];

  const stats = [
    {
      icon: <Building className="w-8 h-8" />,
      value: "12+",
      label: "Years Experience",
    },
    {
      icon: <Users className="w-8 h-8" />,
      value: "5000+",
      label: "Happy Clients",
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      value: "24/7",
      label: "Support",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setFormStatus({
        submitted: true,
        success: true,
        message:
          "Your message has been sent successfully! We'll get back to you soon.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      setTimeout(() => {
        setFormStatus({
          submitted: false,
          success: false,
          message: "",
        });
      }, 5000);
    } catch (error) {
      setFormStatus({
        submitted: true,
        success: false,
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAddressClick = (index) => {
    setActiveMap(index);
  };

  return (
    <div className="min-h-screen py-4 px-2 sm:px-4 lg:px-8 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header with gradient */}
        <div className="text-center mb-6 sm:mb-10 relative px-2">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-amber-500/10 rounded-3xl blur-3xl -z-10" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-600 px-2">
            Get in Touch
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
            Visit us at any of our locations or reach out through any of the
            following channels.
          </p>
        </div>

        {/* Mobile Address Selector */}
        <div className="lg:hidden mb-4 px-2">
          <div className="bg-white rounded-xl shadow-lg p-3">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-gray-900 text-lg">
                Select Location
              </h3>
              <Menu className="w-5 h-5 text-gray-600" />
            </div>
            <div className="space-y-2">
              {addresses.map((address, index) => (
                <button
                  key={address.id}
                  onClick={() => handleAddressClick(index)}
                  className={`w-full text-left p-3 rounded-lg transition-all duration-300 ${
                    activeMap === index
                      ? "bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200"
                      : "bg-gray-50 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  <div className="flex items-center">
                    <div
                      className={`p-1.5 rounded-lg mr-3 ${
                        activeMap === index
                          ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white"
                          : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      {address.icon}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">
                        {address.title}
                      </p>
                      <p className="text-sm text-gray-500 truncate">
                        {address.address[2]}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 px-2">
          {/* Left Column - Contact Info */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            {/* Multiple Addresses Section */}
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg p-4 sm:p-6 lg:p-8 border border-gray-100">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-8 flex items-center">
                <div className="w-1.5 sm:w-2 h-6 sm:h-8 bg-gradient-to-b from-orange-500 to-amber-500 rounded-full mr-2 sm:mr-3"></div>
                Our Locations
              </h2>

              {/* Address Tabs - Desktop Only */}
              <div className="hidden lg:flex space-x-2 mb-6">
                {addresses.map((address, index) => (
                  <button
                    key={address.id}
                    onClick={() => handleAddressClick(index)}
                    className={`px-4 py-2.5 rounded-lg font-medium text-sm whitespace-nowrap transition-all duration-300 ${
                      activeMap === index
                        ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {address.title}
                  </button>
                ))}
              </div>

              {/* Selected Address Details */}
              <div className="mb-4 sm:mb-6 lg:mb-8">
                <div className="flex items-start mb-3 sm:mb-4">
                  <div className="p-1.5 sm:p-2 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 text-white mr-3">
                    {addresses[activeMap].icon}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">
                      {addresses[activeMap].title}
                    </h3>
                    <div className="space-y-0.5">
                      {addresses[activeMap].address.map((line, idx) => (
                        <p
                          key={idx}
                          className="text-gray-700 text-sm sm:text-base"
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 sm:gap-3 mt-3">
                  <div className="bg-gray-50 p-2 sm:p-3 rounded-lg">
                    <p className="text-xs sm:text-sm text-gray-500 mb-0.5">
                      Phone
                    </p>
                    <p className="font-medium text-gray-900 text-sm sm:text-base">
                      {addresses[activeMap].phone}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-2 sm:p-3 rounded-lg">
                    <p className="text-xs sm:text-sm text-gray-500 mb-0.5">
                      Email
                    </p>
                    <p className="font-medium text-gray-900 text-sm sm:text-base">
                      {addresses[activeMap].email}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-2 sm:p-3 rounded-lg col-span-2">
                    <p className="text-xs sm:text-sm text-gray-500 mb-0.5">
                      Timings
                    </p>
                    <p className="font-medium text-gray-900 text-sm sm:text-base">
                      {addresses[activeMap].timings}
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Section */}
              <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-100">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 sm:mb-4">
                  <h3 className="font-bold text-gray-900 text-base sm:text-lg flex items-center mb-1 sm:mb-0">
                    <Map className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-orange-600" />
                    Location on Map
                  </h3>
                  <div className="text-xs sm:text-sm text-gray-500 flex items-center">
                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                    {addresses[activeMap].coordinates}
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg h-48 sm:h-56 lg:h-64">
                  <iframe
                    src={addresses[activeMap].mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Map for ${addresses[activeMap].title}`}
                    className="rounded-xl sm:rounded-2xl"
                  />
                  <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 sm:px-3 sm:py-1 shadow-md">
                    <span className="text-gray-900 text-xs sm:text-sm font-medium">
                      {addresses[activeMap].title.split(" ")[0]}
                    </span>
                  </div>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addresses[activeMap].address.join(", "))}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg font-medium text-xs sm:text-sm flex items-center shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Navigation className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg p-4 sm:p-6 lg:p-8 border border-gray-100 lg:sticky lg:top-8">
              <div className="mb-4 sm:mb-6 lg:mb-8">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-3 flex items-center">
                  <div className="w-1.5 sm:w-2 h-6 sm:h-8 bg-gradient-to-b from-orange-500 to-amber-500 rounded-full mr-2 sm:mr-3"></div>
                  Send us a Message
                </h2>
                <p className="text-gray-600 text-sm sm:text-base">
                  Fill out the form below and we'll get back to you as soon as
                  possible.
                </p>
              </div>

              {/* Form Status Message */}
              {formStatus.submitted && (
                <div
                  className={`mb-4 sm:mb-6 lg:mb-8 p-3 sm:p-4 lg:p-5 rounded-lg sm:rounded-xl border ${
                    formStatus.success
                      ? "bg-gradient-to-r from-green-50 to-emerald-50 border-green-200 text-green-800"
                      : "bg-gradient-to-r from-red-50 to-rose-50 border-red-200 text-red-800"
                  } animate-in slide-in-from-top`}
                >
                  <div className="flex items-start">
                    {formStatus.success ? (
                      <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                    ) : (
                      <XCircle className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                    )}
                    <p className="font-medium text-sm sm:text-base">
                      {formStatus.message}
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="space-y-1 sm:space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full Name *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3.5 bg-gray-50 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-orange-500/50 focus:border-orange-400 transition-all duration-200 placeholder-gray-400 text-sm sm:text-base"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                  <div className="space-y-1 sm:space-y-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email Address *
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3.5 bg-gray-50 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-orange-500/50 focus:border-orange-400 transition-all duration-200 placeholder-gray-400 text-sm sm:text-base"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-1 sm:space-y-2">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Contact Number *
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3.5 bg-gray-50 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-orange-500/50 focus:border-orange-400 transition-all duration-200 placeholder-gray-400 text-sm sm:text-base"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-1 sm:space-y-2">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Select Location
                  </label>
                  <div className="relative">
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3.5 bg-gray-50 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-orange-500/50 focus:border-orange-400 transition-all duration-200 text-gray-900 appearance-none cursor-pointer text-sm sm:text-base"
                    >
                      <option value="">Select preferred location</option>
                      <option value="pandit-colony">
                        Pandit Colony - Nashik
                      </option>
                      <option value="mumbai">Mumbai Showroom</option>
                      <option value="nashik-road">Nashik Road Showroom</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:pr-3 pointer-events-none">
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="space-y-1 sm:space-y-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message *
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3.5 bg-gray-50 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-orange-500/50 focus:border-orange-400 transition-all duration-200 placeholder-gray-400 resize-none text-sm sm:text-base"
                      placeholder="Please provide details about your inquiry..."
                    />
                  </div>
                </div>

                <div className="pt-2 sm:pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full inline-flex items-center justify-center px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 text-base sm:text-lg font-semibold rounded-lg sm:rounded-xl shadow-lg transition-all duration-300 ${
                      isSubmitting
                        ? "bg-gradient-to-r from-gray-400 to-gray-500 cursor-not-allowed"
                        : "bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600"
                    } text-white focus:outline-none focus:ring-3 focus:ring-orange-500/30`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                  <p className="text-center text-gray-500 text-xs sm:text-sm mt-2">
                    We typically respond within 24 hours
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* Contact Information */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg p-4 sm:p-6 mt-5 lg:p-8 border border-gray-100">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-8 flex items-center">
            <div className="w-1.5 sm:w-2 h-6 sm:h-8 bg-gradient-to-b from-orange-500 to-amber-500 rounded-full mr-2 sm:mr-3"></div>
            Contact Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className={`${item.bgColor} rounded-xl sm:rounded-2xl p-2 sm:p-3 transition-all duration-300 hover:shadow-md`}
              >
                <div className="flex items-start space-x-3 sm:space-x-4 lg:space-x-5">
                  <div
                    className={`p-1 sm:p-1.5 rounded-xl sm:rounded-2xl text-white ${item.color} shadow-md`}
                  >
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="font-bold text-gray-900 text-base sm:text-lg mb-1 sm:mb-2">
                      {item.title}
                    </h2>
                    {item.details.map((detail, idx) => (
                      <p
                        key={idx}
                        className="text-gray-700 text-sm sm:text-base mb-0.5 sm:mb-1 last:mb-0 break-words"
                      >
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Stats Section */}
        <div className="mt-8 sm:mt-12 lg:mt-16 px-2">
          <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 text-white">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-2 sm:p-4">
                  <div className="flex justify-center mb-2 sm:mb-3 lg:mb-4">
                    <div className="p-2 sm:p-3 bg-white/20 rounded-full">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm sm:text-base lg:text-lg opacity-90">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
