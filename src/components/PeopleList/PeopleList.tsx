import React, { FC, useState } from "react";
import apiClient from "../../common/api";
import { useEffect } from "react";
import { IPeople } from "../../common/models";
import { Link } from "react-router-dom"

interface IProps {
  onClickPeople: (id: any) => void;
}

const PeopleList: FC<IProps> = () => {

  const [peoples, setPeoples] = useState<IPeople[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getPeoples = async () => {
    try {
      const res = await apiClient.get<IPeople[]>("/people");
      //@ts-ignore
      setPeoples(res.data.results);
    } catch (e) {
      console.log({ e });
    } finally {
      setIsLoading(false);
    }
  };

  const personId = (url: any) => {
    const id = url.slice("https://swapi.dev/api/people/".length, url.length - 1)
    return id
  }

  useEffect(() => {
    getPeoples();
  }, []);

  if (isLoading) {
    return <h1>LOADING...</h1>;
  }

  return (
    <div>
      <div className="header-page df jc-sa ai-c">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png" alt="" />
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
      <div className="people-div df jc-sa fd-c ai-c">
        {peoples.map((people) => (
          <div key={people.url} onClick={() => personId(people.url)} className='people-name'>
            <Link to={`/people/${people.url.slice("https://swapi.dev/api/people/".length, people.url.length - 1)}`}>
            <h1>{people.name}</h1>
            </Link>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default PeopleList;
