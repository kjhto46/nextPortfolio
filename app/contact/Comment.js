"use client";

import { useEffect, useRef, useState } from "react";

export default function ShowComment() {
  const inputE1 = useRef();
  const inputE2 = useRef();
  let [commName, setCommName] = useState("");
  let [comment, setComment] = useState("");

  let [data, setData] = useState([]);

  const fetchComments = () => {
    fetch("/api/comment/list")
      .then((r) => r.json())
      .then((result) => {
        setData(result);
      });
  };
  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <>
      <div className="showComment">
        <ul>
          {data.length > 0 ? (
            data.map((a, i) => (
              <li key={i}>
                <h3>{a.author}</h3>
                <p>{a.content}</p>
                <span>{a.date}</span>
              </li>
            ))
          ) : (
            <>
              <li>Loading</li>
              <li>Loading</li>
              <li>Loading</li>
            </>
          )}
        </ul>
      </div>
      <div className="inputArea">
        <div className="bg"></div>
        <div className="inputDiv">
          <input
            onChange={(e) => {
              setCommName(e.target.value);
            }}
            value={commName}
            ref={inputE1}
            placeholder="이름을 입력해주세요."
          />
          <input
            onChange={(e) => {
              setComment(e.target.value);
            }}
            value={comment}
            ref={inputE2}
            placeholder="내용을 입력해주세요."
          />
          <button
            onClick={() => {
              if (commName === "") {
                alert("이름을 입력해주세요.");
                return inputE1.current.focus();
              }
              if (comment === "") {
                alert("내용을 입력해주세요");
                return inputE2.current.focus();
              }
              const now = new Date();
              let year = now.getFullYear();
              let month = now.getMonth();
              let date = now.getDate();
              let hours = now.getHours();
              let minutes = now.getMinutes();
              let seconds = now.getSeconds();
              const krDate = `${year}년 ${month}월 ${date}일 ${hours}:${minutes}:${seconds}`;
              console.log(commName, comment);
              fetch("/api/comment/new", {
                method: "POST",
                body: JSON.stringify({
                  author: commName,
                  comment: comment,
                  date: krDate,
                }),
              })
                .then((r) => r.json())
                .then((result) => {
                  fetchComments();
                  setCommName("");
                  setComment("");
                });
            }}
          >
            댓글 전송
          </button>
        </div>
      </div>
    </>
  );
}
