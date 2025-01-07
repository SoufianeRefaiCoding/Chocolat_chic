const ContactForm=()=>{
return(
    <form action="">
        <div className="flex gap-6 my-3">
            <div className="w-1/2">
            <input type="text" placeholder="First Name" className="w-full text-lg px-4 py-1.5 rounded shadow-md outline-none" />
            </div>
            <div className="w-1/2">
            <input type="text" placeholder="Last name" className="w-full text-lg px-4 py-1.5 rounded shadow-md outline-none" />
            </div>
            
        </div>
        <div className="flex gap-6 my-3">
            <div className="w-1/2">
            <input type="Email" placeholder="Email" className="w-full text-lg px-4 py-1.5 rounded shadow-md outline-none" />
            </div>
            <div className="w-1/2">
            <input type="Subject" placeholder="Subject" className="w-full text-lg px-4 py-1.5 rounded shadow-md outline-none" />
            </div>
            
        </div>
        <div className=" my-3">
        <textarea
            placeholder="Message"
            
            className="w-full text-lg px-4 py-1.5 rounded shadow-md outline-none min-h-32" 
          />      
        </div>
        <div className="mt-6  flex justify-end">
            <button type="submit" className="bg-white rounded text-black hover:text-white hover:bg-chocolate-700 transition-all ease-linear py-2 px-3 font-cinzel uppercase shadow">
                send message
            </button>
        </div>
    </form>
)
}
export default ContactForm;