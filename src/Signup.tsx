import { useState } from "react"
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
export default function Signup(){
    const handleSubmit = (event) => {
      event.preventDefault();
    };  
      const [formData, setFormData] = useState({
        first: "",
        last: "",
        email: "",
        country: "",
        phone:"",
        password:""
      });
    return(
        <div className="min-w-[375px] h-[100%] text-white bg-[#1F1F39]" >
            <div className="min-h-[153px] p-3">
                <h1 className="text-3xl pt-8">Sign Up</h1>
                <p className="text-xl pt-4">Enter your details below & free sign up</p>
            </div>
            <div className="p-3 bg-[#2F2F42] ">
                <form onSubmit={handleSubmit} className="pt-2" method="POST" >
                    <label htmlFor="first">First Name</label><br/>
                    <input
                        className="text-black"
                        id="first"
                        type="text"
                        name="first"
                        placeholder="First Name"
                        value={formData.first}
                        onChange={(event) => setFormData({ ...formData, first: event.target.value })}
                    /><br/>
                    <label htmlFor="last">Last Name</label><br/>
                    <input
                        id="last"
                        className="text-black"
                        type="text"
                        name="last"
                        placeholder="Last Name"
                        value={formData.last}
                        onChange={(event) => setFormData({ ...formData, last: event.target.value })}
                    />
                    <br/>
                    <label htmlFor="email">Email </label><br/>
                    <input
                        className="text-[#000]"
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                    />
                    <br/>
                    <label htmlFor="phone">Phone</label><br/>
                    <PhoneInput
                    country={'us'}
                    name="phone"
                    value={formData.phone}
                    className="text-black max-w-[15px]"
                    onChange={(value) => setFormData({ ...formData, phone: value })}
                    />
                    <label htmlFor="password">Password </label><br/>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        className="text-black"
                        onChange={(event) => setFormData({ ...formData, password: event.target.value })}
                    />
                    <br/>
                    <br />
                    <button type="submit" className="text-white bg-blue-700 py-2 px-9">Create Account</button>
                    <br />
                    <br />
                    <input type="checkbox" name="terms" id="terms" /><span>By creating an account you have to agree with our terms & condition.</span> 
                    
                    <br/>
                    <br />
                    <p>Already have an account<button className="text-blue pl-1 text-blue-800">Log In</button></p>
                </form>      
        </div>


    </div>
    )
}