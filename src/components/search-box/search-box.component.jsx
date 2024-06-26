// import { Component } from "react";
// import './search-box.styles.css';

// class SearchBox extends Component {

//     render(){

//         return(
//             <input
//                 className= {`search-box ${className}`}
//                 type = 'search'
//                 placeholder={placeHolder}
//                 onChange={onChangeHandler}
//             />
//         )
//     }
// }

// export default SearchBox;


import './search-box.styles.css'
const SearchBox = ({className, placeHolder , onChangeHandler}) => (
  <input 
    className= { `search-box ${className}` } 
    type= 'search' 
    placeholder= {placeHolder }
    onChange={ onChangeHandler }
  />
) 

export default SearchBox;