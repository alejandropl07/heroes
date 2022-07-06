import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { getHeroById } from "../../helpers/getHeroById";

const HeroScreen = () => {
  const { heroId } = useParams();
  const hero = getHeroById(heroId);

  if (!hero) {
    return <Navigate to="/" />;
  }

  return <div>HeroScreen</div>;
};

export default HeroScreen;
