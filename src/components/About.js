import UseCardsClass from "./UseCardsClass";
import UserCard from "./userCard";

const About = () => {
  return (
    <div className="About">
      <h1>About us page</h1>
      <h2>This is swiggy clone App</h2>
      <UserCard name={"shashanka"} location={"Tumkur"} />

      <UseCardsClass name={"Rohit"} location={"Bangalore"} />
    </div>
  );
};

export default About;
