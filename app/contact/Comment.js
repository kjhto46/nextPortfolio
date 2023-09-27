"use client";

import { useEffect, useRef, useState } from "react";

export default function ShowComment() {
  const inputE1 = useRef();
  const inputE2 = useRef();
  const textareaE1 = useRef();
  let [commName, setCommName] = useState("");
  let [commPass, setCommPass] = useState("");
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

  const [isActive, setIsActive] = useState(false);

  const handleFocus = () => {
    setIsActive(true);
  };

  const handleBlur = () => {
    setIsActive(false);
  };

  const handleDelete = (_id) => {
    const password = prompt("비밀번호를 입력하세요.");

    if (!password) {
      return; // 비밀번호가 입력되지 않으면 삭제 요청 중단
    }

    fetch("/api/comment/delete", {
      method: "POST",
      body: JSON.stringify({
        _id,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        alert(result.message);
        fetchComments(); // 댓글 목록 갱신
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <div className="showComment">
        <ul>
          {data.length > 0 ? (
            data.map((a, i) => (
              <li key={i}>
                <h3>{a.author}</h3>
                <span>{a.date}</span>
                <p>{a.content}</p>
                <button
                  onClick={() => {
                    handleDelete(a._id);
                  }}
                ></button>
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
      <div className={`inputArea ${isActive ? "active" : ""}`}>
        <div className="bg"></div>
        <div className="inputDiv">
          <ul>
            <li>
              <input
                onChange={(e) => {
                  setCommName(e.target.value);
                }}
                value={commName}
                ref={inputE1}
                placeholder="닉네임을 입력해주세요."
              />
            </li>
            <li>
              <input
                onChange={(e) => {
                  setCommPass(e.target.value);
                }}
                type="password"
                value={commPass}
                ref={inputE2}
                placeholder="비밀번호를 입력해주세요."
              />
            </li>
            <li>
              <textarea
                onChange={(e) => {
                  setComment(e.target.value);
                }}
                value={comment}
                ref={textareaE1}
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder="내용을 입력해주세요."
              />
            </li>
          </ul>
        </div>
      </div>
      <div className="commentBtn">
        <button
          onClick={() => {
            if (commName === "") {
              alert("이름을 입력해주세요.");
              return inputE1.current.focus();
            }
            if (comment === "") {
              alert("비밀번호를 입력해주세요");
              return inputE2.current.focus();
            }
            if (comment === "") {
              alert("내용을 입력해주세요");
              return textareaE1.current.focus();
            }
            const now = new Date();
            let year = now.getFullYear();
            let month = now.getMonth();
            let date = now.getDate();
            let hours = now.getHours();
            let minutes = now.getMinutes();
            let seconds = now.getSeconds();
            const krDate = `${year}년 ${month}월 ${date}일 ${hours}:${minutes}:${seconds}`;
            fetch("/api/comment/new", {
              method: "POST",
              body: JSON.stringify({
                author: commName,
                comment: comment,
                password: commPass,
                date: krDate,
              }),
            })
              .then((r) => r.json())
              .then((result) => {
                fetchComments();
                setCommName("");
                setCommPass("");
                setComment("");
              });
          }}
        >
          <p>Comment</p>
        </button>
      </div>
    </>
  );
}
