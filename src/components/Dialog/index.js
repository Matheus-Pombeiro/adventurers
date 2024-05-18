import { forwardRef } from "react";

import { useTranslation } from "react-i18next";

const Dialog = forwardRef(({ children, toggleDialog }, ref) => {
    const { t } = useTranslation(); // Translator reference
    
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
                    {t("Close")}
                </button>
            </div>
        </dialog>
    )
});

export default Dialog;