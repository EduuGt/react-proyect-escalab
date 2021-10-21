import React from "react";
import { connect } from "react-redux";
import "../assets/styles/components/FavoriteList.scss";
import Champion from "./Champion";
import Empty from "./Empty";

const FavoriteList = (props) => {
  //const { favoriteCharacters } = props;

//   return (
//     <div className="characterList">
//       {!favoriteCharacters.length ? (
//         <Empty />
//       ) : (
//         favoriteCharacters.map((character) => (
//           <Champion key={character.data.id} data={character.data} />
//         ))
//       )}
//     </div>
//   );

return (
    <h1>hola mundo</h1>
    );
};

// native react-redux functions vs hooks: useSelect && useDispatch
const mapStateToProps = (state) => {
  return {
    favoriteCharacters: state.favoriteCharacters,
  };
};

export default connect(mapStateToProps, null)(FavoriteList);
