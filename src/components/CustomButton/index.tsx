import React, { ButtonHTMLAttributes } from 'react'

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    onClick?: () => void;
    className?: string;
    icon?: React.ReactNode;
}
const CustomButton = ({ label, onClick, className, icon, ...props }: IProps) => {
    return (
        <button onClick={onClick} className={`bg-gray-200 text-black hover:bg-gray-400 hover:text-white cursor-pointer transition-all duration-300 p-2 rounded  w-full flex items-center justify-center  gap-2 ${className}`}
            style={{ padding: '.4rem 1rem' }}
            {...props}>
            {icon}{label}
        </button>
    )
}

export default CustomButton