import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import apiClient from "../../common/api";
import { IPlanets } from "../../common/models";

const PlanetsInfo = () => {
  const planId = useParams();
  const idPlanets = planId.planetsId;
  const [planet, setPlanet] = useState<IPlanets>(Object);
  const navigate = useNavigate();

  const getPlanet = async (planetsId: number) => {
    try {
      const res = await apiClient.get<IPlanets>(`/planets/${planId.planetsId}`);
      setPlanet(res.data);
    } catch (e) {
      console.log({ e });
    }
  };

  useEffect(() => {
    if (planId) {
      //   @ts-ignore
      const planetsId = parseInt(idPlanets);
      !isNaN(planetsId) && getPlanet(planetsId);
    }
  }, [planId]);
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
        <img className="img-info" src={`https://starwars-visualguide.com/assets/img/planets/${planId.planetsId}.jpg`} />
        <div key={planet.url}>
          <h3>
            Name: <b>{planet.name}</b>
          </h3>
          <h3>
            Rotation Period: <b>{planet.rotation_period}</b>
          </h3>
          <h3>
            Orbital Period: <b>{planet.orbital_period}</b>
          </h3>
          <h3>
            Diameter: <b>{planet.diameter}</b>
          </h3>
          <h3>
            Climate: <b>{planet.climate}</b>
          </h3>
          <button onClick={() => navigate("/planets")}>BACK</button>
        </div>
      </div>
    </>
  );
}

export default PlanetsInfo
