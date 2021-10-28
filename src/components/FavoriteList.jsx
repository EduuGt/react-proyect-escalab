import React, { useState, useEffect } from "react";
// import { connect } from "react-redux";
import "../assets/styles/components/FavoriteList.scss";
import useShowChampion from "../custom-hooks/useShowChampion";
import Champion from "./Champion";
import Empty from "./Empty";
import ModalDetail from "./ModalDetail";
import { Container, Row } from "react-bootstrap";

import { useSelector } from "react-redux";
import { selectChampion } from "../features/favorite/favoritesSlice";

const FavoriteList = (props) => {
  const favoriteChampions = useSelector(selectChampion);
  const [idChampionSelected, setIdChampionSelected] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const {
    champion,
    loading: loadingShowChampion,
    // error: errorShowChampion,
    showChampion,
  } = useShowChampion();

  useEffect(() => {
    if (idChampionSelected.length > 0) {
      showChampion(idChampionSelected);
      setShow(true);
    }
  }, [idChampionSelected]);

  return (
    <div className="characterList">
      {!favoriteChampions.length ? (
        <Empty />
      ) : (
        <React.Fragment>
          <Container fluid="md" className="mt-5 mb-5">
            <Row xm={1} xs={3} md={5}>
              {favoriteChampions.map((champion) => (
                <Champion
                  key={champion.id}
                  data={champion}
                  setIdChampionSelected={setIdChampionSelected}
                />
              ))}
            </Row>
          </Container>
          <ModalDetail
            show={show}
            handleClose={handleClose}
            champion={champion}
            loading={loadingShowChampion}
          />
        </React.Fragment>
      )}
    </div>
  );
};

// native react-redux functions vs hooks: useSelect && useDispatch
// const mapStateToProps = (state) => {
//   return {
//     favoriteCharacters: state.favoriteCharacters,
//   };
// };

// export default connect(mapStateToProps, null)(FavoriteList);

export default FavoriteList;
