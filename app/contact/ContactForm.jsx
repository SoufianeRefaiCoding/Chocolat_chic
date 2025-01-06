const ContactForm=()=>{
return(
    <form action="">
        <div className="flex gap-6 my-3">
            <div className="w-1/2">
            <input type="text" placeholder="Full Name" className="w-full text-lg px-4 py-1.5 rounded shadow-md outline-none" />
            </div>
            <div className="w-1/2">
            <input type="text" placeholder="Email" className="w-full text-lg px-4 py-1.5 rounded shadow-md outline-none" />
            </div>
            
        </div>
    </form>
)
}
export default ContactForm;