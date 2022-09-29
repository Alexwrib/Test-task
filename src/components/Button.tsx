import React, {FC} from 'react';

interface ButtonProps {
    onClick: () => void ;
    children: string
}

const Button: FC<ButtonProps> = ({onClick, children}) => {
    return (
        <button
            className="bg-indigo-600 text-white py-2 px-6 my-10 rounded hover:bg-indigo-700"
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;