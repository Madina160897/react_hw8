import React, { FC, useState } from "react";
import apiClient from "../../common/api";
import { useEffect } from "react";
import { IPlanets } from "../../common/models";
import { Link } from "react-router-dom"

interface IProps {
  onClickPeople: (id: any) => void;
}

const PlanetsList: FC<IProps> = () => {

  const [planets, setPlanets] = useState<IPlanets[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getPlanets = async () => {
    try {
      const res = await apiClient.get<IPlanets[]>("/planets");
      //@ts-ignore
      setPlanets(res.data.results);
    } catch (e) {
      console.log({ e });
    } finally {
      setIsLoading(false);
    }
  };

  const planetsId = (url: any) => {
    const id = url.slice("https://swapi.dev/api/planets/".length, url.length - 1)
    return id
  }

  useEffect(() => {
    getPlanets();
  }, []);

  if (isLoading) {
    return <h1>LOADING...</h1>;
  }

  return (
    <div>
      <div className="header-page df jc-sa ai-c">
        <img className="img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png" alt="" />
        <Link to='/'>
          <div>
            <b> Main </b>
          </div>
        </Link>
        <Link to='/people'>
          <div>
            <b> People </b>
          </div>
        </Link>
        <Link to='/starships'>
          <div>
            <b> Starships </b>
          </div>
        </Link>
      </div>
      <div className="people-div df jc-sa fd-c ai-c">
        {planets.map((planet) => (
          <div key={planet.url} onClick={() => planetsId(planet.url)} className='people-name'>
            <Link to={`/planets/${planet.url.slice("https://swapi.dev/api/planets/".length, planet.url.length - 1)}`}>
            <h1>{planet.name}</h1>
            </Link>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanetsList;
