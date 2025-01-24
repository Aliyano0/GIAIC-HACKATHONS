import { client } from "@/sanity/lib/client";

export const getHeroImage = async () => {
  const heroImage = await client.fetch(`
      *[_type == "product" && slug.current=="high-quality-modern-sofa"] {
    imagePath,
}`);
  return heroImage ? heroImage[0].imagePath : "";
};

export const getHomeProducts = async () => {
  // Fetching image of each category to display on category banner.
  const bedImage = await client.fetch(`
      *[_type == "product" && category=="Bed"][1] {
    imagePath
}`);
  const chairImage = await client.fetch(`
        *[_type == "product" && category=="Chair"][0] {
      imagePath
  }`);
  const sofaImage = await client.fetch(`
        *[_type == "product" && category=="Sofa"][1] {
      imagePath
  }`);
  const tableImage = await client.fetch(`
        *[_type == "product" && category=="Table"][2] {
      imagePath
  }`);
  const products = [];
  products.push(
    bedImage.imagePath,
    chairImage.imagePath,
    sofaImage.imagePath,
    tableImage.imagePath
  );
  return products;
};


export const customerReviews = [
  {
    id: 1,
    name: "James L..",
    paragraph: `"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."`,
  },
  {
    id: 2,
    name: "Sarah M.",
    paragraph: `"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."`,
  },
  {
    id: 3,
    name: "Alex K.",
    paragraph: `"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”`,
  },
  {
    id: 4,
    name: "James L.",
    paragraph: `"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”`,
  },
  {
    id: 5,
    name: "Moore",
    paragraph: `"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."`,
  },
  {
    id: 9,
    name: "Moore",
    paragraph: `"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."`,
  },
  {
    id: 8,
    name: "Moore",
    paragraph: `"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."`,
  },
];