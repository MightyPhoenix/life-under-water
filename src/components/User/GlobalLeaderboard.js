import React, {useState, useEffect} from "react";
import fire from "../../config/Fire";
import {GiQueenCrown} from "react-icons/gi";

const GlobalLeaderboard = () => {
    const [board, setBoard] = useState([]);

    useEffect(() => {
        getLeaderboard();
    })

    let iconStyles = { color: "yellow" };

    const getLeaderboard = async () => {
        const lDoc = await fire.firestore().collection("leaderboard").doc("leaderboard").get();
        const lData = lDoc.data();
        setBoard(lData?.leaderboard);
    }

    return (
        <div className="container mx-auto">
            {
                board &&
                board.map((player, key) => (
                    <div key={key} className="container rounded bg-white shadow max-w-md m-4 p-4">
                        <div className="p-2">
                            <img src={player.user_image} className="float-left w-10 h-10 mr-3 rounded-full" alt="..." />
                            <p className="uppercase font-bold">{player.user_name}</p>
                            <p className="text-sm font-bold ">Points : {player.points}</p>
                        </div>
                        <section className="uppercase text-black-300">
                            Number of Events : {player.participation}
                            <GiQueenCrown className="float-right" style={iconStyles} size={40} />
                        </section>
                    </div>
                ))
            }
        </div>
    )
}

export default GlobalLeaderboard;