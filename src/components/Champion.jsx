import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { Card, Button } from "react-bootstrap";

// import { setFavorite, deleteFavorite } from "../actions";
import "../assets/styles/components/Character.scss";
import { ReactComponent as SVGStar } from "../assets/static/icons/star.svg";
// import CharacterDetail from "./CharacterDetail";
// import Modal from "./Modal";
// import useModal from "../custom-hooks/useModal";

const Champion = ({ data }) => {
  // const { modal, handleCloseModal, handleOpenModal } = useModal();
  // const [favorite, setFavorite] = useState(false);
  // const { data, favoriteCharacters } = props;
  // const { id, image, name, status, species, gender } = data;

  // const handleSetFavorite = () => {
  //   props.setFavorite({ data });
  //   setFavorite(true);
  // };

  // const handleDeleteFavorite = (itemId) => {
  //   props.deleteFavorite(itemId);
  //   setFavorite(false);
  // };

  // const isFavorite = () => {
  //   const result = favoriteCharacters.filter(
  //     (favoriteCharacter) => favoriteCharacter.data.id === id
  //   );
  //   if (result.length) {
  //     setFavorite(true);
  //   }
  // };

  // useEffect(() => {
  //   isFavorite();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  return (
    <Card bg="dark" text="white">
      <Card.Img
        variant="top"
        src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${data.id}_0.jpg`}
      />
      <Card.ImgOverlay>
        <Card.Title className="bg-side">{data.name}</Card.Title>
        
      </Card.ImgOverlay>
    </Card>
  );
};

// propsTypes
// Character.propTypes = {
//   data: propTypes.object,
//   //name: propTypes.string,
//   //gender: propTypes.string,
//   //id: propTypes.number,
// };

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
