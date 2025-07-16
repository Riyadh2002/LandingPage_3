
import heroImage from "../assets/images/hero.png";
import man from "../assets/images/man.png";
import women from "../assets/images/women.png";
import newArival_1 from "../assets/images/women.png";
import newArival_2 from "../assets/images/newArivalWomen.png";
import newArival_3 from "../assets/images/newArivalWomen2.png";
import newArivalMan from "../assets/images/newArivalMan.png";
import whatsNew_1 from "../assets/images/whatsNew-1.png";
import whatsNew_2 from "../assets/images/whatsNew-2.png";
import whatsNew_3 from "../assets/images/whatsNew-3.png";
import whatsNewImage from "../assets/images/whatsNew-1.png";


export const heroSection = [
  {
    title: "Look elegant? Start with your mind",
    subtitle: "Al Amin — Founder",
    description:
      "We believe that people should have access to the latest brands and fashion trends, no matter their post code.",
    cta: "Explore More",
    image: heroImage
  },
];

export const categorySection = [
  {
    label: "Shop for Men",
    image:man,
  },
  {
    label: "Shop for Women",
    image: women,
  },
  {
    title: "Be the first to Know about new styles",
    description:
      "We believe that people should have access to the latest brands and fashion trends, no matter their post code. This is why our collection of men’s and women’s clothing are designed to speak to every person who lives for the good times, regardless of location.",
    stats: [
      { label: "Women", value: 50 },
      { label: "Mens", value: 72 },
      { label: "New Arrival", value: 10 },
    ],
  },
];

export const newArrivals = [
  {
    title: "New Arrival",
    items: [
      {
        name: "Agnes gathered zebra-print crepe midi dress",
        price: "USD 49.99",
        image:newArival_1,
      },
      {
        name: "Off-the-shoulder metallic coupe printed silk-blend top",
        price: "USD 49.99",
        image:newArival_2,
      },
      {
        name: "Open-back ruffled metallic striped taffeta top",
        price: "USD 49.99",
        image:newArival_3,
      },
    ],
    featured: {
      name: "New - Tinder Light Wash Denim Jacket",
      price: "USD 49.99",
      cta: "Buy Now",
      image: newArivalMan,
    },
  },
];

export const giveawaysSection = {
  title: "Special offers and free giveaways?",
  inputPlaceholder: "Enter your email...",
  buttonLabel: "Submit",
};

export const whatsNew = [
  {
    title: "What's New?",
    items: [
      {
        heading: "How to wash your clothes properly?",
        cta: "Read More",
        image:whatsNewImage,
      },
      {
        heading: "Your Favourites jeans Fit Guide Refresh",
        description:
          "If you're making an effort to move towards a more sustainable approach to your wardrobe",
        image:whatsNew_1,
      },
      {
        heading: "But how does one make this beachside staple?",
        description:
          "If you're making an effort to move towards a more sustainable approach to your wardrobe",
        image:whatsNew_2,
      },
      {
        heading: "Stylist's Fashion Features Editor Billie Bhatti",
        description:
          "If you're making an effort to move towards a more sustainable approach to your wardrobe",
        image:whatsNew_3,
      },
    ],
  },
];
