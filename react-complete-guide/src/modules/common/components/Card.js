
import './Card.css';

// wrapper component
function Card(props) {
  // to preserve the classes from the wrapped components
  const classes = 'card ' + props.className;
  
  // children is a reserved name
  return <div className={classes}>{props.children}</div>;
}

export default Card;