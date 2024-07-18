import React,{useState} from "react";
const formconfig=[
    { id: 1, type: "text", name: "firstName", placeholder: "First Name" }, { id: 2, type: "text", name: "lastName", placeholder: "Last Name" },
{ id: 3, type: "email", name: "email", placeholder: "Email" },
{ id: 4, type: "textarea", name: "message", placeholder: "Message" },

];
function InputField({type,name,placeholder,value,onChange}){
    if(type=="textarea")
        {
            return(
                <textarea
                className="form-textarea"
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required
                />
            );
        }
        return (
            <input 
            className="form-input"
            type={type}
            value={value}
            placeholder={placeholder}
            name={name}
            onChange={onChange}
            required
            />
        );
}
const EmailForm =()=>{
    const[formData,setFormData]=useState({
        firstname:'',
        lastname:'',
        email:'',
        message:''
    });
    const handleChange=(e)=>{
        const{name,value}=e.target;
        setFormData((prevData)=>({
            ...prevData,
            [name]:value
        }));

    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("Form data:",formData);
        setFormData({
            firstname:'',
            lastname:'',
            email:'',
            message:''
        });
        alert("Form submitted usccesfully");
    };
    return(
        <div>
            <form onSubmit={handleSubmit}>
                {formconfig.map((field)=>(
                    <div key={field.id}>
                        <label >
                            {field.placeholder}
                        
                        <InputField
                        type={field.type}
                        name={field.name}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        value={formData[field.name]}/>
                    </label>
                    </div>
                ))}
                <button type="submit">Send</button>
            </form>
        </div>
    );
};
export default EmailForm;