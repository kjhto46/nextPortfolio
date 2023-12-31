import "../common/css/sub.scss";
import SubTit from "../components/SubTit";
import ShowComment from "./Comment";

export default function Contact() {
  return (
    <>
    <title>Contact</title>
      <div className="sub contact">
        <div className="inner">
          <SubTit titTxt="Contact" />
          <div className="flexArea">
            <ul className="right">
              <li>
                <h3>Phone Number</h3>
                <a href="tel:01023083892">010-2308-3892</a>
              </li>
              <li>
                <h3>E-mail</h3>
                <a href="mailto:tony1996kjh@naver.com">tony1996kjh@naver.com</a>
              </li>
              <li>
                <h3>Github</h3>
                <a href="https://github.com/kjhto46" target="_blank">
                  https://github.com/kjhto46
                </a>
              </li>
            </ul>
            <div className="left">
              <ShowComment />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
