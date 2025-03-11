import "./index.css";
import { useDispatch } from "react-redux";
import SongPlaylist from "./components/SongPlaylist";
import { reset } from "./store";

export default function App() {
  const dispatch = useDispatch();

  const handleResetClick = () => {
    console.log(reset()); //{type: 'app/reset', payload: undefined}
    dispatch(reset());  
  };

  return (
    <div className="container is-fluid">
      <button onClick={() => handleResetClick()} className="button is-danger">
        Reset Playlist
      </button>
      <hr />
      <hr />
      <SongPlaylist />
    </div>
  );
}
