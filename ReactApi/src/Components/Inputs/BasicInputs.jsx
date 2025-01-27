import React from 'react';

//Text Input
export const TextInput = ({ label, name, type = 'text', value, onChange,disabled = false }) => {
    return (
        <div className="w-full max-w-sm min-w-[200px]">
            <label htmlFor={name} className="block text-gray-700 text-sm font-bold mb-2">
                {label}
            </label>
            <input
                id={name}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                disabled={disabled}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
        </div>
    );
};

//Email Input
export const EmailInput = ({ label, name, type = 'email', value, onChange }) => {
    return (
        <div className="w-full max-w-sm min-w-[200px]">
            <label htmlFor={name} className="block text-gray-700 text-sm font-bold mb-2">
                {label}
            </label>
            <input
                id={name}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
        </div>
    );
};

//Date Input
export const DateInput = ({ label, name, type = 'date', value, onChange }) => {
    return (
        <div className="w-full max-w-sm min-w-[200px]">
            <label htmlFor={name} className="block text-gray-700 text-sm font-bold mb-2">
                {label}
            </label>
            <input
                id={name}
                type={type}
                name={name}
                value={value}
                onChange={onChange} 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />

        </div>
    );
};

//Password Input
export const PasswordInput = ({ label, name, type = 'password', value, onChange }) =>{
    return(
        <div className="w-full max-w-sm min-w-[200px]">
            <label htmlFor={name} className="block text-gray-700 text-sm font-bold mb-2">
                {label}
            </label>
            <input
                id={name}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
        </div>
    );
};