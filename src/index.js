import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

const NumDiv = () => {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);

    const redBtn = () => {
        setNum1(num1 + 1);
    };

    const greenBtn = () => {
        setNum2(num2 + 2);
    };

    return (
        <React.Fragment>
            <div className='d-flex justify-content-center align-items-center gap-5 mt-5'>
                <div className="text-center">
                    <button className="btn btn-danger me-2 mb-3" onClick={redBtn}>click to add 1</button>
                    <p>num1: {num1}</p>
                </div>

                <div className="text-center">
                    <button className="btn btn-success mb-3" onClick={greenBtn}>click to add 2</button>
                    <p>num2: {num2}</p>
                </div>
            </div>
        </React.Fragment>
    );
};

ReactDOM.createRoot(document.getElementById("root")).render(<NumDiv />);
