import React from "react";

const space = ["10px", "20px"];

export const Button = ({
  big,
  color = "white",
  backgroundColor = "blue",
  ...props
}) => {
  const styling = {
    fontFamily: "inherit",
    fontSize: "inherit",
    fontWeight: "bold",
    textDecoration: "none",
    display: "inline-block",
    margin: 0,
    paddingTop: big ? space[1] : space[0],
    paddingBottom: big ? space[1] : space[0],
    paddingLeft: space[1],
    paddingRight: space[1],
    border: 0,
    color,
    backgroundColor,
    WebkitAppearance: "none",
    MozAppearance: "none"
  };

  return <button {...props} style={styling} />;
};

// By adjusting the props API of the base Button component,
// an entire set of button styles can be created.
export const ButtonBig = props => <Button {...props} big />;
export const ButtonGreen = props => (
  <Button {...props} backgroundColor={"green"} />
);
export const ButtonRed = props => <Button {...props} backgroundColor={"red"} />;
export const ButtonOutline = props => <Button {...props} />;
