import { useState } from "react"
const Screen = () => {
    const [colorh, setColorh] = useState("#282828")
    const [colorm, setColorm] = useState("#1A1A1A")

    return (
        <div className="flex flex-col justify-between w-full h-screen" style={{ backgroundColor: colorm }}>
            <div className='flex items-center justify-between p-4 text-white' style={{ backgroundColor: colorh }}>
                <h1 className="bungee-text text-3xl">Zangetsu</h1>
            </div>
            <div className="w-full flex justify-center py-20 px-20">
                <div className="flex gap-5 px-6 py-4 justify-center rounded-2xl bg-white">
                    <button className="flex px-4 py-2 text-white rounded-lg" style={{ backgroundColor: "gray" }}
                        onClick={() => {
                            setColorh("#0F0F0F");
                            setColorm("#6EE7B7")
                        }}>
                        Midnight Alloy</button>
                    <button className="flex px-4 py-2 text-white rounded-lg" style={{ backgroundColor: "green" }}
                        onClick={() => {
                            setColorh("#1A1B2F")
                            setColorm("#E94560")
                        }}>
                        Cosmic Ink</button>
                    <button className="flex px-4 py-2 text-white rounded-lg" style={{ backgroundColor: "red" }}
                        onClick={() => {
                            setColorh("#121212")
                            setColorm("#00B2FF")
                        }}>
                        Shadow Circuit</button>
                    <button className="flex px-4 py-2 text-white rounded-lg" style={{ backgroundColor: "black" }}
                        onClick={() => {
                            setColorh("#0D0D0D")
                            setColorm("#FFC857")
                        }}>
                        Dark Monarch</button>
                </div>
            </div>

        </div>
    )
}

export default Screen