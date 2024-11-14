"use client"
import { useState, useEffect } from "react"
export default function CoinMarket(){
    const API_KEY = "0b70b637c09495594bfe7cbc87503c1f"
    const [data, setData] = useState<any>(null)
    useEffect(()=>{
        fetch(`http://api.coinlayer.com/live?access_key=${API_KEY}`)
        .then((response)=> response.json())
        .then((jsonConverted)=>{
            console.log("converted data", jsonConverted);
            setData(jsonConverted)
        })

    },[])

    
    return(
        <div className="flex flex-col p-[60px] text-white min-h-screen backgroundContainer">

            <h1 className="text-[32px] pl-12 font-bold mb-[10px] text-[#4cc9f0]">Crypto Currency Rates</h1>

            <div className="w-full max-w-md float-start bg-[#fb8500] rounded-lg border-[4px] border-[#bb3e03]">

                <div className="flex justify-between p-3 border-b-4 border-[#bb3e03] hover:bg-[#ffbf46]">
                    <span className="text-lg font-semibold">DCT</span>
                    <span className="text-lg font-bold">{data?.rates.DCT}</span>
                </div>

                <div className="flex justify-between p-3 border-b-4 border-[#bb3e03] hover:bg-[#ffbf46]">
                    <span className="text-lg font-semibold">CLD</span>
                    <span className="text-lg font-bold">{data?.rates.CLD}</span>
                </div>

                <div className="flex justify-between p-3 border-b-4 border-[#bb3e03] hover:bg-[#ffbf46]">
                    <span className="text-lg font-semibold">ARC</span>
                    <span className="text-lg font-bold">{data?.rates.ARC}</span>
                </div>

                <div className="flex justify-between p-3 border-b-4 border-[#bb3e03] hover:bg-[#ffbf46]">
                    <span className="text-lg font-semibold">BTC</span>
                    <span className="text-lg font-bold">{data?.rates.BTC}</span>
                </div>

                <div className="flex justify-between p-3 border-b-4 border-[#bb3e03] hover:bg-[#ffbf46]">
                    <span className="text-lg font-semibold">LUX</span>
                    <span className="text-lg font-bold">{data?.rates.LUX}</span>
                </div>

                <div className="flex justify-between p-3 border-b-4 border-[#bb3e03] hover:bg-[#ffbf46]">
                    <span className="text-lg font-semibold">EC</span>
                    <span className="text-lg font-bold">{data?.rates.EC}</span>
                </div>

                <div className="flex justify-between p-3 border-b-4 border-[#bb3e03] hover:bg-[#ffbf46]">
                    <span className="text-lg font-semibold">GTC</span>
                    <span className="text-lg font-bold">{data?.rates.GTC}</span>
                </div>

                <div className="flex justify-between p-3 border-b-4 border-[#bb3e03] hover:bg-[#ffbf46]">
                    <span className="text-lg font-semibold">FUEL</span>
                    <span className="text-lg font-bold">{data?.rates.FUEL}</span>
                </div>

                <div className="flex justify-between p-3 hover:bg-[#ffbf46]">
                    <span className="text-lg font-semibold">ILC</span>
                    <span className="text-lg font-bold">{data?.rates.ILC}</span>
                </div>

            </div>            
        </div>     
    )
}