import React, { useState, useEffect } from "react";
import propTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import {
  add,
  remove,
  selectChampion,
} from "../features/favorite/favoritesSlice";
import { Card } from "react-bootstrap";
import "../assets/styles/components/Character.scss";
import SVGStar from "../assets/static/icons/star.svg";

const Champion = ({ data, setIdChampionSelected }) => {
  const favoriteChampions = useSelector(selectChampion);
  const dispatch = useDispatch();
  const [favorite, setFavorite] = useState(false);

  const handleSetFavorite = () => {
    dispatch(add(data));
    setFavorite(true);
  };

  const handleDeleteFavorite = (itemId) => {
    dispatch(remove(itemId));
    setFavorite(false);
  };

  const handleShowDetail = () => {
    console.log(data);
    setIdChampionSelected(data.id);
  };

  const isFavorite = () => {
    const result = favoriteChampions.filter(
      (champion) => champion.id === data.id
    );
    if (result.length) {
      setFavorite(true);
    }
  };

  useEffect(() => {
    isFavorite();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Card bg="dark" text="white">
      <Card.Img
        variant="top"
        src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${data.id}_0.jpg`}
      />
      <Card.ImgOverlay
        onClick={() => handleShowDetail()}
        style={{ cursor: "pointer" }}
      >
        <Card.Title className="bg-side">{data.name}</Card.Title>
      </Card.ImgOverlay>
      <Card.Body className="pt-1 pb-1">
        {favorite ? (
          <SVGStar
            onClick={() => handleDeleteFavorite(data.id)}
            className="character__details-star favorite"
          />
        ) : (
          <SVGStar
            onClick={handleSetFavorite}
            className="character__details-star noFavorite"
          />
        )}
      </Card.Body>
    </Card>
  );
};

// propsTypes
Champion.propTypes = {
  data: propTypes.object,
  setIdChampionSelected: propTypes.func,
};

// native redux functions
// const mapStateToProps = (state) => {
//   return {
//     favoriteCharacters: state.favoriteCharacters,
//   };
// };

// const mapDispatchToProps = {
//   setFavorite,
//   deleteFavorite,
// };

export default Champion;
// export default connect(mapStateToProps, mapDispatchToProps)(Champion);
