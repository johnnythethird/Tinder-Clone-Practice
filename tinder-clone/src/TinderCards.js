import { useState } from "react"
import TinderCard from "react-tinder-card"
import "./TinderCards.css"

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Brittney Nuan",
      url: "https://www.random-name-generator.com/images/faces/female-white/24.jpg",
    },
    {
      name: "Mark Thompson",
      url: "https://static.generated.photos/vue-static/face-generator/landing/wall/14.jpg",
    },
    {
      name: "Kelly Ulita",
      url: "https://static.generated.photos/vue-static/face-generator/landing/demo-previews/skin-tone.jpg",
    },
    {
      name: "Icarus Toa",
      url: "https://i.pinimg.com/736x/b0/e2/f5/b0e2f54d141a70986beac46962394651.jpg",
    },
    {
      name: "Renae Devar",
      url: "https://static.generated.photos/vue-static/face-generator/landing/demo-previews/age.jpg",
    },
    {
      name: "Tony Stimas",
      url: "https://i.pinimg.com/736x/46/46/3f/46463f00c0db960a677c04f072238b82.jpg",
    },
  ]);

  const swiped = (direction, nameToDelete) => {
      console.log("removing: " + nameToDelete);
      // setLastDirection(direction);
    };

    const outOfFrame = (name) => {
      console.log(name + " left the screen!");
    };


  return (
    <div className="tinderCards">
      <div className="tinderCards_cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>


          </TinderCard>
        ))}
      </div>
    </div>
  )
}

export default TinderCards;