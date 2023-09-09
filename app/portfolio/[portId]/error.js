'use client'

import Link from "next/link";

export default function Error({error, reset}){
  return (
    <div className="sub">
      <div className="inner">
      <h4>404</h4>
      <p>없는 게시물입니다.</p>
        <Link href="/">메인 대시보드로 돌아가기</Link>
      </div>
    </div>
  )
}