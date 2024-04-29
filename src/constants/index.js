/**
 * Defines the navigation links displayed in the header of the application.
 * @module header
 */
export const navigation = [
  { name: "Services", to: "services" },
  { name: "Contact", to: "contact" },
];

/**
 * Contains the list of features included in pricing packages.
 * @module pricing
 */
export const includedFeatures = [
  "Customized Backdrop",
  "Balloon Garland",
  "Wooden or Neon Sign",
  "Decorative Accents",
  "Cake and Cupcakes Stand",
  "Delivery, Setup and Cleanup",
];

/**
 * Contains customer reviews and associated information.
 * @module review
 */
export const reviews = [
  {
    text: '"The decoration services provided were truly exceptional. They made my event look amazing."',
    avatar:
      "https://images.pexels.com/photos/2905825/pexels-photo-2905825.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Emma Thompson",
  },
  {
    text: '"The photography service were exceptional! The team went above and beyond to ensure everything was perfect."',
    avatar:
      "https://images.pexels.com/photos/9929131/pexels-photo-9929131.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Michael Johnson",
  },
  {
    text: '"Working with Auguri was an absolute pleasure. Every detail was perfect, adding a touch of elegance to our special day!"',
    avatar:
      "https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Sophia Garcia",
  },
];

/**
 * Contains information about the various services offered by the application.
 * @module services
 */
export const services = [
  {
    name: "Photoshot Decoration",
    imageSrc: "/PhotoshotDecor.jpg",
    imageAlt: "Kind sitting in a bench with a balloon decoration",
  },
  {
    name: "Birthday Decoration",
    imageSrc: "/BirthdayDecor.jpg",
    imageAlt: "Baby and a birthday cake",
  },
  {
    name: "Romantic Dinner Decoration",
    imageSrc: "/backyardDinner.jpg",
    imageAlt: "Table decorated with flowers",
  },
  {
    name: "Reunion Decoration",
    imageSrc: "/ReunionDecor.jpg",
    imageAlt: "Balloon arc decoration",
  },
  {
    name: "Newborn Photoshot",
    imageSrc: "/NewbornPhoto.jpg",
    imageAlt: "Newborn sleeping",
  },
  {
    name: "Wedding Photoshot",
    imageSrc: "/WeddingPhoto.jpg",
    imageAlt: "Recentlly married couple",
  },
];
