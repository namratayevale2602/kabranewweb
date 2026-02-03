import * as images from "../../assets/index";

export const categoryData = {
  sarees: {
    title: "Sarees Collection",
    description: "Premium silk sarees for all occasions.",
    subCategories: [
      {
        name: "Kanchipuram Sarees",
        children: [
          {
            name: "Kanchipuram Pure Silk Sarees",
            slug: "kanchipuram-pure-silk",
            products: [
              {
                id: "kpss001",
                name: "Golden Zari Kanchipuram Saree",
                description:
                  "Pure Kanchipuram silk with heavy golden zari work",
                price: "₹25,999",
                images: [
                  images.KanchipuramBrocket,
                  images.KanchipuramBrocket1,
                  images.KanchipuramBrocket2,
                ],
                features: [
                  "Pure Silk",
                  "Heavy Zari Work",
                  "Traditional Motifs",
                  "Red & Gold Color",
                ],
              },
              {
                id: "kpss002",
                name: "Peacock Motif Kanchipuram",
                description: "Elegant peacock design with temple border",
                price: "₹22,499",
                images: [
                  images.kanchipuramsaree1,
                  images.kanchipuramsaree1_2,
                  images.kanchipuramsaree1_3,
                ],
                features: [
                  "Peacock Motifs",
                  "Temple Border",
                  "Green & Gold",
                  "Contrast Pallu",
                ],
              },
              {
                id: "kpss003",
                name: "Maroon Traditional Kanchipuram",
                description: "Deep maroon silk with intricate silver zari",
                price: "₹19,999",
                images: [
                  images.kanchipuramsaree2,
                  images.kanchipuramsaree2_2,
                  images.kanchipuramsaree2_3,
                ],
                features: [
                  "Maroon Silk",
                  "Silver Zari",
                  "Floral Patterns",
                  "Wide Border",
                ],
              },
            ],
          },
          {
            name: "Kanchipuram Pure Half Fine Jari",
            slug: "kanchipuram-half-fine-jari",
            images: [
              images.KanchipuramPureHalfFineJari,
              images.kanchipuram_half_fine2,
            ],
            products: [
              {
                id: "kphj001",
                name: "Half Fine Jari Temple Border",
                description: "Authentic half fine jari work with temple motifs",
                price: "₹18,499",
                images: [
                  images.KanchipuramPureHalfFineJari,
                  images.kanchipuram_half_fine2,
                ],
                features: [
                  "Half Fine Jari",
                  "Temple Border",
                  "Traditional Design",
                  "Comfort Wear",
                ],
              },
              {
                id: "kphj002",
                name: "Floral Motif Half Jari",
                description: "Delicate floral patterns with half fine jari",
                price: "₹16,999",
                images: [
                  images.KanchipuramPureHalfFineJari,
                  images.kanchipuram_half_fine2,
                ],
                features: [
                  "Floral Motifs",
                  "Lightweight",
                  "Everyday Wear",
                  "Multiple Colors",
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Banarasi Sarees",
        children: [
          {
            name: "Banarasi Silk Sarees",
            slug: "banarasi-silk",
            images: [images.banarasi1, images.banarasi2],
            products: [
              {
                id: "bss001",
                name: "Heavy Brocade Banarasi Silk",
                description: "Traditional Banarasi silk with intricate brocade",
                price: "₹32,999",
                images: [images.banarasi1, images.banarasi2],
                features: [
                  "Pure Banarasi Silk",
                  "Heavy Brocade",
                  "Gold Zari",
                  "Regal Look",
                ],
              },
              {
                id: "bss002",
                name: "Butidar Banarasi Silk",
                description: "Classic buta patterns on rich silk",
                price: "₹28,499",
                images: [images.banarasi1, images.banarasi2],
                features: [
                  "Buta Designs",
                  "Fine Silk",
                  "Royal Appearance",
                  "Wedding Wear",
                ],
              },
            ],
          },
          {
            name: "Banarasi Kadhwa Sarees",
            slug: "banarasi-kadhwa",
            images: [images.BanarasiKadhwa],
            products: [
              {
                id: "bks001",
                name: "Traditional Kadhwa Weave",
                description: "Authentic Kadhwa weaving technique",
                price: "₹35,999",
                images: [images.BanarasiKadhwa],
                features: [
                  "Kadhwa Weave",
                  "Intricate Patterns",
                  "Premium Quality",
                  "Heavy Zari",
                ],
              },
            ],
          },
          {
            name: "Banarasi Tussar Weaving",
            slug: "banarasi-tussar",
            images: [images.PureTussarEmbroidery],
            products: [
              {
                id: "btw001",
                name: "Tussar Silk Banarasi",
                description: "Eco-friendly tussar silk with Banarasi weaving",
                price: "₹21,999",
                images: [images.PureTussarEmbroidery],
                features: [
                  "Tussar Silk",
                  "Natural Fiber",
                  "Breathable",
                  "Lightweight",
                ],
              },
            ],
          },
          {
            name: "Banarasi Organza",
            slug: "banarasi-organza",
            images: [images.BanarasiOrganza],
            products: [
              {
                id: "bo001",
                name: "Organza Banarasi Saree",
                description: "Sheer organza with Banarasi embroidery",
                price: "₹26,499",
                images: [images.BanarasiOrganza],
                features: [
                  "Organza Fabric",
                  "Sheer Look",
                  "Elegant",
                  "Party Wear",
                ],
              },
            ],
          },
          {
            name: "Banarasi Georgette Saree",
            slug: "banarasi-georgette",
            images: [images.BanarasiGeorgette],
            products: [
              {
                id: "bg001",
                name: "Georgette Banarasi Saree",
                description: "Flowy georgette with Banarasi work",
                price: "₹19,999",
                images: [images.BanarasiGeorgette],
                features: [
                  "Georgette Fabric",
                  "Drape-Friendly",
                  "Comfortable",
                  "Modern Look",
                ],
              },
            ],
          },
          {
            name: "Banarasi Tissue Saree",
            slug: "banarasi-tissue",
            images: [images.BanarasiTissue],
            products: [
              {
                id: "bt001",
                name: "Tissue Silk Banarasi",
                description: "Shimmery tissue silk with traditional weave",
                price: "₹29,999",
                images: [images.BanarasiTissue],
                features: [
                  "Tissue Silk",
                  "Shimmery Effect",
                  "Luxurious",
                  "Festive Wear",
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Designer Sarees",
        children: [
          {
            name: "Pure Designer Embroidery Saree",
            slug: "pure-designer-embroidery",
            images: [
              images.desginerSaree1,
              images.desginerSaree2,
              images.PureDesignerEmbroidery,
            ],
            products: [
              {
                id: "pde001",
                name: "Contemporary Designer Saree",
                description: "Modern design with traditional embroidery",
                price: "₹34,999",
                images: [
                  images.desginerSaree1,
                  images.desginerSaree2,
                  images.PureDesignerEmbroidery,
                ],
                features: [
                  "Contemporary Design",
                  "Hand Embroidery",
                  "Unique Patterns",
                  "Fashion Forward",
                ],
              },
            ],
          },
          {
            name: "Fancy Sarees",
            slug: "fancy-sarees",
            images: [images.FancySaree],
            products: [
              {
                id: "fs001",
                name: "Sequinned Fancy Saree",
                description: "Glamorous saree with sequin work",
                price: "₹23,999",
                images: [images.FancySaree],
                features: ["Sequin Work", "Glamorous", "Party Wear", "Modern"],
              },
            ],
          },
          {
            name: "Organza Sarees",
            slug: "organza-sarees",
            images: [images.OrganzaSaree],
            products: [
              {
                id: "os001",
                name: "Embroidered Organza Saree",
                description: "Sheer organza with delicate embroidery",
                price: "₹27,499",
                images: [images.OrganzaSaree],
                features: [
                  "Sheer Organza",
                  "Delicate Embroidery",
                  "Elegant",
                  "Special Occasion",
                ],
              },
            ],
          },
          {
            name: "Bandhani Sarees",
            slug: "bandhani-sarees",
            images: [images.BandhaniSaree],
            products: [
              {
                id: "bs001",
                name: "Traditional Bandhani Saree",
                description: "Authentic tie-dye bandhani work",
                price: "₹14,999",
                images: [images.BandhaniSaree],
                features: ["Tie-Dye", "Traditional", "Colorful", "Festive"],
              },
            ],
          },
          {
            name: "Fancy Weaving Saree",
            slug: "fancy-weaving",
            images: [images.banarasikadhwa, images.banarasikadhwa1],
            products: [
              {
                id: "fw001",
                name: "Innovative Weave Saree",
                description: "Creative weaving patterns and techniques",
                price: "₹31,999",
                images: [images.banarasikadhwa, images.banarasikadhwa1],
                features: [
                  "Innovative Weave",
                  "Artistic",
                  "Unique",
                  "Contemporary",
                ],
              },
            ],
          },
          {
            name: "Ready Blouse Sarees",
            slug: "ready-blouse",
            images: [images.banarasikadhwa, images.banarasikadhwa1],
            products: [
              {
                id: "rb001",
                name: "Complete Saree Set",
                description: "Saree with ready-to-wear matching blouse",
                price: "₹29,499",
                images: [images.banarasikadhwa, images.banarasikadhwa1],
                features: [
                  "Complete Set",
                  "Ready Blouse",
                  "Time-Saving",
                  "Perfect Fit",
                ],
              },
            ],
          },
          {
            name: "Pure Tussar Embroidery Sarees",
            slug: "pure-tussar-embroidery",
            images: [images.PureTussarEmbroidery],
            products: [
              {
                id: "pte001",
                name: "Tussar Silk Embroidered",
                description: "Pure tussar silk with hand embroidery",
                price: "₹22,999",
                images: [images.PureTussarEmbroidery],
                features: [
                  "Tussar Silk",
                  "Hand Embroidery",
                  "Eco-Friendly",
                  "Natural",
                ],
              },
            ],
          },
          {
            name: "Ready To Wear Saree",
            slug: "ready-to-wear",
            images: [images.banarasikadhwa, images.banarasikadhwa1],
            products: [
              {
                id: "rtw001",
                name: "Pre-Draped Saree",
                description: "Convenient ready-to-wear pre-draped saree",
                price: "₹19,499",
                images: [images.banarasikadhwa, images.banarasikadhwa1],
                features: ["Pre-Draped", "Easy Wear", "Modern", "Convenient"],
              },
            ],
          },
          {
            name: "Handloom Silk Embroidery Sarees",
            slug: "handloom-silk-embroidery",
            images: [images.banarasikadhwa, images.banarasikadhwa1],
            products: [
              {
                id: "hse001",
                name: "Handloom Silk with Embroidery",
                description: "Traditional handloom with intricate embroidery",
                price: "₹26,999",
                images: [images.banarasikadhwa, images.banarasikadhwa1],
                features: [
                  "Handloom",
                  "Hand Embroidery",
                  "Artisanal",
                  "Authentic",
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Pure Handloom Silk Saree",
        children: [
          {
            name: "Handloom Sarees",
            slug: "handloom-sarees",
            images: [
              images.pureHandloomSilk,
              images.pureHandloomSilk1,
              images.banarasisilk3,
            ],
            products: [
              {
                id: "hs001",
                name: "Traditional Handloom Silk",
                description: "Authentic handwoven silk saree",
                price: "₹24,999",
                images: [
                  images.pureHandloomSilk,
                  images.pureHandloomSilk1,
                  images.banarasisilk3,
                ],
                features: [
                  "Handwoven",
                  "Pure Silk",
                  "Traditional",
                  "Sustainable",
                ],
              },
            ],
          },
          {
            name: "Gadwal Silk",
            slug: "gadwal-silk",
            images: [images.banarasikadhwa, images.banarasikadhwa1],
            products: [
              {
                id: "gs001",
                name: "Gadwal Cotton Silk",
                description: "Unique cotton silk blend from Gadwal",
                price: "₹17,999",
                images: [images.banarasikadhwa, images.banarasikadhwa1],
                features: [
                  "Cotton Silk",
                  "Gadwal Weave",
                  "Comfortable",
                  "Traditional",
                ],
              },
            ],
          },
          {
            name: "Paithani Sarees",
            slug: "paithani-sarees",
            images: [images.banarasikadhwa, images.banarasikadhwa1],
            products: [
              {
                id: "ps001",
                name: "Traditional Paithani",
                description: "Authentic Paithani from Maharashtra",
                price: "₹38,999",
                images: [images.banarasikadhwa, images.banarasikadhwa1],
                features: [
                  "Peacock Design",
                  "Pure Zari",
                  "Maharashtrian",
                  "Heritage",
                ],
              },
            ],
          },
          {
            name: "Chanderi Saree",
            slug: "chanderi-saree",
            images: [images.banarasikadhwa, images.banarasikadhwa1],
            products: [
              {
                id: "cs001",
                name: "Lightweight Chanderi",
                description: "Sheer and lightweight Chanderi silk",
                price: "₹15,999",
                images: [images.banarasikadhwa, images.banarasikadhwa1],
                features: ["Lightweight", "Sheer", "Summer Wear", "Elegant"],
              },
            ],
          },
          {
            name: "Ikkat & Patola Saree",
            slug: "ikkat-patola",
            images: [images.banarasikadhwa, images.banarasikadhwa1],
            products: [
              {
                id: "ip001",
                name: "Double Ikkat Saree",
                description: "Traditional double ikkat weaving",
                price: "₹42,999",
                images: [images.banarasikadhwa, images.banarasikadhwa1],
                features: ["Double Ikkat", "Intricate", "Artisanal", "Rare"],
              },
            ],
          },
          {
            name: "Keta Silk Saree",
            slug: "keta-silk",
            images: [images.banarasikadhwa, images.banarasikadhwa1],
            products: [
              {
                id: "ks001",
                name: "Keta Silk Traditional",
                description: "Rustic keta silk with natural feel",
                price: "₹19,499",
                images: [images.banarasikadhwa, images.banarasikadhwa1],
                features: ["Keta Silk", "Rustic", "Natural", "Traditional"],
              },
            ],
          },
          {
            name: "Patan Patola",
            slug: "patan-patola",
            images: [images.banarasikadhwa, images.banarasikadhwa1],
            products: [
              {
                id: "pp001",
                name: "Authentic Patola",
                description: "Heritage patola weaving from Patan",
                price: "₹89,999",
                images: [images.banarasikadhwa, images.banarasikadhwa1],
                features: [
                  "Heritage",
                  "Intricate",
                  "Collector's Item",
                  "Patan Weave",
                ],
              },
            ],
          },
          {
            name: "Pashmina Sarees",
            slug: "pashmina-sarees",
            images: [images.banarasikadhwa, images.banarasikadhwa1],
            products: [
              {
                id: "pas001",
                name: "Pashmina Silk Blend",
                description: "Luxurious pashmina blend saree",
                price: "₹45,999",
                images: [images.banarasikadhwa, images.banarasikadhwa1],
                features: ["Pashmina Blend", "Luxurious", "Warm", "Premium"],
              },
            ],
          },
        ],
      },
      {
        name: "Printed Saree",
        children: [
          {
            name: "Designer Printed Saree",
            slug: "designer-printed",
            images: [
              images.banarasisilk,
              images.banarasisilk1,
              images.banarasisilk3,
            ],
            products: [
              {
                id: "dp001",
                name: "Contemporary Print Saree",
                description: "Modern prints on silk fabric",
                price: "₹12,999",
                images: [
                  images.banarasisilk,
                  images.banarasisilk1,
                  images.banarasisilk3,
                ],
                features: ["Digital Print", "Modern", "Trendy", "Affordable"],
              },
            ],
          },
          {
            name: "Tussar Printed Saree",
            slug: "tussar-printed",
            images: [images.banarasikadhwa, images.banarasikadhwa1],
            products: [
              {
                id: "tp001",
                name: "Printed Tussar Silk",
                description: "Natural tussar with beautiful prints",
                price: "₹14,499",
                images: [images.banarasikadhwa, images.banarasikadhwa1],
                features: ["Tussar Silk", "Printed", "Natural", "Breathable"],
              },
            ],
          },
          {
            name: "Kalamkari Silk Saree",
            slug: "kalamkari-silk",
            images: [images.banarasikadhwa, images.banarasikadhwa1],
            products: [
              {
                id: "kk001",
                name: "Hand-Painted Kalamkari",
                description: "Traditional hand-painted kalamkari art",
                price: "₹18,999",
                images: [images.banarasikadhwa, images.banarasikadhwa1],
                features: [
                  "Hand-Painted",
                  "Traditional Art",
                  "Unique",
                  "Artistic",
                ],
              },
            ],
          },
          {
            name: "Silk Printed Saree",
            slug: "silk-printed",
            images: [images.banarasikadhwa, images.banarasikadhwa1],
            products: [
              {
                id: "sp001",
                name: "Printed Pure Silk",
                description: "Pure silk with beautiful prints",
                price: "₹16,999",
                images: [images.banarasikadhwa, images.banarasikadhwa1],
                features: ["Pure Silk", "Printed", "Vibrant", "Festive"],
              },
            ],
          },
        ],
      },
      {
        name: "Occasion",
        children: [
          {
            name: "Wedding Saree",
            slug: "wedding-saree",
            images: [
              images.banarasisilk,
              images.banarasisilk1,
              images.banarasisilk3,
            ],
            products: [
              {
                id: "ws001",
                name: "Bridal Wedding Saree",
                description: "Heavy work saree for bridal wear",
                price: "₹52,999",
                images: [
                  images.banarasisilk,
                  images.banarasisilk1,
                  images.banarasisilk3,
                ],
                features: ["Bridal", "Heavy Work", "Red Traditional", "Zari"],
              },
            ],
          },
          {
            name: "Festive Wear Saree",
            slug: "festive-wear",
            images: [images.banarasikadhwa, images.banarasikadhwa1],
            products: [
              {
                id: "fw001",
                name: "Diwali Festival Saree",
                description: "Vibrant saree perfect for festivals",
                price: "₹21,999",
                images: [images.banarasikadhwa, images.banarasikadhwa1],
                features: [
                  "Festive",
                  "Vibrant Colors",
                  "Celebration",
                  "Traditional",
                ],
              },
            ],
          },
          {
            name: "Party Wear Saree",
            slug: "party-wear-saree",
            images: [images.banarasikadhwa, images.banarasikadhwa1],
            products: [
              {
                id: "pw001",
                name: "Cocktail Party Saree",
                description: "Glamorous saree for evening parties",
                price: "₹24,999",
                images: [images.banarasikadhwa, images.banarasikadhwa1],
                features: ["Party Wear", "Glamorous", "Modern", "Evening"],
              },
            ],
          },
          {
            name: "Mehendi Sarees",
            slug: "mehendi-sarees",
            images: [images.banarasikadhwa, images.banarasikadhwa1],
            products: [
              {
                id: "ms001",
                name: "Bright Mehendi Saree",
                description: "Bright colored saree for mehendi ceremony",
                price: "₹17,999",
                images: [images.banarasikadhwa, images.banarasikadhwa1],
                features: [
                  "Bright Colors",
                  "Mehendi Ceremony",
                  "Festive",
                  "Comfortable",
                ],
              },
            ],
          },
          {
            name: "Reception sarees",
            slug: "reception-sarees",
            images: [images.banarasikadhwa, images.banarasikadhwa1],
            products: [
              {
                id: "rs001",
                name: "Reception Banarasi",
                description: "Elegant saree for wedding reception",
                price: "₹38,999",
                images: [images.banarasikadhwa, images.banarasikadhwa1],
                features: ["Reception", "Elegant", "Formal", "Luxurious"],
              },
            ],
          },
          {
            name: "Haldi Sarees",
            slug: "haldi-sarees",
            images: [images.banarasikadhwa, images.banarasikadhwa1],
            products: [
              {
                id: "hs001",
                name: "Yellow Haldi Ceremony Saree",
                description: "Traditional yellow saree for haldi ceremony",
                price: "₹15,999",
                images: [images.banarasikadhwa, images.banarasikadhwa1],
                features: ["Yellow", "Haldi Ceremony", "Traditional", "Simple"],
              },
            ],
          },
        ],
      },
    ],
  },
  lehengas: {
    title: "Lehenga Collection",
    description: "Premium lehengas for weddings & celebrations.",
    subCategories: [
      {
        name: "Style",
        children: [
          {
            name: "Ready To Ship",
            slug: "ready-to-ship-lehenga",
            images: [images.bridallehenga, images.bridallehenga1],
            products: [
              {
                id: "rts001",
                name: "Ready Red Bridal Lehenga",
                description: "Immediate delivery bridal lehenga",
                price: "₹45,999",
                images: [images.bridallehenga, images.bridallehenga1],
                features: [
                  "Ready Stock",
                  "Immediate Delivery",
                  "Bridal",
                  "Complete Set",
                ],
              },
            ],
          },
          {
            name: "Bridal Lehenga",
            slug: "bridal-lehenga",
            images: [images.bridallehenga, images.bridallehenga1],
            products: [
              {
                id: "bl001",
                name: "Royal Red Bridal Lehenga",
                description: "Heavy embroidery bridal lehenga set",
                price: "₹78,999",
                images: [images.bridallehenga, images.bridallehenga1],
                features: [
                  "Bridal",
                  "Heavy Embroidery",
                  "Complete Set",
                  "Customizable",
                ],
              },
            ],
          },
          {
            name: "Designer Lehenga",
            slug: "designer-lehenga",
            images: [images.designerlehenga, images.designerlehenga1],
            products: [
              {
                id: "dl001",
                name: "Contemporary Designer Lehenga",
                description: "Modern designer lehenga with unique patterns",
                price: "₹52,999",
                images: [images.designerlehenga, images.designerlehenga1],
                features: ["Designer", "Contemporary", "Unique", "Fashion"],
              },
            ],
          },
          {
            name: "Jacket Lehenga",
            slug: "jacket-lehenga",
            images: [images.bridallehenga, images.bridallehenga1],
            products: [
              {
                id: "jl001",
                name: "Jacket Style Lehenga",
                description: "Lehenga with matching jacket",
                price: "₹42,999",
                images: [images.bridallehenga, images.bridallehenga1],
                features: ["Jacket Style", "Modest", "Elegant", "Complete Set"],
              },
            ],
          },
          {
            name: "Bridesmaids Lehenga",
            slug: "bridesmaids-lehenga",
            images: [images.bridallehenga, images.bridallehenga1],
            products: [
              {
                id: "bml001",
                name: "Bridesmaid Collection",
                description: "Matching lehengas for bridesmaids",
                price: "₹28,999",
                images: [images.bridallehenga, images.bridallehenga1],
                features: [
                  "Bridesmaid",
                  "Matching Sets",
                  "Coordinated",
                  "Group Discount",
                ],
              },
            ],
          },
          {
            name: "Crop Top Lehenga",
            slug: "crop-top-lehenga",
            images: [images.bridallehenga, images.bridallehenga1],
            products: [
              {
                id: "ctl001",
                name: "Modern Crop Top Lehenga",
                description: "Trendy crop top style lehenga",
                price: "₹35,999",
                images: [images.bridallehenga, images.bridallehenga1],
                features: ["Crop Top", "Modern", "Trendy", "Youthful"],
              },
            ],
          },
          {
            name: "Bandhani Lehenga",
            slug: "bandhani-lehenga",
            images: [images.bridallehenga, images.bridallehenga1],
            products: [
              {
                id: "bdl001",
                name: "Traditional Bandhani Lehenga",
                description: "Authentic bandhani tie-dye lehenga",
                price: "₹31,999",
                images: [images.bridallehenga, images.bridallehenga1],
                features: ["Bandhani", "Tie-Dye", "Traditional", "Colorful"],
              },
            ],
          },
          {
            name: "Fishcut Lehenga",
            slug: "fishcut-lehenga",
            images: [images.bridallehenga, images.bridallehenga1],
            products: [
              {
                id: "fcl001",
                name: "Mermaid Fishcut Lehenga",
                description: "Flattering fishcut/mermaid style",
                price: "₹38,999",
                images: [images.bridallehenga, images.bridallehenga1],
                features: ["Fishcut", "Mermaid Style", "Flattering", "Elegant"],
              },
            ],
          },
        ],
      },
      {
        name: "Occasions",
        children: [
          {
            name: "Wedding Lehenga",
            slug: "wedding-lehenga",
            images: [images.bridallehenga, images.bridallehenga1],
            products: [
              {
                id: "wl001",
                name: "Grand Wedding Lehenga",
                description: "Opulent lehenga for main wedding ceremony",
                price: "₹85,999",
                images: [images.bridallehenga, images.bridallehenga1],
                features: ["Wedding", "Grand", "Heavy Work", "Bridal"],
              },
            ],
          },
          {
            name: "Reception Lehenga",
            slug: "reception-lehenga",
            images: [images.bridallehenga, images.bridallehenga1],
            products: [
              {
                id: "rl001",
                name: "Elegant Reception Lehenga",
                description: "Sophisticated lehenga for reception",
                price: "₹62,999",
                images: [images.bridallehenga, images.bridallehenga1],
                features: ["Reception", "Elegant", "Sophisticated", "Formal"],
              },
            ],
          },
          {
            name: "Party Wear Lehenga",
            slug: "party-wear-lehenga",
            images: [images.designerlehenga, images.designerlehenga1],
            products: [
              {
                id: "pwl001",
                name: "Cocktail Party Lehenga",
                description: "Stylish lehenga for parties",
                price: "₹34,999",
                images: [images.designerlehenga, images.designerlehenga1],
                features: ["Party Wear", "Stylish", "Modern", "Versatile"],
              },
            ],
          },
          {
            name: "Mehendi Lehenga",
            slug: "mehendi-lehenga",
            images: [images.bridallehenga, images.bridallehenga1],
            products: [
              {
                id: "ml001",
                name: "Bright Mehendi Lehenga",
                description: "Colorful lehenga for mehendi ceremony",
                price: "₹29,999",
                images: [images.bridallehenga, images.bridallehenga1],
                features: [
                  "Mehendi",
                  "Bright Colors",
                  "Comfortable",
                  "Festive",
                ],
              },
            ],
          },
          {
            name: "Sangeet Lehenga",
            slug: "sangeet-lehenga",
            images: [images.bridallehenga, images.bridallehenga1],
            products: [
              {
                id: "sl001",
                name: "Dance-Friendly Sangeet Lehenga",
                description: "Comfortable lehenga for sangeet ceremony",
                price: "₹32,999",
                images: [images.bridallehenga, images.bridallehenga1],
                features: [
                  "Sangeet",
                  "Dance-Friendly",
                  "Comfortable",
                  "Festive",
                ],
              },
            ],
          },
          {
            name: "Engagement Lehenga",
            slug: "engagement-lehenga",
            images: [images.bridallehenga, images.bridallehenga1],
            products: [
              {
                id: "el001",
                name: "Engagement Ceremony Lehenga",
                description: "Elegant lehenga for engagement",
                price: "₹48,999",
                images: [images.bridallehenga, images.bridallehenga1],
                features: [
                  "Engagement",
                  "Elegant",
                  "Special Occasion",
                  "Memorable",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  salwarsuite: {
    title: "Salwar Suits",
    description: "Traditional and designer Salwar Suits for every occasion.",
    subCategories: [
      {
        name: "Style",
        children: [
          {
            name: "Readymade Suites",
            slug: "readymade-suites",
            images: [images.bridallehenga, images.bridallehenga1],
            products: [
              {
                id: "rms001",
                name: "Ready-to-Wear Suit Set",
                description: "Complete ready-made salwar suit",
                price: "₹12,999",
                images: [images.bridallehenga, images.bridallehenga1],
                features: [
                  "Ready-Made",
                  "Complete Set",
                  "Immediate Wear",
                  "Convenient",
                ],
              },
            ],
          },
          {
            name: "Anarkali",
            slug: "anarkali",
            images: [images.bridallehenga, images.bridallehenga1],
            products: [
              {
                id: "al001",
                name: "Floor-Length Anarkali",
                description: "Elegant floor-length anarkali suit",
                price: "₹18,999",
                images: [images.bridallehenga, images.bridallehenga1],
                features: ["Anarkali", "Floor-Length", "Regal", "Traditional"],
              },
            ],
          },
          {
            name: "Straight Cut Suit",
            slug: "straight-cut",
            images: [images.designerlehenga, images.designerlehenga1],
            products: [
              {
                id: "sc001",
                name: "Straight Cut Suit Set",
                description: "Classic straight cut salwar suit",
                price: "₹14,499",
                images: [images.designerlehenga, images.designerlehenga1],
                features: [
                  "Straight Cut",
                  "Classic",
                  "Comfortable",
                  "Everyday Wear",
                ],
              },
            ],
          },
          {
            name: "Sharara Suit",
            slug: "sharara-suit",
            images: [images.bridallehenga, images.bridallehenga1],
            products: [
              {
                id: "ss001",
                name: "Traditional Sharara Set",
                description: "Elegant sharara suit with dupatta",
                price: "₹21,999",
                images: [images.bridallehenga, images.bridallehenga1],
                features: ["Sharara", "Flared", "Traditional", "Festive"],
              },
            ],
          },
          {
            name: "Palazzo Suit",
            slug: "palazzo-suit",
            images: [images.bridallehenga, images.bridallehenga1],
            products: [
              {
                id: "ps001",
                name: "Modern Palazzo Suit",
                description: "Contemporary palazzo style suit",
                price: "₹16,999",
                images: [images.bridallehenga, images.bridallehenga1],
                features: ["Palazzo", "Modern", "Comfortable", "Trendy"],
              },
            ],
          },
        ],
      },
      {
        name: "Plus Size & Special",
        children: [
          {
            name: "Plus Size Salwar Kameez",
            slug: "plus-size",
            images: [images.bridallehenga, images.bridallehenga1],
            products: [
              {
                id: "pls001",
                name: "Plus Size Anarkali",
                description: "Beautiful anarkali for plus size",
                price: "₹22,999",
                images: [images.bridallehenga, images.bridallehenga1],
                features: [
                  "Plus Size",
                  "Flattering",
                  "Comfortable",
                  "Custom Fit",
                ],
              },
            ],
          },
          {
            name: "Indowestern",
            slug: "indowestern",
            images: [images.bridallehenga, images.bridallehenga1],
            products: [
              {
                id: "iw001",
                name: "Fusion Indowestern Suit",
                description: "Modern fusion of Indian and Western",
                price: "₹19,999",
                images: [images.bridallehenga, images.bridallehenga1],
                features: ["Fusion", "Modern", "Unique", "Contemporary"],
              },
            ],
          },
          {
            name: "Evening Look",
            slug: "evening-look",
            images: [images.bridallehenga, images.bridallehenga1],
            products: [
              {
                id: "el001",
                name: "Evening Gown Suit",
                description: "Elegant evening wear suit",
                price: "₹24,999",
                images: [images.bridallehenga, images.bridallehenga1],
                features: [
                  "Evening Wear",
                  "Elegant",
                  "Formal",
                  "Special Occasion",
                ],
              },
            ],
          },
          {
            name: "Bridal Gowns",
            slug: "bridal-gowns",
            images: [images.bridallehenga, images.bridallehenga1],
            products: [
              {
                id: "bg001",
                name: "Bridal Gown Suit",
                description: "Western style bridal gown",
                price: "₹38,999",
                images: [images.bridallehenga, images.bridallehenga1],
                features: ["Bridal Gown", "Western", "Elegant", "Customizable"],
              },
            ],
          },
        ],
      },
      {
        name: "Unstitched Salwars",
        children: [
          {
            name: "Embroidery Unstitched Salwars",
            slug: "embroidery-unstitched",
            images: [images.bridallehenga, images.bridallehenga1],
            products: [
              {
                id: "eus001",
                name: "Embroidered Unstitched Set",
                description: "Unstitched fabric with embroidery",
                price: "₹15,999",
                images: [images.bridallehenga, images.bridallehenga1],
                features: [
                  "Unstitched",
                  "Embroidered",
                  "Custom Tailoring",
                  "Premium Fabric",
                ],
              },
            ],
          },
          {
            name: "Cotton Unstitched Salwars",
            slug: "cotton-unstitched",
            images: [images.bridallehenga, images.bridallehenga1],
            products: [
              {
                id: "cus001",
                name: "Pure Cotton Unstitched",
                description: "Breathable cotton fabric set",
                price: "₹8,999",
                images: [images.bridallehenga, images.bridallehenga1],
                features: ["Cotton", "Unstitched", "Breathable", "Summer Wear"],
              },
            ],
          },
          {
            name: "Banarasi Unstitched Salwars",
            slug: "banarasi-unstitched",
            images: [images.designerlehenga, images.designerlehenga1],
            products: [
              {
                id: "bus001",
                name: "Banarasi Silk Unstitched",
                description: "Premium Banarasi silk fabric",
                price: "₹28,999",
                images: [images.designerlehenga, images.designerlehenga1],
                features: [
                  "Banarasi Silk",
                  "Unstitched",
                  "Premium",
                  "Traditional",
                ],
              },
            ],
          },
          {
            name: "Paithani Unstitched Salwars",
            slug: "paithani-unstitched",
            images: [images.bridallehenga, images.bridallehenga1],
            products: [
              {
                id: "pus001",
                name: "Paithani Unstitched Fabric",
                description: "Authentic Paithani fabric",
                price: "₹32,999",
                images: [images.bridallehenga, images.bridallehenga1],
                features: ["Paithani", "Unstitched", "Heritage", "Zari Work"],
              },
            ],
          },
        ],
      },
    ],
  },
};

// Helper function to find subcategory by slug
export const getSubCategoryBySlug = (slug) => {
  for (const category in categoryData) {
    const categoryItem = categoryData[category];
    for (const subCategory of categoryItem.subCategories) {
      for (const child of subCategory.children) {
        if (child.slug === slug) {
          return {
            ...child,
            categoryTitle: categoryItem.title,
            subCategoryName: subCategory.name,
          };
        }
      }
    }
  }
  return null;
};

// Helper function to find product by slug (alias for backward compatibility)
export const getProductDataBySlug = (slug) => {
  return getSubCategoryBySlug(slug);
};

// Helper function to find product by ID
export const getProductById = (productId) => {
  for (const category in categoryData) {
    const categoryItem = categoryData[category];
    for (const subCategory of categoryItem.subCategories) {
      for (const child of subCategory.children) {
        if (child.products) {
          const product = child.products.find((p) => p.id === productId);
          if (product) {
            return {
              ...product,
              categoryTitle: categoryItem.title,
              subCategoryName: subCategory.name,
              subCategorySlug: child.slug,
            };
          }
        }
      }
    }
  }
  return null;
};

// Helper function to get all products for a main category
export const getAllProductsForCategory = (categorySlug) => {
  const category = categoryData[categorySlug];
  if (!category) return [];

  const allProducts = [];
  category.subCategories.forEach((subCat) => {
    subCat.children.forEach((child) => {
      if (child.products) {
        child.products.forEach((product) => {
          allProducts.push({
            ...product,
            subCategory: child.name,
            mainCategory: category.title,
          });
        });
      }
    });
  });

  return allProducts;
};
