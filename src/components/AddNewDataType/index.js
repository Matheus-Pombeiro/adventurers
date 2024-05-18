import { useState } from "react";

import { v4 as uuidv4 } from 'uuid';

import InputRadio from "../InputRadio";
import InputText from "../InputText";

const AddNewDataType = ({ toRegisterNewTypeData, toggleDialog }) => {
    // Declare the states that contains the type of data choosed by the user and the value inserted by them
    const [data, setData] = useState("Race");
    const [dataValue, setDataValue] = useState("");
    const [color, setColor] = useState("#000000");

    // Declare a function that cleans the state of the value's data and its input (text)
    const cleanDataValue = (value) => {
        value === "Race" ? setDataValue("")
            : value === "Class" ? setDataValue("")
            : setDataValue("");
    };

    // Declare a function that registers the new type of data
    const toSubmit = (e) => {
        e.preventDefault();     // Prevents the form's automatic behavior

        // Send the data's type to the above component
        if (data === "Specialization") {
            toRegisterNewTypeData({
                id: uuidv4(),
                data: data,
                name: dataValue,
                color: color
            }); 
        } else {
            toRegisterNewTypeData({
                id: uuidv4(),
                data: data,
                name: dataValue
            });
        }

        // Restore the state's values to their initial values
        setData("Race");
        setDataValue("");

        toggleDialog();     // Close the modal
    };

    const inputRadioName = "Data";  // Declare a const that contains the default value for the input's name
    
    return (
        <form
            onSubmit={toSubmit}
            className="form"
        >
            <h2 className="h2">Add a New Type of Data</h2>

            <div className="space-y-2">
                <label
                    htmlFor="Race"
                    className="label"
                >
                    Choose a Type
                </label>
                <div>
                    <InputRadio 
                        data={"Race"}
                        name={inputRadioName}
                        value={"Race"}
                        toChange={value => [setData(value), cleanDataValue(value)]}
                    />
                    <InputRadio 
                        data={"Class"}
                        name={inputRadioName}
                        value={"Class"}
                        toChange={value => [setData(value), cleanDataValue(value)]}
                    />
                    <InputRadio 
                        data={"Specialization"}
                        name={inputRadioName}
                        value={"Specialization"}
                        toChange={value => [setData(value), cleanDataValue(value)]}
                    />
                </div>
            </div>

            {(data === "Race" &&
                <InputText 
                    data={"New Race"}
                    required={true}
                    value={dataValue}
                    toChange={value => setDataValue(value)}
                />)

                || (data === "Class" &&
                    <InputText 
                        data={"New Class"}
                        required={true}
                        value={dataValue}
                        toChange={value => setDataValue(value)}
                    />)

                || (data === "Specialization" &&
                    <InputText 
                        data={"New Specialization"}
                        required={true}
                        value={dataValue}
                        toChange={value => setDataValue(value)}
                    />
                )
            }

            {data === "Specialization" &&
                <label
                    className="label"
                    htmlFor="color"
                >
                    Choose the Color
                </label>
            }

            {data === "Specialization" &&
               <input 
                    type="color"
                    id="color"
                    className="w-80 p-0.5"
                    required={true}
                    value={color}
                    onChange={e => setColor(e.target.value)}
                />
            }

            <button
                type="submit"
                className="btn"
            >
                Add a New Type of Data
            </button>
        </form>
    )
};

export default AddNewDataType;