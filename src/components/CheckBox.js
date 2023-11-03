import React from "react";

const CheckBox = ({value = 'No Answer', className = ''}) => {

    return (
        <div className={className}>
        <svg
            id="customCheckbox"
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            viewBox="0 0 20 20"
        >
            {value === 'No Answer' && (
                <>
                    <rect
                        x="2"
                        y="2"
                        width="16"
                        height="16"
                        fill="white"
                        stroke="black"
                        strokeWidth="2"
                        rx="3"
                        ry="3"
                    />
                    <line
                        x1="4"
                        y1="16"
                        x2="16"
                        y2="4"
                        stroke="black"
                        strokeWidth="2"
                    />
                </>
            )}
            {value === 'Yes' && (
            <rect
                x={2}
                y={2}
                width={16}
                height={16}
                fill="green"
                stroke="green"
                strokeWidth={2}
                rx={3}
                ry={3}
            />
            )}
            {value === 'No' && (
            <rect
                x={2}
                y={2}
                width={16}
                height={16}
                fill="red"
                stroke="red"
                strokeWidth={2}
                rx={3}
                ry={3}
            />
            )}
        </svg>
        <span style={{marginLeft: '10px'}}>{value}</span>
        </div>
    );
};

export default CheckBox;
