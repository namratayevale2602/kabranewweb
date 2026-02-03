import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  getProductDataBySlug,
  categoryData,
} from "../../constant/Home/categoryData";
import ImageSlider from "./ImageSlider"; // Make sure to create this component

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Get the subcategory data
  const data = getProductDataBySlug(slug);

  const [selectedCategory, setSelectedCategory] = useState(
    data?.categoryTitle ? { name: data.categoryTitle } : null,
  );
  const [selectedSub, setSelectedSub] = useState(data || null);

  // Find the main category data for navigation
  const mainCategorySlug = Object.keys(categoryData).find(
    (key) => categoryData[key].title === data?.categoryTitle,
  );
  const mainCategoryData = mainCategorySlug
    ? categoryData[mainCategorySlug]
    : null;

  // Find the specific subcategory within the main category
  useEffect(() => {
    if (mainCategoryData && data) {
      // Find the parent subcategory
      const parentSubCategory = mainCategoryData.subCategories.find((subCat) =>
        subCat.children.some((child) => child.slug === slug),
      );

      if (parentSubCategory) {
        setSelectedCategory(parentSubCategory);
        // Find and set the exact child
        const exactChild = parentSubCategory.children.find(
          (child) => child.slug === slug,
        );
        if (exactChild) {
          setSelectedSub(exactChild);
        }
      }
    }
  }, [slug, mainCategoryData, data]);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-center text-gray-600 text-xl">
          Product category not found
        </p>
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
            <button
              onClick={() => navigate(`/category/${mainCategorySlug}`)}
              className="hover:text-amber-600 transition-colors"
            >
              {data.categoryTitle}
            </button>
            <span>/</span>
            <span className="text-gray-900 font-medium">{data.name}</span>
          </nav>

          {/* Title */}
          <div className="mb-2">
            <h1 className="text-2xl md:text-4xl font-bold text-gray-900">
              {data.name}
            </h1>
            <div className="w-20 h-1 bg-amber-500 my-2"></div>
            <p className="text-gray-600 max-w-3xl">
              Premium collection of {data.name.toLowerCase()}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        {/* Category Navigation */}
        {/* {mainCategoryData && (
          <div className="mb-2 md:mb-4">
            <h3 className="md:text-lg text-sm font-semibold text-gray-900 mb-2">
              Browse by Type
            </h3>
            <div className="flex overflow-x-auto mb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:gap-2 sm:overflow-visible">
              {mainCategoryData.subCategories.map((cat, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSelectedCategory(cat);
                    if (cat.children && cat.children.length > 0) {
                      setSelectedSub(cat.children[0]);
                    }
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
        )} */}

        {/* Sub-category Navigation */}
        {selectedCategory && selectedCategory.children && (
          <div className="md:mb-5">
            <h3 className="md:text-lg text-sm font-semibold text-gray-900 mb-2">
              Select from {selectedCategory.name}
            </h3>
            <div className="flex overflow-x-auto pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:gap-3 sm:overflow-visible">
              {selectedCategory.children.map((sub, index) => (
                <button
                  key={index}
                  onClick={() => {
                    navigate(`/product/${sub.slug}`);
                  }}
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

        {/* Product Grid */}
        {selectedSub && selectedSub.products && (
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

            {selectedSub.products && selectedSub.products.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {selectedSub.products.map((product) => (
                  <div
                    key={product.id}
                    className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="relative overflow-hidden">
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
