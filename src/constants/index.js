/**
 * Defines the navigation links displayed in the header of the application.
 * @module header
 */
export const navigation = [
  { name: "Services", to: "services" },
  { name: "Contact", to: "contact" },
  { name: "Reviews", to: "reviews" },
  { name: "Pricing", to: "pricing" },
  { name: "Why Choose us?", to: "chooseUs" },
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
    avatar: "/EmmaThompson.jpeg",
    name: "Emma Thompson",
  },
  {
    text: '"The photography service were exceptional! The team went above and beyond to ensure everything was perfect."',
    avatar: "MichaelJhonson.webp",
    name: "Michael Johnson",
  },
  {
    text: '"Working with Auguri was an absolute pleasure. Every detail was perfect, adding a touch of elegance to our special day!"',
    avatar: "SophiaGarcia.webp",
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

/**
 * Contains information about the main reasons for choosing the service.
 * @module chooseUs
 */

import {
  PaintBrushIcon,
  StarIcon,
  LightBulbIcon,
} from "@heroicons/react/20/solid";

export const listIconSection = [
  {
    icon: PaintBrushIcon,
    title: "Personalized Service.",
    text: " We believe in putting your vision first. Our team takes the time to understand your unique preferences and requirements, ensuring that every detail reflects your style and personality.",
  },
  {
    icon: StarIcon,
    title: "Professional Excellence.",
    text: " With years of experience in the industry, we bring a wealth of knowledge and expertise to every project. From meticulous planning to flawless execution, we strive for perfection in every aspect of your event.",
  },
  {
    icon: LightBulbIcon,
    title: "Creative Innovation.",
    text: " Innovation is at the heart of everything we do. From breathtaking decorations to innovative solutions, we're constantly pushing the boundaries to deliver fresh and inspiring experiences that leave a lasting impression.",
  },
];
