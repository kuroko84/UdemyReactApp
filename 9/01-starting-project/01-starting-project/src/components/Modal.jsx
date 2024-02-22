import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";

const Modal = React.forwardRef(({ children, buttonCaption }, ref) => {
  const dialogRef = React.useRef();
  React.useImperativeHandle(ref, () => {
    return {
      open() {
        dialogRef.current.showModal();
      },
    };
  });
  return ReactDOM.createPortal(
    <dialog
      ref={dialogRef}
      className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
    >
      {children}
      <form method="dialog" className="mt-4 text-right">
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
