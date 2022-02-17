import { useState, useEffect } from 'react';
import socketIOClient from "socket.io-client"
import Skeleton from "react-loading-skeleton";
import url from '../utils/url';

export function Logs() {
    const [cards, setCards] = useState([])
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        const socket = socketIOClient(url);
        socket.on("Transactions", (data) => {
            console.log(data)
            setCards(data);
            setLoading(false);
        })

        return () => {
            socket.disconnect()
        }
    }, [])
    return (
        <div className="transition duration-500 ease-in-out">
            <div className="card bg-green-600 p-5 text-xl text-white font-bold mb-5">WEB BILLER || ALL TRANSACTIONS</div>
            <div className="card--logs text-sm">
                {loading ?
                    <>

                        <div className="bg-white rounded shadow-lg text-black p-5 my-4 lg:flex gap-5 w-full">
                            <div className="lg:w-1/5 mb-2 card--code">
                                <div className="title font-bold mb-3">TOKEN</div>

                                <Skeleton height={25} width={Math.ceil((Math.random() + 9) * 9) + "%"} />


                            </div>
                            <div className="lg:w-1/5 mb-2 card--balance">
                                <div className="title font-bold mb-3">METER</div>


                                <Skeleton height={25} width={Math.ceil((Math.random() + 10) * 9) + "%"} />


                            </div>
                            <div className="lg:w-1/5 mb-2 card--balance">
                                <div className="title font-bold mb-3">AMOUNT</div>


                                <Skeleton height={25} width={Math.ceil((Math.random() + 10) * 9) + "%"} />


                            </div>
                            <div className="lg:w-1/5 mb-2">
                                <div className="title font-bold mb-3">DURATION</div>


                                <Skeleton height={25} width={Math.ceil((Math.random() + 10) * 9) + "%"} />

                            </div>
                            <div className="lg:w-1/5 mb-2">
                                <div className="title font-bold mb-3 gap-2">DONE AT</div>
                                <Skeleton height={25} width={Math.ceil((Math.random() + 10) * 9) + "%"} />
                            </div>

                        </div>
                    </>
                    :
                    <>
                        {cards?.slice().reverse().map((item) => {
                            return (
                                <div className="bg-white rounded shadow-lg text-black p-5 my-4 lg:flex gap-5 w-full">
                                    <div className="lg:w-1/5 mb-2 card--code">
                                        <div className="title font-bold mb-3">TOKEN</div>
                                        {loading ?
                                            <Skeleton height={25} width={Math.ceil((Math.random() + 9) * 9) + "%"} />
                                            :
                                            <> {item.transactions[0]?.uuid} </>}
                                    </div>
                                    <div className="lg:w-1/5 mb-2 card--balance">
                                        <div className="title font-bold mb-3">METER</div>

                                        {loading ?
                                            <Skeleton height={25} width={Math.ceil((Math.random() + 10) * 9) + "%"} />
                                            :
                                            <> SAMSUNG </>}
                                    </div>
                                    <div className="lg:w-1/5 mb-2">
                                        <div className="title font-bold mb-3">AMOUNT</div>

                                        {loading ?
                                            <Skeleton height={25} width={Math.ceil((Math.random() + 10) * 9) + "%"} />
                                            :
                                            <> Herman Happy </>}
                                    </div>

                                    <div className="lg:w-1/5 mb-2">
                                        <div className="title font-bold mb-3">DURATION</div>

                                        {loading ?
                                            <Skeleton height={25} width={Math.ceil((Math.random() + 10) * 9) + "%"} />
                                            :
                                            <> 1.9441° S, 30.0619° E </>}
                                    </div>
                                    <div className="lg:w-1/5 mb-2">
                                        <div className="title font-bold mb-3">DONE AT</div>
                                        <div className="flex gap-2 justify-center">

                                            <span className="flex justify-center">   {item.createdAt}</span>
                                        </div>

                                    </div>


                                </div>
                            );
                        })}
                    </>}


                {/* card ends here */}





            </div>
        </div>
    )
}
