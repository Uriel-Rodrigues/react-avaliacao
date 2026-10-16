import { Star } from "@boxicons/react";
import Terminal from "../assets/Terminal.png"
import { useState } from "react";

const Avaliacao = () => {
    const [submit, setSubmit] = useState(true);
    const [nota, setNota] = useState(0);

    console.log(nota);
    

    return ( 
        <div className="bg-gray-950 h-screen flex justify-center items-center">
            {
                submit ? (<div className="bg-linear-to-t from-gray-900 via-gray-800 via-gray- to-gray-600   w-90 rounded-xl p-8">
                <div className="bg-gray-600 rounded-full inline-block p-1 mb-5">
                    <Star pack="filled" fill="oklch(70.5% 0.213 47.604)" />
                </div>

                <div className="flex flex-col gap-3">
                    <h1 className="text-white font-bold text-2xl">How did we do?</h1>
                    <p className="text-gray-400">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
                    </p>
                </div>
                
                <div className="mt-5 flex justify-center gap-4 *:cursor-pointer *:hover:bg-orange-500 *:duration-200">
                    <div  onClick={() => setNota(1)} className={`w-10 h-10 rounded-full bg-gray-600 flex justify-center items-center ${nota === 1 ? "bg-white" : "bg-gray-600"} ${nota === 1 ? "text-black" : "text-white"}`}>
                        <span>1</span>
                    </div>
                    <div onClick={() => setNota(2)} className={`w-10 h-10 rounded-full bg-gray-600 flex justify-center items-center  ${nota === 2 ? "bg-white" : "bg-gray-600"} ${nota === 2 ? "text-black" : "text-white"}`}>
                        <span>2</span>
                    </div>
                    <div onClick={() => setNota(3)} className={`w-10 h-10 rounded-full bg-gray-600 flex justify-center items-center  ${nota === 3 ? "bg-white" : "bg-gray-600"} ${nota === 3 ? "text-black" : "text-white"}`}>
                        <span>3</span>
                    </div>
                    <div onClick={() => setNota(4)} className={`w-10 h-10 rounded-full bg-gray-600 flex justify-center items-center  ${nota === 4 ? "bg-white" : "bg-gray-600"} ${nota === 4 ? "text-black" : "text-white"}`}>
                        <span>4</span>
                    </div>
                    <div onClick={() => setNota(5)} className={`w-10 h-10 rounded-full bg-gray-600 flex justify-center items-center ${nota === 5 ? "bg-white" : "bg-gray-600"} ${nota === 5 ? "text-black" : "text-white"}`}>
                        <span>5</span>
                    </div>
                </div>

                <div className="mt-5">
                    <button className="bg-orange-500 hover:bg-white leading-5 w-full rounded-full h-9 font-semibold duration-200 cursor-pointer" onClick={()=> setSubmit(false)}>SUBMIT</button>
                </div>

            </div>) : (
                <div className="bg-linear-to-t from-gray-900 via-gray-800 via-gray- to-gray-600 w-90 rounded-xl p-8">

                <div>
                    <img src={Terminal} alt=""/>
                </div>

                <div className="flex justify-center">
                    <p className="text-orange-500 leading-10 bg-gray-800 w-50 text-center rounded-full">{`You selected ${nota} out of 5`}</p>
                </div>

                <div className="mt-5 flex flex-col gap-3">
                    <p className="text-white font-bold text-2xl text-center">Thank you!</p>

                    <p className="text-gray-400 text-center">We appreciate you taking the time to give a rating if you ever need more support, don't hesitate to get in touch!</p>
                </div>
            </div>)
            }        
        </div>
     );
}
 
export default Avaliacao;