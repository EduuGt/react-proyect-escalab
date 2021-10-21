import React from "react";
// import { connect } from "react-redux";
import "../assets/styles/components/FavoriteList.scss";
import Champion from "./Champion";
import Empty from "./Empty";
import { Container, Row } from "react-bootstrap";

import { useSelector } from "react-redux";
import { selectChampion } from "../features/favorite/favoritesSlice";

const FavoriteList = (props) => {
  const favoriteChampions = useSelector(selectChampion);

  return (
    <div className="characterList">
      {!favoriteChampions.length ? (
        <Empty />
      ) : (
        <Container fluid="md">
          <Row xm={1} xs={3} md={5}>
            {favoriteChampions.map((champion) => (
              <Champion key={champion.id} data={champion} />
            ))}
          </Row>
        </Container>
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
