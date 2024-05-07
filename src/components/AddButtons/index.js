import { useRef, useState } from "react";

import { IoMdPersonAdd, IoMdAddCircle } from "react-icons/io";

import AddNewCharacter from "../AddNewCharacter";
import AddNewDataType from "../AddNewDataType";
import Dialog from "../Dialog";

const AddButtons = () => {
    const [dialogContent, setDialogContent] = useState(null)    // Declare the dialog content's state

    const dialogRef = useRef(null)  // Declare the dialog's reference
    
    const toggleDialog = () => {    // Declare the function that opens and closes the dialog
        if (!dialogRef.current) {
            return;
        };

        dialogRef.current.hasAttribute("open")
            ? dialogRef.current.close()
            : dialogRef.current.showModal();
    };

    const buttonProps = {   // Declare some editable dialog's props
        size: 50,
        className: "dark:fill-white transition-all ease-in-out duration-150 hover:scale-110 cursor-pointer"
    };

    return (
        <section className="flex justify-center items-center gap-3">
            <IoMdPersonAdd 
                {...buttonProps}
                onClick={() => {
                    setDialogContent(<AddNewCharacter />)
                    toggleDialog()
                }}
                
            />
            <IoMdAddCircle 
                {...buttonProps}
                onClick={() => {
                    setDialogContent(<AddNewDataType />)
                    toggleDialog()
                }} 
            />

            <Dialog 
                toggleDialog={toggleDialog}
                ref={dialogRef}
            >
                {dialogContent}
            </Dialog>
        </section>
    )
};

export default AddButtons;