import React, { FC, useState } from "react";
import apiClient from "../../common/api";
import { useEffect } from "react";
import { IPeople } from "../../common/models";


interface IProps {
  onClickPost: (id: string) => void;
}

const PeopleList: FC<IProps> = (props) => {

  const [peoples, setPeoples] = useState<IPeople[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getPeoples = async () => {
    try {
      const res = await apiClient.get<IPeople[]>("/people");
      setPeoples(res.data);
    } catch (e) {
      console.log({ e });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPeoples();
  }, []);

  if (isLoading) {
    return <h1>LOADING...</h1>;
  }

  return (
    <div>
      {peoples.map((people) => (
        <div key={people.url} className="post-item">
          <h4>{people.name}</h4>
          <p>{people.height}</p>
          <p>{people.birth_year}</p>
          <p>{people.gender}</p>
          <p>{people.homeworld}</p>
          <p>{people.url}</p>
          <button onClick={() => props.onClickPost(people.url)}>View</button>
        </div>
      ))}
    </div>
  );
};

export default PeopleList;
