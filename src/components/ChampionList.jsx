import React, { useEffect } from "react";
// import "../assets/styles/components/CharacterList.scss";
import Champion from "./Champion";
import Error from "./Error";
import Loader from "./Loader";
import useGetChampions from "../custom-hooks/useGetChampions";
import { Container, Row } from "react-bootstrap";

const ChampionList = () => {
  const { champions, loading, error, getChampions } = useGetChampions();

  useEffect(() => {
    getChampions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        <Container fluid="md">
          <Row xm={1} xs={3} md={5}>
            {champions.map((champion) => (
              <Champion key={champion.key} data={champion} />
            ))}
          </Row>
        </Container>
      )}
    </div>
  );
};

export default ChampionList;
