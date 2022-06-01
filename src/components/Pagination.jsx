import React from "react";

export const Pagination = (props) => {
  const [pageup, setpageup] = React.useState(1);
  return (
    <div
      class="btn-group d-flex justify-content-center"
      role="group"
      aria-label="Basic outlined example"
    >
      <button
        type="button"
        onClick={() => {
          if (pageup > 1) {
              props.setpage(pageup - 1);
              setpageup(pageup - 1)
        }}}
        class="btn btn-outline-primary"
      >
        {"<"}
      </button>
      <button type="button" disabled={true} class="btn btn-outline-primary">
        {props.page}
      </button>
      <button
        type="button"
        onClick={() => {
          props.setpage(pageup + 1);
          setpageup(pageup + 1)
        }}
        class="btn btn-outline-primary"
      >
        {">"}
      </button>
    </div>
  );
};
