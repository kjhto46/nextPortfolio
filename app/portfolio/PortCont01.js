"use client";
import Link from "next/link";

export default function PortCont01({ portResult }) {
  return (
    <ul>
      {portResult.map((a, i) => {
        return (
          <li key={i}>
            <Link prefetch={false} href={"/portfolio/" + portResult[i]._id}>
              <figure style={{ backgroundImage: `url(${portResult[i].img01})` }}>
              </figure>
              <div>
                <h2>{portResult[i].ptitle}</h2>
                <p>{portResult[i].subtxt}</p>
                {portResult[i]?.skillSet?.length > 0 && (
                  <ol>
                    {portResult[i].skillSet.map((skill, skillIndex) => (
                      <li key={skillIndex}>{skill}</li>
                    ))}
                  </ol>
                )}
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
