import { css } from "@emotion/react";

const FloatingButton = () => {
  return (
    <div css={FloatingButtonStyle}>
      <div>
        <button
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
        >
          Top
        </button>
      </div>
      <div>
        <button>🏠</button>
      </div>
    </div>
  );
};

export default FloatingButton;

const FloatingButtonStyle = css`
  position: fixed;

  width: 3rem;

  margin: 1rem;

  z-index: 1;
  right: 0;
  bottom: 0;

  div {
    margin: 1rem 0;
  }
  button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;

    font-size: 1.5rem;
  }
`;
