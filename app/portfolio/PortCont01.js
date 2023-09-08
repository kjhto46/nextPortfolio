"use client";
import Link from "next/link";

export default function PortCont01({ portResult }) {
  return (
      <ul>
         {portResult.map((a, i) => {
         return(
            <li key={i}>
               <Link prefetch={false} href={'/portfolio/' + portResult[i]._id}>
                  <h2>{portResult[i].ptitle}</h2>
               </Link>
            </li>
            )
         })}
      </ul>
  );
}
