import { useEffect, useState, createContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { io } from "socket.io-client";

const SocketContext = createContext();

const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState({});
  const [room, setRoom] = useState({});
  const [player_1, setPlayer_1] = useState("");
  const [player_2, setPlayer_2] = useState("");
  const [player_3, setPlayer_3] = useState("");
  const [player_4, setPlayer_4] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const socket = io(process.env.REACT_APP_SOCKET_URL);
    setSocket(socket);

    socket.on("room:get", (payload) => {
      setRoom(payload);
      let play_1 = Object.keys(payload.players)[0];
      let play_2 = Object.keys(payload.players)[1];
      let play_3 = Object.keys(payload.players)[2];
      let play_4 = Object.keys(payload.players)[3];

      if (play_1 === socket.id) {
        setPlayer_1(play_1);
        setPlayer_2(play_2);
        setPlayer_3(play_3);
        setPlayer_4(play_4);
      } else if (play_2 === socket.id){
        setPlayer_1(play_2);
        setPlayer_2(play_3);
        setPlayer_3(play_4);
        setPlayer_4(play_1);
      } else if (play_2 === socket.id){
        setPlayer_2(play_3);
        setPlayer_3(play_4);
        setPlayer_4(play_1);
        setPlayer_1(play_2);
      } else {
        setPlayer_3(play_4);
        setPlayer_4(play_1);
        setPlayer_1(play_2);
        setPlayer_2(play_3);
      }

    //   if (
    //     payload?.players[play_1]?.score === 3 ||
    //     payload?.players[play_2]?.score === 3
    //   ) {
    //     let pathname = "/result";
    //     if (pathname !== location.pathname) navigate(pathname);
    //   }
      console.log(payload.players);
    });
  }, []);

  return (
    <SocketContext.Provider
      value={{
        socket,
        room,
        setRoom,
        player_1,
        player_2,
        player_3,
        player_4,
        navigate,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export { SocketContextProvider, SocketContext };