import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import cards from "../images/cards.png"
import { AddTransation } from '../services/api';
export function AddBalance() {
    const [number, setNumber] = useState('');
    const [amount, setAmount] = useState('');
    const [error, setError] = useState();

    const history = useHistory();
    const handleNumber = (e) => {
        setNumber(e.target.value)
    }

    const handleAmount = (e) => {
        setAmount(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        await AddTransation({
            number,meterNumber:amount
        })
            .then(() => {
                history.push("/balance/logs")
                alert("It was a success")
            })
            .catch((error) => {
                console.log(error.response.data.message)
                setError(error.response.data.message)
            })

    }

    return <div className="text-text-primary">
        <div className="card bg-primary p-5 text-xl text-white font-bold mb-5">WEB BILLER CONTROLL | METER BALANCE</div>
        <div className="lg:flex p-5">
            <div className="bg-white lg:w-1/2 p-5 flex items-center text-sm text-gray-400">
                <div className="m-auto">
                    <div className="title text-primary font-bold text-xl">WEB BILLER</div>
                    <img src={cards} alt="" />
                </div>

            </div>
            <div className="bg-white lg:w-1/2 p-5 text-black text-sm">
                {error &&
                    <div className="error-log bg-red-500 text-white w-full text-center py-3 rounded">{error}</div>
                }
                <form action="" onSubmit={handleSubmit} className="p-5">
                    <div className="form-group my-5">
                        <label htmlFor="">
                            <span className="block float-left my-3">METER NUMBER</span>
                            <input type="text" onChange={handleNumber} value={number} id="number" className="form-control p-4 w-full border" required />
                        </label>
                    </div>
                    <div className="form-group my-5">
                        <label htmlFor="">
                            <span className="block float-left my-3">METER AMOUNT</span>
                            <input type="text" onChange={handleAmount} value={amount} id="amount" className="form-control p-4 w-full border" required />
                        </label>
                    </div>
                    <button type="submit" className="btn bg-primary p-3 rounded text-white w-full" id="buy">Buy</button>
                </form>
                <div class="h-20">
                    
                </div>
            </div>
        </div>
    </div>
}