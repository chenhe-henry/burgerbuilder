import React from "react";
import PropTypes from "prop-types";
import "./BurgerIngredient.scss";

class BurgerIngredient extends React.Component {
  render() {
    let ingredient = null;
    switch (this.props.type) {
      case "bread-bottom":
        ingredient = <div className="BurgerIngredient__BreadBottom"></div>;
        break;
      case "bread-top":
        ingredient = (
          <div className="BurgerIngredient__BreadTop">
            <div className="BurgerIngredient__Seeds1"></div>
            <div className="BurgerIngredient__Seeds2"></div>
          </div>
        );
        break;
      case "meat":
        ingredient = <div className="BurgerIngredient__Meat"></div>;
        break;
      case "cheese":
        ingredient = <div className="BurgerIngredient__Cheese"></div>;
        break;
      case "bacon":
        ingredient = <div className="BurgerIngredient__Bacon"></div>;
        break;
      case "salad":
        ingredient = <div className="BurgerIngredient__Salad"></div>;
        break;
      default:
        ingredient = null;
    }
    return ingredient;
  }
}

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired,
};

export default BurgerIngredient;
