/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Local Search Engine Web App",
    description:
      "Successfully developed a local business search website using Python Django, enabling users to effortlessly find and explore businesses in their nearby areas. The project showcases my proficiency in web development and database management with Django framework.",
    url: "https://github.com/shindemrunali2000/Local_Search_Engine.git",
  },
  {
    title: "Travel Agency Management System",
    description:
      "Developed a desktop application using Java that facilitates online hotel bookings, providing users with a seamless and user-friendly experience for managing their accommodation reservations. The project leverages Java's robust features to ensure efficient and reliable hotel booking.",
    url: "https://github.com/shindemrunali2000/Travel_Agency_Management_Sys.git",
  },
  {
    title: "Weather Information Website",
    description:
      "Developed a simple website using Django and weather APIs to check the weather details for location. Created a user-friendly interface that allows users to enter a location and instantly get updated weather information.",
    url: "https://imaginative-kataifi-e8a0c3.netlify.app/",
  },
  {
    title: "Atri App",
    description:
      "Atri lab is a Framework for Developing Web Application. Developed and maintained web applications using the Atri Lab web framework, focusing on enhancing user experience through dynamic, responsive design and efficient backend integration",
    url: "https://github.com/shindemrunali2000/Atri_App_Mrunali.git",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
