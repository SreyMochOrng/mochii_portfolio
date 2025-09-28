import React from "react";

const ProjectCard = ({ image, title, description, tags, index }) => {
  const isReversed = index % 2 === 1; // Even index -> reverse layout

  return (
    <div
      className={`h-96 bg-primary100 shadow-md rounded-2xl flex flex-col md:flex-row ${
        isReversed ? "md:flex-row-reverse" : ""
      } md:text-left overflow-hidden`}
    >
      {/* Image */}
      <div className="w-full md:w-1/2 h-48 md:h-auto relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain p-4 md:rounded-l-2xl"
        />
      </div>

      {/* Content */}
      <div className="pt-9 p-6 flex flex-col items-start gap-4 text-primary950 flex-1 bg-primary50">
        <h2 className="text-3xl font-semibold">{title}</h2>
        <p className="text-left text-base text-primary900">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-primary950 bg-primary50 border border-primary300 px-5 py-2 rounded-full text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
