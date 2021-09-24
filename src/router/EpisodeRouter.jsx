
import { Episode_id } from "../components/pages/radiohistory/Episode_id";
import { Radiohistory } from "../components/pages/radiohistory/Radiohistory";


export const EpisodeRouter = [
  {
    path:"/",
    exact:true,
    children:<Radiohistory />
  },
  {
    path:"/:id",
    exact:false,
    children:<Episode_id />
  }
]