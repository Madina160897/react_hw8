import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import apiClient from "../../common/api";
import { IPeople } from "../../common/models";

const PeopleInfo = () => {
  const peopleId = useParams();
  const idPeople = peopleId.peoplesId;
  const [people, setPeople] = useState<IPeople>(Object);
  const navigate = useNavigate();

  const getPeople = async (peoplesId: number) => {
    try {
      const res = await apiClient.get<IPeople>(`/people/${peopleId.peoplesId}`);
      setPeople(res.data);
    } catch (e) {
      console.log({ e });
    }
  };

  console.log(people.name);


  useEffect(() => {
    if (peopleId) {
      //   @ts-ignore
      const peoplesId = parseInt(idPeople);
      !isNaN(peoplesId) && getPeople(peoplesId);
    }
  }, [peopleId]);
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
        <img className="img-info" src={`https://starwars-visualguide.com/assets/img/characters/${peopleId.peoplesId}.jpg`}/>
        <div key={people.url}>
          <h3>
            Name: <b>{people.name}</b>
          </h3>
          <h3>
            Height: <b>{people.height}</b>
          </h3>
          <h3>
            Birth Year: <b>{people.birth_year}</b>
          </h3>
          <h3>
            Gender: <b>{people.gender}</b>
          </h3>
          <h3>
            Created: <b>{people.created}</b>
          </h3>
          <button onClick={() => navigate("/people")}>BACK</button>
        </div>
      </div>
    </>
  );
}

export default PeopleInfo
