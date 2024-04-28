import React from "react";
const Input = React.forwardRef(function (props, ref) {
    let content = (props.typeField === 'textarea') ? <textarea ref={ref} id={props.id} name={props.id} className="mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-900 sm:text-sm sm:leading-6" {...props}></textarea> : <input ref={ref} id={props.id} name={props.id} className="mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-900 sm:text-sm sm:leading-6" {...props}></input>
    return (<div className={props.typeField === 'textarea' ? 'sm:col-span-2' : ''}>
        <label htmlFor={props.id} required className="block text-sm font-semibold leading-6 text-gray-900">{props.label}</label>
        {content}
        {props.error && <p className='text-red-500 text-xs mt-1'>{props.error}</p>}
    </div>)
}
);
export default Input;