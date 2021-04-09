import React, {useState, useEffect} from "react";
import fire from "../../config/Fire";

const History = () => {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        getHistory();
    })

    const getHistory = async () => {
        const historyDoc = await fire.firestore().collection("history").doc("history").get();
        const historydata = historyDoc.data();
        setHistory(historydata?.history);
    }
    
    return (
        <div className="container mx-auto">
            {
                history &&
                history.map((his, key) => (
                    <div key={key} className="container rounded bg-white shadow max-w-md m-4 p-4">
                        <div className="p-2">
                            <img src="https://miro.medium.com/max/1272/0*TFmFug4zhzfbKsd5.jpg" className="float-left w-10 h-10 mr-3 rounded-full" alt="..." />
                            <p className="uppercase">{his.event_name}</p>
                            <p className="text-sm text-gray-600 ">{new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(his.event_date)}</p>
                        </div>
                        <section className="uppercase font-bold">
                            Organised by : {his.organised_by}
                        </section>
                    </div>
                ))
            }
        </div>
        
    )
}

export default History;