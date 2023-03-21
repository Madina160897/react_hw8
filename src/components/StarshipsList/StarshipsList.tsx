import React, { FC, useState } from "react";
import apiClient from "../../common/api";
import { useEffect } from "react";
import { IStarships } from "../../common/models";
import { Link } from "react-router-dom"

interface IProps {
  onClickPeople: (id: any) => void;
}

const StarshipsList: FC<IProps> = () => {

  const [starships, setStarships] = useState<IStarships[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getStarships = async () => {
    try {
      const res = await apiClient.get<IStarships[]>("/starships");
      //@ts-ignore
      setStarships(res.data.results);
    } catch (e) {
      console.log({ e });
    } finally {
      setIsLoading(false);
    }
  };

  const starshipsId = (url: any) => {
    const id = url.slice("https://swapi.dev/api/starships/".length, url.length - 1)
    return id
  }

  useEffect(() => {
    getStarships();
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
        <Link to='/planets'>
          <div>
            <b> Planets </b>
          </div>
        </Link>
        <Link to='/people'>
          <div>
            <b> People </b>
          </div>
        </Link>
      </div>
      <div className="people-div df jc-sa fd-c ai-c">
        {starships.map((starship) => (
          <div key={starship.url} onClick={() => starshipsId(starship.url)} className='people-name'>
            <Link to={`/starships/${starship.url.slice("https://swapi.dev/api/starships/".length, starship.url.length - 1)}`}>
            <h1>{starship.name}</h1>
            </Link>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default StarshipsList;
