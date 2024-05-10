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
            className="w-11/12 lg:w-6/12 xl:w-3/12 rounded"
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