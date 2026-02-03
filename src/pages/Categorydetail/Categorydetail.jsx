import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as images from "../../assets";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { categoryData } from "../../constant/Home/categoryData"; // Import from external file

// ImageSlider Component
const ImageSlider = ({ images, productName }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  if (images.length === 0) return null;

  return (
    <div className="relative overflow-hidden rounded-t-2xl">
      {/* Main Image */}
      <div
        className="relative w-full h-50 md:h-80 object-cover transition-transform duration-500 ease-in-out"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <img
          src={images[currentIndex]}
          alt={`${productName} - ${currentIndex + 1}`}
          className="w-full h-full object-cover"
          loading="lazy"
        />

        {/* Navigation Arrows (only show if multiple images) */}
        {images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevSlide();
              }}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-1 md:p-2 rounded-full shadow-lg transition-all hover:scale-110 z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-gray-800" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextSlide();
              }}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-1 md:p-2 rounded-full shadow-lg transition-all hover:scale-110 z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-gray-800" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default function Categorydetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const data = categoryData[slug]; // Use imported categoryData

  const [selectedCategory, setSelectedCategory] = useState(
    data?.subCategories?.[0] || null,
  );
  const [selectedSub, setSelectedSub] = useState(
    data?.subCategories?.[0]?.children?.[0] || null,
  );

  // Reset selection when main category changes
  useEffect(() => {
    if (data?.subCategories?.[0]) {
      setSelectedCategory(data.subCategories[0]);
      setSelectedSub(data.subCategories[0].children[0]);
    }
  }, [slug]);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-center text-gray-600 text-xl">Category not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-1">
            <button
              onClick={() => navigate("/")}
              className="hover:text-amber-600 transition-colors"
            >
              Home
            </button>
            <span>/</span>
            <span className="text-gray-900 font-medium">{data.title}</span>
          </nav>

          {/* Title */}
          <div className="mb-2">
            <h1 className="text-2xl md:text-4xl font-bold text-gray-900">
              {data.title}
            </h1>
            <div className="w-20 h-1 bg-amber-500 my-2"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        {/* Category Navigation - Now scrollable on mobile */}
        <div className="mb-2 md:mb-4">
          <h3 className="md:text-lg text-sm font-semibold text-gray-900 mb-2">
            Browse by Type
          </h3>
          <div className="flex overflow-x-auto mb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:gap-2 sm:overflow-visible">
            {data.subCategories.map((cat, index) => (
              <button
                key={index}
                onClick={() => {
                  setSelectedCategory(cat);
                  setSelectedSub(cat.children[0]);
                }}
                className={`
                  flex-shrink-0 px-2 py-1 md:px-3 md:py-2 rounded-full font-medium text-sm transition-all
                  whitespace-nowrap mr-3 sm:mr-0
                  ${
                    selectedCategory?.name === cat.name
                      ? "bg-amber-600 text-white shadow-lg"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }
                `}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Sub-category Navigation - Also scrollable on mobile */}
        {selectedCategory && (
          <div className="md:mb-5">
            <h3 className="md:text-lg text-sm font-semibold text-gray-900 mb-2">
              Select from {selectedCategory.name}
            </h3>
            <div className="flex overflow-x-auto pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:gap-3 sm:overflow-visible">
              {selectedCategory.children.map((sub, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedSub(sub)}
                  className={`
                    flex-shrink-0 px-2 py-1 md:px-3 md:py-2 rounded-full font-medium text-sm transition-all
                    whitespace-nowrap mr-3 sm:mr-0
                    ${
                      selectedSub?.slug === sub.slug
                        ? "bg-amber-600 text-white shadow-md"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }
                  `}
                >
                  {sub.name}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Product Grid with Image Slider */}
        {selectedSub && (
          <div>
            <div className="mb-6">
              <h3 className="md:text-2xl font-bold text-gray-900">
                {selectedSub.name}
              </h3>
              <p className="text-gray-600 mt-2">
                Explore our exclusive collection of{" "}
                {selectedSub.name.toLowerCase()}
              </p>
            </div>

            {selectedSub.images && selectedSub.images.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {selectedSub.images.map((img, index) => (
                  <div
                    key={index}
                    className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="relative overflow-hidden">
                      {/* Image Slider for each product */}
                      <ImageSlider
                        images={selectedSub.images}
                        productName={selectedSub.name}
                      />
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                    </div>
                    <div className="p-1 md:p-2">
                      <button className="w-full bg-amber-600 text-white md:py-2 py-1 rounded-lg hover:bg-amber-700 transition-colors md:font-medium text-sm">
                        Enquiry Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : // Show products if available
            selectedSub.products && selectedSub.products.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {selectedSub.products.map((product, index) => (
                  <div
                    key={product.id}
                    className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="relative overflow-hidden">
                      {/* Image Slider for each product */}
                      <ImageSlider
                        images={product.images}
                        productName={product.name}
                      />
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                    </div>
                    <div className="p-3">
                      <button className="w-full bg-amber-600 text-white py-2 rounded-lg hover:bg-amber-700 transition-colors text-sm font-medium">
                        Enquiry Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-xl shadow">
                <p className="text-gray-500">
                  Products coming soon for this category
                </p>
              </div>
            )}
          </div>
        )}

        {/* Empty State */}
        {!selectedSub && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">
              Select a category to view products
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
