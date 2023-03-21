import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import apiClient from "../../common/api";
import { IStarships } from "../../common/models";

const StarshipsInfo = () => {
  const starId = useParams();
  const idStarships = starId.starshipsId;
  const [starship, setStarships] = useState<IStarships>(Object);
  const navigate = useNavigate();

  const getStarships = async (starshipsId: number) => {
    try {
      const res = await apiClient.get<IStarships>(`/starships/${starId.starshipsId}`);
      setStarships(res.data);
    } catch (e) {
      console.log({ e });
    }
  };

  useEffect(() => {
    if (starId) {
      //   @ts-ignore
      const starshipsId = parseInt(idStarships);
      !isNaN(starshipsId) && getStarships(starshipsId);
    }
  }, [starId]);
  return (
    <>
      <div className="header-page df jc-sa ai-c">
        <img className="img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png" alt="" />
        <Link to='/'>
          <div>
            <b> Main </b>
          </div>
        </Link>
        <Link to='/planets'>
          <div>
            <b> Planets </b>
          </div>
        </Link>
        <Link to='/starships'>
          <div>
            <b> Starships </b>
          </div>
        </Link>
      </div>
      <div className="container-info">
        <img className="img-info" src={`https://starwars-visualguide.com/assets/img/starships/${starId.planetsId}.jpg`} />
        <div key={starship.url}>
          <h3>
            Name: <b>{starship.name}</b>
          </h3>
          <h3>
            Model: <b>{starship.model}</b>
          </h3>
          <h3>
            Manufacturer: <b>{starship.manufacturer}</b>
          </h3>
          <h3>
            Length: <b>{starship.length}</b>
          </h3>
          <h3>
            MGLT: <b>{starship.MGLT}</b>
          </h3>
          <button onClick={() => navigate("/starships")}>BACK</button>
        </div>
      </div>
    </>
  );
}

export default StarshipsInfo