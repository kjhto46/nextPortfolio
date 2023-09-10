"use client";

export default function PortCont02({ portResult2 }) {
  return (
   <div className="portUl">
      <h2 className="poppins">Project List</h2>
    <ul>
      {portResult2.map((a, i) => {
        return (
          <li key={i}>
            <h3>{portResult2[i].ptitle}</h3>
            <a target="_blank" href={portResult2[i].pUrl}>View Project</a>
          </li>
        );
      })}
    </ul>
    </div>
  );
}
