import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  ShoppingBag,
  User,
  Heart,
  Search,
  ChevronRight,
  Home,
  ContactIcon,
  Info,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { kabralogo } from "../../assets/index";

const Navbar = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Navigation items with dropdown structure
  const navItems = [
    {
      type: "link",
      label: "Home",
      icon: <Home size={18} />,
      action: () => {
        navigate("/");
        setIsSidebarOpen(false);
      },
    },
    {
      type: "link",
      label: "About Us",
      icon: <Info size={18} />,
      action: () => {
        navigate("/about");
        setIsSidebarOpen(false);
      },
    },
    {
      type: "link",
      label: "Contact Us",
      icon: <ContactIcon size={18} />,
      action: () => {
        navigate("/contact");
        setIsSidebarOpen(false);
      },
    },
    {
      type: "dropdown",
      label: "Categories",
      icon: <Menu size={18} />,
      subItems: [
        {
          label: "Sarees",
          subItems: [
            {
              label: "Kanchipuram Sarees",
              subItems: [
                {
                  label: "Kanchipuram Pure Silk Sarees",
                  slug: "kanchipuram-pure-silk",
                },
                {
                  label: "Kanchipuram Pure Half Fine Jari",
                  slug: "kanchipuram-half-fine-jari",
                },
              ],
            },
            {
              label: "Banarasi Sarees",
              subItems: [
                { label: "Banarasi Silk Sarees", slug: "banarasi-silk" },
                { label: "Banarasi Kadhwa Sarees", slug: "banarasi-kadhwa" },
                { label: "Banarasi Tussar Weaving", slug: "banarasi-tussar" },
                { label: "Banarasi Organza", slug: "banarasi-organza" },
                {
                  label: "Banarasi Georgette Saree",
                  slug: "banarasi-georgette",
                },
                { label: "Banarasi Tissue Saree", slug: "banarasi-tissue" },
              ],
            },
            {
              label: "Designer Sarees",
              subItems: [
                {
                  label: "Pure Designer Embroidery Saree",
                  slug: "pure-designer-embroidery",
                },
                { label: "Fancy Sarees", slug: "fancy-sarees" },
                { label: "Organza Sarees", slug: "organza-sarees" },
                { label: "Bandhani Sarees", slug: "bandhani-sarees" },
                { label: "Fancy Weaving Saree", slug: "fancy-weaving" },
                { label: "Ready Blouse Sarees", slug: "ready-blouse" },
                {
                  label: "Pure Tussar Embroidery Sarees",
                  slug: "pure-tussar-embroidery",
                },
                { label: "Ready To Wear Saree", slug: "ready-to-wear" },
                {
                  label: "Handloom Silk Embroidery Sarees",
                  slug: "handloom-silk-embroidery",
                },
              ],
            },
            {
              label: "Pure Handloom Silk Saree",
              subItems: [
                { label: "Handloom Sarees", slug: "handloom-sarees" },
                { label: "Gadwal Silk", slug: "gadwal-silk" },
                { label: "Paithani Sarees", slug: "paithani-sarees" },
                { label: "Chanderi Saree", slug: "chanderi-saree" },
                { label: "Ikkat & Patola Saree", slug: "ikkat-patola" },
                { label: "Keta Silk Saree", slug: "keta-silk" },
                { label: "Patan Patola", slug: "patan-patola" },
                { label: "Pashmina Sarees", slug: "pashmina-sarees" },
              ],
            },
            {
              label: "Printed Saree",
              subItems: [
                { label: "Designer Printed Saree", slug: "designer-printed" },
                { label: "Tussar Printed Saree", slug: "tussar-printed" },
                { label: "Kalamkari Silk Saree", slug: "kalamkari-silk" },
                { label: "Silk Printed Saree", slug: "silk-printed" },
              ],
            },
            {
              label: "Occasion",
              subItems: [
                { label: "Wedding Saree", slug: "wedding-saree" },
                { label: "Festive Wear Saree", slug: "festive-wear" },
                { label: "Party Wear Saree", slug: "party-wear-saree" },
                { label: "Mehendi Sarees", slug: "mehendi-sarees" },
                { label: "Reception sarees", slug: "reception-sarees" },
                { label: "Haldi Sarees", slug: "haldi-sarees" },
              ],
            },
          ],
        },
        {
          label: "Lehengas",
          subItems: [
            {
              label: "Style",
              subItems: [
                { label: "Ready To Ship", slug: "ready-to-ship-lehenga" },
                { label: "Bridal Lehenga", slug: "bridal-lehenga" },
                { label: "Designer Lehenga", slug: "designer-lehenga" },
                { label: "Jacket Lehenga", slug: "jacket-lehenga" },
                { label: "Bridesmaids Lehenga", slug: "bridesmaids-lehenga" },
                { label: "Crop Top Lehenga", slug: "crop-top-lehenga" },
                { label: "Bandhani Lehenga", slug: "bandhani-lehenga" },
                { label: "Fishcut Lehenga", slug: "fishcut-lehenga" },
              ],
            },
            {
              label: "Occasions",
              subItems: [
                { label: "Wedding Lehenga", slug: "wedding-lehenga" },
                { label: "Reception Lehenga", slug: "reception-lehenga" },
                { label: "Party Wear Lehenga", slug: "party-wear-lehenga" },
                { label: "Mehendi Lehenga", slug: "mehendi-lehenga" },
                { label: "Sangeet Lehenga", slug: "sangeet-lehenga" },
                { label: "Engagement Lehenga", slug: "engagement-lehenga" },
              ],
            },
          ],
        },
        {
          label: "Salwar Suits",
          subItems: [
            {
              label: "Style",
              subItems: [
                { label: "Readymade Suites", slug: "readymade-suites" },
                { label: "Anarkali", slug: "anarkali" },
                { label: "Straight Cut Suit", slug: "straight-cut" },
                { label: "Sharara Suit", slug: "sharara-suit" },
                { label: "Palazzo Suit", slug: "palazzo-suit" },
              ],
            },
            {
              label: "Plus Size & Special",
              subItems: [
                { label: "Plus Size Salwar Kameez", slug: "plus-size" },
                { label: "Indowestern", slug: "indowestern" },
                { label: "Evening Look", slug: "evening-look" },
                { label: "Bridal Gowns", slug: "bridal-gowns" },
              ],
            },
            {
              label: "Unstitched Salwars",
              subItems: [
                {
                  label: "Embroidery Unstitched Salwars",
                  slug: "embroidery-unstitched",
                },
                {
                  label: "Cotton Unstitched Salwars",
                  slug: "cotton-unstitched",
                },
                {
                  label: "Banarasi Unstitched Salwars",
                  slug: "banarasi-unstitched",
                },
                {
                  label: "Paithani Unstitched Salwars",
                  slug: "paithani-unstitched",
                },
              ],
            },
          ],
        },
      ],
    },
  ];
  const contactInfo = {
    phone: "+919890533709",
    whatsapp: "+919890533709", // Can be same as phone
    whatsappMessage:
      "Hello Kabra Emporium, I would like to know more about your collections.",
    instagram:
      "https://www.instagram.com/kabra.emporium?igsh=MW41dDByaGV3dWNjcg%3D%3D&utm_source=qr",
    facebook: "https://www.facebook.com/kabrasarees",
  };
  const mobileNavItems = [
    {
      icon: <Home size={20} />,
      label: "Home",
      action: () => navigate("/"),
    },
    {
      icon: <Search size={20} />,
      label: "Search",
      action: () => setIsSearchOpen(true),
    },
    {
      icon: <ContactIcon size={20} />,
      label: "Enquiry",
      action: () => navigate("/contact"),
    },
  ];

  const handleCategoryClick = (slug) => {
    navigate(`/product/${slug}`);
    setIsSidebarOpen(false);
  };

  // Component for dropdown items
  const DropdownItem = ({ item, level = 0 }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const hasSubItems = item.subItems && item.subItems.length > 0;
    const isLeafNode = !hasSubItems && item.slug;

    const handleClick = () => {
      if (isLeafNode) {
        handleCategoryClick(item.slug);
        setIsSidebarOpen(false);
      } else if (hasSubItems) {
        setIsExpanded(!isExpanded);
      }
    };

    return (
      <>
        <button
          onClick={handleClick}
          className={`w-full flex items-center justify-between p-3 hover:bg-orange-50 transition-colors ${
            level === 0 ? "border-b border-gray-100" : ""
          }`}
          style={{ paddingLeft: `${20 + level * 16}px` }}
        >
          <div className="flex items-center space-x-3">
            {level === 0 && item.icon && (
              <div className="text-gray-600">{item.icon}</div>
            )}
            <div className="text-left">
              <div
                className={`font-medium ${
                  level === 0 ? "text-gray-800" : "text-gray-700"
                }`}
              >
                {item.label}
              </div>
            </div>
          </div>

          {hasSubItems && (
            <div className="text-gray-400">
              {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </div>
          )}

          {isLeafNode && <ChevronRight size={16} className="text-gray-400" />}
        </button>

        {/* Sub-items */}
        {hasSubItems && isExpanded && (
          <div className="bg-gray-50/50">
            {item.subItems.map((subItem, idx) => (
              <DropdownItem
                key={`${item.label}-${idx}`}
                item={subItem}
                level={level + 1}
              />
            ))}
          </div>
        )}
      </>
    );
  };

  return (
    <>
      <style jsx>{`
        @media (max-width: 1024px) {
          body,
          html {
            overflow-x: hidden;
            position: relative;
          }
        }

        /* Custom scrollbar for sidebar */
        .sidebar-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #d1d5db #f9fafb;
        }

        .sidebar-scrollbar::-webkit-scrollbar {
          width: 4px;
        }

        .sidebar-scrollbar::-webkit-scrollbar-track {
          background: #f9fafb;
        }

        .sidebar-scrollbar::-webkit-scrollbar-thumb {
          background-color: #d1d5db;
          border-radius: 2px;
        }
      `}</style>

      {/* Main Navbar */}
      <nav className="flex items-center justify-between px-4 lg:px-50 bg-white shadow-sm sticky top-0 z-50 w-full">
        <div
          className="flex items-center cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src={kabralogo}
            alt="Kabra Logo"
            className="w-15 h-15 lg:w-25 lg:h-25 object-contain"
          />
        </div>

        <div className="hidden lg:flex flex-1 max-w-2xl mx-8">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search for sarees, fabrics, designers..."
              className="w-full px-4 py-2.5 pl-12 rounded-full border border-gray-300 focus:outline-none focus:border-[#eb8749] focus:ring-1 focus:ring-[#eb8749] bg-gray-50"
              onKeyPress={(e) => {
                if (e.key === "Enter" && e.target.value.trim()) {
                  navigate(`/search?q=${encodeURIComponent(e.target.value)}`);
                }
              }}
            />
            <Search
              className="absolute left-4 top-2.5 text-gray-400"
              size={20}
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="hidden lg:flex items-center space-x-2 px-4 py-2.5 rounded-lg text-[#7b3306] hover:opacity-90 transition-all duration-300"
          >
            <Menu size={20} className="" />
          </button>

          <button
            onClick={() => setIsSidebarOpen(true)}
            className="lg:hidden p-2 hover:bg-orange-50 rounded-lg transition-colors"
          >
            <Menu size={24} className="text-[#7b3306]" />
          </button>
        </div>
      </nav>

      {/* Mobile Search Overlay (keep existing) */}
      <div
        className={`lg:hidden fixed inset-0 bg-white z-50 transition-transform duration-300 ${
          isSearchOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ overflowY: "auto" }}
      >
        <div className="p-4 pt-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <Search className="text-[#eb8749]" size={24} />
              <div>
                <h2 className="text-xl font-bold text-gray-800">Search</h2>
                <p className="text-sm text-gray-500">Find sarees & more</p>
              </div>
            </div>
            <button
              onClick={() => setIsSearchOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={24} className="text-gray-700" />
            </button>
          </div>
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Search sarees, fabrics, designers..."
              className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:border-[#eb8749] focus:ring-1 focus:ring-[#eb8749] bg-white"
              autoFocus
              onKeyPress={(e) => {
                if (e.key === "Enter" && e.target.value.trim()) {
                  navigate(`/search?q=${encodeURIComponent(e.target.value)}`);
                  setIsSearchOpen(false);
                }
              }}
            />
            <Search
              className="absolute left-4 top-3.5 text-gray-400"
              size={20}
            />
          </div>
          <div>
            <h3 className="font-medium text-gray-700 mb-3">Popular Searches</h3>
            <div className="flex flex-wrap gap-2">
              {[
                { name: "Banarasi", slug: "sarees" },
                { name: "Kanjeevaram", slug: "sarees" },
                { name: "Designer", slug: "sarees" },
                { name: "Lehengas", slug: "lehengas" },
                { name: "Party Wear", slug: "lehengas" },
                { name: "Bridal", slug: "sarees" },
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    navigate(`/product/${item.slug}`);
                    setIsSearchOpen(false);
                  }}
                  className="px-3 py-1.5 bg-[#eb8749]/10 text-[#7b3306] rounded-full text-sm hover:bg-[#eb8749]/20 transition-colors"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Mobile Bottom Navigation (keep existing) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-40 w-screen overflow-hidden">
        <div className="flex justify-around items-center w-full px-2">
          {mobileNavItems.map((item, index) => (
            <button
              key={index}
              onClick={item.action}
              className="flex flex-col items-center justify-center active:opacity-70 transition-opacity flex-1 min-w-0 px-1"
            >
              <div
                className={`p-2 rounded-full ${
                  item.label === "Search" ? "text-[#eb8749]" : "text-gray-600"
                }`}
              >
                {item.icon}
              </div>
              <span className="text-xs font-medium text-gray-700 truncate w-full text-center">
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Sidebar with new structure */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
          isSidebarOpen
            ? "bg-black/30 backdrop-blur-sm"
            : "bg-transparent pointer-events-none"
        }`}
        onClick={() => setIsSidebarOpen(false)}
      >
        <div
          className={`absolute right-0 top-0 h-full w-full md:w-[380px] bg-white shadow-xl transform transition-transform duration-300 overflow-hidden ${
            isSidebarOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
          style={{ maxWidth: "100vw" }}
        >
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div>
                <div className="font-bold text-gray-800 text-lg">
                  Navigation
                </div>
                <p className="text-sm text-gray-500">Browse all categories</p>
              </div>
            </div>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X size={22} className="text-gray-700" />
            </button>
          </div>

          {/* Sidebar Content */}
          <div className="sidebar-scrollbar overflow-y-auto h-[calc(100%-60px)]">
            <div className="p-1">
              {/* Navigation Items */}
              <div className="space-y-0">
                {navItems.map((item, index) => {
                  if (item.type === "link") {
                    return (
                      <button
                        key={index}
                        onClick={item.action}
                        className="w-full flex items-center space-x-3 p-3 hover:bg-orange-50 rounded-lg transition-colors text-left border-b border-gray-100"
                      >
                        <div className="text-gray-600">{item.icon}</div>
                        <span className="font-medium text-gray-800">
                          {item.label}
                        </span>
                      </button>
                    );
                  }

                  if (item.type === "dropdown") {
                    return (
                      <div key={index}>
                        <DropdownItem item={item} />
                      </div>
                    );
                  }

                  return null;
                })}
              </div>

              {/* Quick Access */}
              <div className="mt-6 p-4 bg-linear-to-r from-[#eb8749]/5 to-[#7b3306]/5 rounded-lg border border-orange-100 mx-3">
                <h4 className="font-semibold text-gray-800 mb-3">
                  Special Collections
                </h4>
                <div className="space-y-2">
                  {[
                    { name: "Festive Collection 2024", slug: "sarees" },
                    { name: "Summer Special", slug: "lehengas" },
                    { name: "Wedding Season", slug: "sarees" },
                    { name: "Luxury Edition", slug: "lehengas" },
                  ].map((collection, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        handleCategoryClick(collection.slug);
                        setIsSidebarOpen(false);
                      }}
                      className="w-full text-left block py-2 px-3 text-[#7b3306] hover:text-[#eb8749] hover:bg-white rounded transition-colors"
                    >
                      {collection.name}
                    </button>
                  ))}
                </div>
              </div>
              <button
                onClick={() => {
                  window.open(
                    `https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(
                      contactInfo.whatsappMessage,
                    )}`,
                    "_blank",
                  );
                  setIsSidebarOpen(false);
                }}
                className="mx-auto w-fit text-center block mt-5 py-2 px-6 bg-[#7b3306] text-white rounded"
              >
                Enquire Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden"></div>
    </>
  );
};

export default Navbar;
