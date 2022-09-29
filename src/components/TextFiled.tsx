import React, {ChangeEvent, FC} from 'react';

interface TextProps {
    label: string,
    inputProps: {type:string, placeholder:string},
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    value: string|number
}

const TextFiled: FC<TextProps> = ({label, inputProps, onChange, value}) => {
    return (
        <div className="flex flex-col">
            <label className="mb-2 text-base text-gray-800">{label}</label>
            <input
                className="bg-gray-200 py-2 px-3 border-2 outline-none"
                {...inputProps}
                onChange={onChange}
                value={value}
            />
        </div>
    );
};

export default TextFiled;