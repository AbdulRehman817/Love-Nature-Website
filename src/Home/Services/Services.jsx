import React from "react";
import "./Services.css";

const Services = () => {
  const services = [
    {
      title: "Connecting You with Nature",
      description: `Crafting digital experiences inspired by the harmony  and beauty of the natural world. Let your online presence reflect the calm and serenity of nature.`,
      image:
        "https://websitedemos.net/love-nature-02/wp-content/uploads/sites/988/2021/11/service-1.jpg",
    },
    {
      title: "Visuals Inspired by the Earth",
      description:
        "Designs rooted in the colors and textures of nature, creating a visual language that speaks of harmony and balance.",
      image:
        "https://websitedemos.net/love-nature-02/wp-content/uploads/sites/988/2021/11/service-2.jpg",
    },
    {
      title: "Stories from the Heart of Nature",
      description:
        "Sharing the wonders of the natural world through engaging content that educates, inspires, and connects people with the environment",
      image:
        "https://websitedemos.net/love-nature-02/wp-content/uploads/sites/988/2021/11/service-3.jpg",
    },
  ];

  return (
    <div className="services pt-10">
      <h2 className="h2">Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <img src={service.image} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
