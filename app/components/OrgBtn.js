export default function OrgBtn(props) {
  return (
    <>
      <p>{props.viewtxt}</p>
      <span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 15L15 1" stroke="#ED7B34" strokeWidth="2" />
          <rect x="5.41211" width="10.5882" height="1.76471" fill="#ED7B34" />
          <rect
            x="16"
            width="10.5882"
            height="1.76471"
            transform="rotate(90 16 0)"
            fill="#ED7B34"
          />
        </svg>
      </span>
    </>
  );
}
