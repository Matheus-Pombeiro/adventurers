import { forwardRef } from "react";

const Dialog = forwardRef(({ children, toggleDialog }, ref) => {
    return (
        <dialog 
            ref={ref}
            onClick={(e) => {
                if (e.currentTarget === e.target) {
                    toggleDialog();
                }
            }}
            className="rounded-sm"
        >
            <div className="p-5 flex flex-col justify-center items-center">
                {children}
                <button 
                    onClick={toggleDialog}
                    className="btn"
                >
                    Close
                </button>
            </div>
        </dialog>
    )
});

export default Dialog;