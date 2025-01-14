import React from 'react';

export const TextInput = ({ label, name, type = 'text', value, onChange,disabled = false }) => {
    return (
        <div style={{ marginBottom: '1rem',display: 'flex' }}>
            <label htmlFor={name} style={{paddingRight: '1rem',fontSize: '1rem',width: '40%'}}>
                {label}
            </label>
            <input
                id={name}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                disabled={disabled}
                style={{
                    width: '60%',    
                    fontSize: '1rem',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                }}
            />
        </div>
    );
};

export const EmailInput = ({ label, name, type = 'email', value, onChange }) => {
    return (
        <div style={{ marginBottom: '1rem',display: 'flex' }}>
            <label htmlFor={name} style={{paddingRight: '1rem',fontSize: '1rem',width: '40%'}}>
                {label}
            </label>
            <input
                id={name}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                
                style={{
                    width: '60%',
                    fontSize: '1rem',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                }}
            />
        </div>
    );
}