import tour1 from "./images/croatia-351850_1280.jpg";
import tour2 from "./images/polynesia-3021072_1280.jpg";
import tour3 from "./images/split-1590211_1280.jpg";
import tour4 from "./images/beach-4405371_1280.jpg";
import tour5 from "./images/drink-84533_1280.jpg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
  { id: 1, href: "https://www.facebook.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.x.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.squarespace.com", icon: "fab fa-squarespace" },
];

export const services = [
  { id: 1, icon: "fas fa-wallet fa-fw", title: "saving money", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia." },
  { id: 2, icon: "fas fa-tree fa-fw", title: "endless hiking", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia." },
  { id: 3, icon: "fas fa-socks fa-fw", title: "amazing comfort", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia." },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    date: "august 26th, 2025",
    title: "Tibet Adventure",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "china",
    duration: 6,
    price: "$2100",
  },
  {
    id: 2,
    image: tour2,
    date: "october 1th, 2025",
    title: "Best of Java",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "indonesia",
    duration: 6,
    price: "from $1400",
  },
  {
    id: 3,
    image: tour3,
    date: "september 15th, 2025",
    title: "Explore Croatia",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "croatia",
    duration: 6,
    price: "from $3400",
  },
  {
    id: 4,
    image: tour4,
    date: "january 15th, 2025",
    title: "Cuba highlights",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "cuba",
    duration: 8,
    price: "from $5400",
  },
  {
    id: 5,
    image: tour5,
    date: "january 15th, 2025",
    title: "Maldivi dream",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "maldivi",
    duration: 8,
    price: "from $4400",
  },
];
