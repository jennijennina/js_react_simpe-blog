import { useParams } from "react-router-dom";
import Data from "../Components/blogData";

const PageOne = () => {
  const params = useParams();
  return (
    <main className="pageOne">
      <img alt="" src={Data[params.detail].img_url}></img>
      <p>{Data[params.detail].title}</p>
      <p>{Data[params.detail].published_date}</p>
      <p>{Data[params.detail].description}</p>
      <p>{Data[params.detail].author}</p>
    </main>
  );
};
export default PageOne;
