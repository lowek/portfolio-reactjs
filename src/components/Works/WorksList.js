import React from "react";
import WorksItem from "./WorksItem";

const WorksList = ({ work }) =>
  work.map(work => (
    <WorksItem
      key={work.name}
      href={work.href}
      url={work.url}
      name={work.name}
      img={work.img}
      description={work.description}
      technology={work.technology}
    />
  ));

export default WorksList;
