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
                id: 1,
                name: "Golden Zari Kanchipuram Saree",

                images: [
                  images.kachipuramsilkmodellightgreen,
                  images.kachipuram2,
                  images.kachipuram2a,
                  images.kachipuram2b,
                ],
              },
              {
                id: 2,
                name: "Peacock Motif Kanchipuram",

                images: [
                  images.kachipuramsilkmodelnavyblue,
                  images.kachipuram3,
                  images.kachipuram3a,
                  images.kachipuram3b,
                ],
              },
              {
                id: 3,
                name: "Maroon Traditional Kanchipuram",

                images: [
                  images.kachipuramsilkmodelgreen,
                  images.kachipuram4,
                  images.kachipuram4a,
                  images.kachipuram4b,
                  images.kachipuram4c,
                ],
              },
              {
                id: 4,
                name: "Maroon Traditional Kanchipuram",

                images: [
                  images.kachipuramsilkmodelpurple,
                  images.kachipuram5,
                  images.kachipuram5a,
                  images.kachipuram5b,
                  images.kachipuram5c,
                ],
              },
            ],
          },
          {
            name: "Kanchipuram Pure Half Fine Jari",
            slug: "kanchipuram-half-fine-jari",
            products: [
              {
                id: "kphj001",
                name: "Half Fine Jari Temple Border",
                images: [
                  images.kachipuramhalffinejarimodel,
                  images.kachipuram2jari,
                  images.kachipuram2jari1,
                ],
              },
              {
                id: "kphj002",
                name: "Floral Motif Half Jari",
                images: [
                  images.kachipurammodelred,
                  images.kachipurambrocket1,
                  images.kanchipurambrocket1a,
                  images.kanchipurambrocket1b,
                  images.kanchipurambrocket1c,
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
            products: [
              {
                id: 1,
                name: "Heavy Brocade Banarasi Silk",
                images: [images.banarasisilks1],
              },
              {
                id: 2,
                name: "Butidar Banarasi Silk",
                images: [images.banarasisilks2],
              },
              {
                id: 3,
                name: "Butidar Banarasi Silk",
                images: [images.banarasisilks3],
              },
              {
                id: 4,
                name: "Butidar Banarasi Silk",
                images: [images.banarasisilks4],
              },
              {
                id: 5,
                name: "Butidar Banarasi Silk",
                images: [images.banarasisilks5],
              },
              {
                id: 6,
                name: "Butidar Banarasi Silk",
                images: [images.banarasisilks6],
              },
              {
                id: 7,
                name: "Butidar Banarasi Silk",
                images: [images.banarasisilks7],
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
            products: [
              {
                id: "bo001",
                name: "Organza Banarasi Saree",
                images: [
                  images.banarasiorganzamodel,
                  images.banarasiorganza,
                  images.banarasiorganzaa1,
                ],
              },
            ],
          },
          {
            name: "Banarasi Georgette Saree",
            slug: "banarasi-georgette",
            products: [
              {
                id: 1,
                name: "Georgette Banarasi Saree",
                images: [
                  images.banarasigeoegettemodelyello,
                  images.banarsigeorgette1,
                ],
              },
              {
                id: 2,
                name: "Georgette Banarasi Saree",
                images: [
                  images.banarasigeoegettemodel,
                  images.banarsigeorgette2,
                ],
              },
              {
                id: 3,
                name: "Georgette Banarasi Saree",
                images: [
                  images.banarasigeoegettemodelred,
                  images.banarsigeorgette3,
                ],
              },
              {
                id: 4,
                name: "Georgette Banarasi Saree",
                images: [
                  images.banarasigeoegettemodelblue,
                  images.banarsigeorgette4,
                ],
              },
              {
                id: 5,
                name: "Georgette Banarasi Saree",
                images: [images.banarsigeorgette5],
              },
            ],
          },
          {
            name: "Banarasi Tissue Saree",
            slug: "banarasi-tissue",
            products: [
              {
                id: 1,
                name: "Tissue Silk Banarasi",
                images: [
                  images.banarasitiisuemodel,
                  images.banarasitissues,
                  images.banarasitissues1,
                ],
              },
              // {
              //   id: 2,
              //   name: "Tissue Silk Banarasi",
              //   images: [images.banarasitissues1],
              // },
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
            products: [
              {
                id: 1,
                name: "Contemporary Designer Saree",
                images: [
                  images.desginersaree2,
                  images.desiner1,
                  images.desiner1a,
                  images.desiner1b,
                ],
              },
              {
                id: 2,
                name: "Contemporary Designer Saree",
                images: [images.desiner2a, images.desiner2b, images.desiner2c],
              },
              {
                id: 3,
                name: "Contemporary Designer Saree",
                images: [
                  images.desginersreee3,
                  images.desiner3,
                  images.desiner3a,
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
            products: [
              {
                id: 1,
                name: "Embroidered Organza Saree",
                images: [images.organzamodel, images.organza, images.organza1],
              },
              {
                id: 2,
                name: "Embroidered Organza Saree",
                images: [images.organza2],
              },
              {
                id: 3,
                name: "Embroidered Organza Saree",
                images: [images.organza3],
              },
              {
                id: 4,
                name: "Embroidered Organza Saree",
                images: [images.organza4],
              },
              {
                id: 5,
                name: "Embroidered Organza Saree",
                images: [images.organza5],
              },
              {
                id: 6,
                name: "Embroidered Organza Saree",
                images: [images.organza6],
              },
              {
                id: 7,
                name: "Embroidered Organza Saree",
                images: [images.organza7],
              },
              {
                id: 8,
                name: "Embroidered Organza Saree",
                images: [images.organza8],
              },
              {
                id: 9,
                name: "Embroidered Organza Saree",
                images: [images.organza9],
              },
              {
                id: 10,
                name: "Embroidered Organza Saree",
                images: [images.organza10],
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
        ],
      },
      {
        name: "Pure Handloom Silk Saree",
        children: [
          {
            name: "Handloom Sarees",
            slug: "handloom-sarees",
            products: [
              {
                id: 1,
                name: "Traditional Handloom Silk",
                images: [
                  images.purehandloommodelblue,
                  images.handloom1,
                  images.handloom1a,
                  images.handloom1b,
                  images.handloom1c,
                ],
              },
              {
                id: 2,
                name: "Traditional Handloom Silk",
                images: [
                  images.purehandloommodelmarron,
                  images.handloom2,
                  images.handloom2a,
                  images.handloom2b,
                  images.handloom2c,
                ],
              },
              {
                id: 3,
                name: "Traditional Handloom Silk",
                images: [
                  images.purehandloommodelnavyblue,
                  images.handloom3,
                  images.handloom3a,
                  images.handloom3b,
                  images.handloom3c,
                ],
              },
              {
                id: 4,
                name: "Traditional Handloom Silk",
                images: [
                  images.purehandloommodelpink,
                  images.handloom4,
                  images.handloom4a,
                  images.handloom4b,
                  images.handloom4c,
                ],
              },
              {
                id: 5,
                name: "Traditional Handloom Silk",
                images: [
                  images.purehandloommodelgray,
                  images.handloom5,
                  images.handloom5a,
                  images.handloom5b,
                  images.handloom5c,
                ],
              },
            ],
          },
          {
            name: "Gadwal Silk",
            slug: "gadwal-silk",
            products: [
              {
                id: 1,
                name: "Gadwal Cotton Silk",
                images: [images.gadwalhandloomsilk],
              },
              {
                id: 2,
                name: "Gadwal Cotton Silk",
                images: [images.gadwalhandloomsilk1],
              },
              {
                id: 3,
                name: "Gadwal Cotton Silk",
                images: [images.gadwalhandloomsilk2],
              },
              {
                id: 4,
                name: "Gadwal Cotton Silk",
                images: [images.gadwalhandloomsilk3],
              },
              {
                id: 5,
                name: "Gadwal Cotton Silk",
                images: [images.gadwalhandloomsilk4],
              },
              {
                id: 6,
                name: "Gadwal Cotton Silk",
                images: [images.gadwalhandloomsilk5],
              },
              {
                id: 7,
                name: "Gadwal Cotton Silk",
                images: [images.gadwalhandloomsilk6],
              },
              {
                id: 8,
                name: "Gadwal Cotton Silk",
                images: [images.gadwalhandloomsilk7],
              },
              {
                id: 9,
                name: "Gadwal Cotton Silk",
                images: [images.gadwalhandloomsilk8],
              },
              {
                id: 10,
                name: "Gadwal Cotton Silk",
                images: [images.gadwalhandloomsilk9],
              },
              {
                id: 11,
                name: "Gadwal Cotton Silk",
                images: [images.gadwalhandloomsilk10],
              },
              {
                id: 12,
                name: "Gadwal Cotton Silk",
                images: [images.gadwalhandloomsilk11],
              },
              {
                id: 13,
                name: "Gadwal Cotton Silk",
                images: [images.gadwalhandloomsilk12],
              },
            ],
          },
          {
            name: "Paithani Sarees",
            slug: "paithani-sarees",
            products: [
              {
                id: 1,
                name: "Traditional Paithani",
                images: [images.handloompaithani1],
              },
              {
                id: 2,
                name: "Traditional Paithani",
                images: [images.handloompaithani2, images.handloompaithani2a],
              },
              {
                id: 3,
                name: "Traditional Paithani",
                images: [images.handloompaithani3, images.handloompaithani3a],
              },
              {
                id: 4,
                name: "Traditional Paithani",
                images: [
                  images.handloompaithaniself1,
                  images.handloompaithaniself1a,
                ],
              },
            ],
          },
          {
            name: "Chanderi Saree",
            slug: "chanderi-saree",
            products: [
              {
                id: 1,
                name: "Lightweight Chanderi",
                images: [images.chanderimodelblue, images.chanderi1],
              },
              {
                id: 2,
                name: "Lightweight Chanderi",
                images: [images.chanderimodelpurple, images.chanderi2],
              },
              {
                id: 3,
                name: "Lightweight Chanderi",
                images: [images.chanderi3],
              },
              {
                id: 4,
                name: "Lightweight Chanderi",
                images: [images.chanderi4],
              },
              {
                id: 5,
                name: "Lightweight Chanderi",
                images: [images.chanderi5],
              },
              {
                id: 6,
                name: "Lightweight Chanderi",
                images: [images.chanderimodeldarkgreen, images.chanderi6],
              },
              {
                id: 7,
                name: "Lightweight Chanderi",
                images: [images.chanderimodeldarkpurple, images.chanderi7],
              },
              {
                id: 8,
                name: "Lightweight Chanderi",
                images: [images.chanderi8],
              },
              {
                id: 9,
                name: "Lightweight Chanderi",
                images: [images.chanderimodelpink, images.chanderi9],
              },
            ],
          },
          {
            name: "Chanderi Tissue",
            slug: "chanderi-tissue",
            products: [
              {
                id: 1,
                name: "Lightweight Chanderi",
                images: [images.chanderitissue],
              },
              {
                id: 2,
                name: "Lightweight Chanderi",
                images: [images.chanderitissue1],
              },
              {
                id: 3,
                name: "Lightweight Chanderi",
                images: [images.chanderitissue2],
              },
              {
                id: 4,
                name: "Lightweight Chanderi",
                images: [images.chanderitissue3],
              },
              {
                id: 5,
                name: "Lightweight Chanderi",
                images: [images.chanderitissue4],
              },
              {
                id: 6,
                name: "Lightweight Chanderi",
                images: [images.chanderitissue5],
              },
              {
                id: 7,
                name: "Lightweight Chanderi",
                images: [images.chanderitissue6],
              },
              {
                id: 8,
                name: "Lightweight Chanderi",
                images: [images.chanderitissue7],
              },
              {
                id: 9,
                name: "Lightweight Chanderi",
                images: [images.chanderitissue8],
              },
            ],
          },
          {
            name: "Ikkat & Patola Saree",
            slug: "ikkat-patola",
            products: [
              {
                id: 1,
                name: "Double Ikkat Saree",
                images: [images.ikkat1],
              },
              {
                id: 2,
                name: "Double Ikkat Saree",
                images: [images.ikkat2],
              },
              {
                id: 3,
                name: "Double Ikkat Saree",
                images: [images.ikkat3],
              },
              {
                id: 4,
                name: "Double Ikkat Saree",
                images: [images.ikkat4],
              },
              {
                id: 5,
                name: "Double Ikkat Saree",
                images: [images.ikkat5],
              },
              {
                id: 6,
                name: "Double Ikkat Saree",
                images: [images.ikkat6],
              },
              {
                id: 7,
                name: "Double Ikkat Saree",
                images: [images.ikkat7],
              },
              {
                id: 8,
                name: "Double Ikkat Saree",
                images: [images.ikkat8],
              },
              {
                id: 9,
                name: "Double Ikkat Saree",
                images: [images.ikkat9],
              },
              {
                id: 10,
                name: "Double Ikkat Saree",
                images: [images.ikkat10],
              },
              {
                id: 11,
                name: "Double Ikkat Saree",
                images: [images.ikkat11],
              },
            ],
          },
          {
            name: "Soft Silk Saree",
            slug: "keta-silk",
            products: [
              {
                id: 1,
                name: "Keta Silk Traditional",
                images: [
                  images.softsilkmodelnavyblue,
                  images.softsilk1,
                  images.softsilk1a,
                ],
              },
              {
                id: 2,
                name: "Keta Silk Traditional",
                images: [
                  images.softsilkmodelgreen,
                  images.softsilk2,
                  images.softsilk2a,
                ],
              },
              {
                id: 3,
                name: "Keta Silk Traditional",
                images: [images.softsilk3, images.softsilk3a],
              },
              {
                id: 4,
                name: "Keta Silk Traditional",
                images: [
                  images.softsilkmodelyellow,
                  images.softsilk4,
                  images.softsilk4a,
                ],
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
            products: [
              {
                id: 1,
                name: "Hand-Painted Kalamkari",
                images: [images.kalamkarimodelbrown, images.kalamkari1],
              },
              {
                id: 2,
                name: "Hand-Painted Kalamkari",
                images: [images.kalamkarimodelgray, images.kalamkari2],
              },
              {
                id: 3,
                name: "Hand-Painted Kalamkari",
                images: [images.kalamkarimodelblack, images.kalamkari3],
              },
              {
                id: 4,
                name: "Hand-Painted Kalamkari",
                images: [images.kalamkarimodelgreen, images.kalamkari4],
              },
            ],
          },
          {
            name: "Silk Printed Saree",
            slug: "silk-printed",
            products: [
              {
                id: 1,
                name: "Printed Pure Silk",
                images: [images.printed1],
              },
              {
                id: 2,
                name: "Printed Pure Silk",
                images: [images.silkprontedpurple, images.printed2],
              },
              {
                id: 3,
                name: "Printed Pure Silk",
                images: [images.printed3],
              },
              {
                id: 4,
                name: "Printed Pure Silk",
                images: [images.printed4],
              },
              {
                id: 5,
                name: "Printed Pure Silk",
                images: [images.printed5],
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
