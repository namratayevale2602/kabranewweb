import React from "react";
import {
  Shield,
  Lock,
  Eye,
  Database,
  UserCheck,
  Bell,
  Mail,
  Globe,
} from "lucide-react";

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "1. Information We Collect",
      icon: <Database size={24} />,
      content:
        "We collect information to provide better services to our customers. The types of information we collect include:",
      subpoints: [
        {
          title: "Personal Information",
          points: ["Name", "Phone number"],
        },
      ],
    },
    {
      title: "2. How We Use Your Information",
      icon: <UserCheck size={24} />,
      content: "We use the collected information for various purposes:",
      subpoints: [
        "To process and fulfill your orders",
        "To communicate about your orders and account",
        "To send promotional offers and updates (with consent)",
        "To improve our website and services",
        "To prevent fraud and ensure security",
        "To comply with legal obligations",
      ],
    },
    {
      title: "3. Information Sharing",
      icon: <Globe size={24} />,
      content:
        "We do not sell your personal information. We may share information with:",
      subpoints: [
        {
          title: "Service Providers",
          points: [
            "Shipping partners for delivery",
            "Payment processors for transactions",
            "Email service providers",
          ],
        },
        {
          title: "Legal Requirements",
          points: [
            "When required by law",
            "To protect our rights",
            "To prevent fraud",
          ],
        },
        {
          title: "Business Transfers",
          points: ["In case of merger or acquisition"],
        },
      ],
    },
    {
      title: "4. Cookies and Tracking",
      icon: <Eye size={24} />,
      content: "We use cookies and similar tracking technologies:",
      subpoints: [
        "Essential cookies for website functionality",
        "Analytics cookies to understand usage patterns",
        "Preference cookies to remember your settings",
        "Advertising cookies for relevant promotions",
      ],
      note: "You can control cookies through your browser settings. However, disabling cookies may affect website functionality.",
    },
    {
      title: "5. Data Security",
      icon: <Lock size={24} />,
      content: "We implement appropriate security measures:",
      subpoints: [
        "SSL encryption for all transactions",
        "Secure payment gateways",
        "Regular security audits",
        "Access controls and authentication",
        "Employee training on data protection",
      ],
    },
    {
      title: "6. Your Rights",
      icon: <Shield size={24} />,
      content: "You have the following rights regarding your personal data:",
      subpoints: [
        "Right to access your personal information",
        "Right to correct inaccurate data",
        "Right to delete your data",
        "Right to object to processing",
        "Right to data portability",
        "Right to withdraw consent",
      ],
    },
    {
      title: "7. Marketing Communications",
      icon: <Mail size={24} />,
      content: "We may send promotional communications if you have opted in:",
      subpoints: [
        "New product announcements",
        "Special offers and discounts",
        "Seasonal promotions",
        "Newsletters and updates",
      ],
      note: "You can unsubscribe at any time using the link in our emails or by contacting us.",
    },
    {
      title: "8. Data Retention",
      icon: <Database size={24} />,
      content: "We retain your personal information only as long as necessary:",
      subpoints: [
        "Order information: 7 years for tax purposes",
        "Account information: Until account deletion",
        "Marketing preferences: Until withdrawal of consent",
        "Technical logs: 1 year for security",
      ],
    },
    {
      title: "9. Third-Party Links",
      icon: <Globe size={24} />,
      content:
        "Our website may contain links to third-party websites. We are not responsible for their privacy practices. We encourage you to read their privacy policies.",
    },
    {
      title: "10. Children's Privacy",
      icon: <UserCheck size={24} />,
      content:
        "Our services are not directed to individuals under 18. We do not knowingly collect personal information from children. If you are a parent and believe your child has provided us with personal information, please contact us.",
    },
    {
      title: "11. International Transfers",
      icon: <Globe size={24} />,
      content:
        "If you are accessing our website from outside India, please note that your information may be transferred to, stored, and processed in India where our servers are located.",
    },
    {
      title: "12. Updates to Privacy Policy",
      icon: <Bell size={24} />,
      content:
        "We may update this privacy policy periodically. We will notify you of any changes by posting the new policy on this page and updating the 'Last Updated' date.",
    },
    {
      title: "13. Contact Information",
      icon: <Mail size={24} />,
      content:
        "For privacy-related inquiries, please contact our Data Protection Officer:",
      contact: [
        "Email: connect@kabraemporium.com",
        "Phone: +91 98905 33709",
        "Address: PLOT NO -380/09, 657/B/380, PADMAVISHWA CENTER, OLD PANDIT COLONY, NASHIK - 422002",
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
                Privacy Policy
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Introduction */}
        <div className=" rounded-2xl p-8 mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Introduction
          </h2>
          <div className="space-y-4 text-gray-700 text-lg">
            <p>
              Kabra Fashion ("we," "our," or "us") is committed to protecting
              your privacy. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you visit our
              website www.kabrafashion.com or make a purchase from us.
            </p>
            <p>
              We respect your privacy and are committed to protecting personally
              identifiable information you may provide us through our services.
              We have adopted this privacy policy to explain what information
              may be collected, how we use this information, and under what
              circumstances we may disclose the information to third parties.
            </p>
          </div>
        </div>

        {/* Policy Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <div key={index} className="rounded-2xl overflow-hidden">
              <div className="p-8">
                <div className="flex items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {section.title}
                    </h3>
                    <p className="text-gray-700 text-lg mb-4">
                      {section.content}
                    </p>

                    {Array.isArray(section.subpoints) ? (
                      <div className="space-y-4">
                        {section.subpoints.map((point, idx) => {
                          if (typeof point === "string") {
                            return (
                              <div key={idx} className="flex items-start">
                                <span className="text-blue-500 mr-2 mt-1">
                                  •
                                </span>
                                <span className="text-gray-600">{point}</span>
                              </div>
                            );
                          } else {
                            return (
                              <div key={idx} className="ml-4">
                                <h4 className="font-bold text-gray-800 mb-2">
                                  {point.title}:
                                </h4>
                                <ul className="space-y-1 ml-4">
                                  {point.points.map((subpoint, subIdx) => (
                                    <li key={subIdx} className="text-gray-600">
                                      • {subpoint}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            );
                          }
                        })}
                      </div>
                    ) : null}

                    {section.contact && (
                      <div className="mt-4 space-y-2">
                        {section.contact.map((contact, idx) => (
                          <div key={idx} className="text-gray-600">
                            {contact}
                          </div>
                        ))}
                      </div>
                    )}

                    {section.note && (
                      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <p className="text-blue-700 italic">{section.note}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
