import React, { useState, useEffect } from "react";
// import "../assets/styles/components/CharacterList.scss";
import Champion from "./Champion";
import Error from "./Error";
import Loader from "./Loader";
import ModalDetail from "./ModalDetail";
import useGetChampions from "../custom-hooks/useGetChampions";
import useShowChampion from "../custom-hooks/useShowChampion";
import SearchChampions from "./SearchChampions";
import { Container, Row } from "react-bootstrap";

const ChampionList = () => {
  const {
    champions,
    loading: loadingGetChampions,
    error: errorGetChampions,
    getChampions,
  } = useGetChampions();
  const {
    champion,
    loading: loadingShowChampion,
    // error: errorShowChampion,
    showChampion,
  } = useShowChampion();
  const [idChampionSelected, setIdChampionSelected] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  useEffect(() => {
    getChampions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (idChampionSelected.length > 0) {
      showChampion(idChampionSelected);
      setShow(true)
    };
  }, [idChampionSelected]);

  return (
    <React.Fragment>
      <Container fluid="md">
        <SearchChampions
          getChampions={getChampions}
          loading={loadingGetChampions}
        />
        {loadingGetChampions ? (
          <Loader />
        ) : errorGetChampions ? (
          <Error />
        ) : (
          <Row xm={1} xs={3} md={5}>
            {champions.map((champion) => (
              <Champion
                key={champion.key}
                data={champion}
                setIdChampionSelected={setIdChampionSelected}
              />
            ))}
          </Row>
        )}
      </Container>
      <ModalDetail
        show={show}
        handleClose={handleClose}
        champion={champion}
        loading={loadingShowChampion}
      />
    </React.Fragment>
  );
};

export default ChampionList;
