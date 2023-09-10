'use client'

import Link from "next/link";

export default function Error({error, reset}){
  return (
    <div className="sub">
      <div className="inner">
      <h4>404</h4>
      <p>없는 게시물입니다.</p>
        <Link href="/">포트폴리오 리스트로 돌아가기</Link>
      </div>
    </div>
  )
}