import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { restro } = props;
  const { name, avgRating, cuisines, costForTwo, sla } = restro?.info;
  return (
    <div className="res-card m-4 p-4 w-[250px] bg-gray-100 rounded-md hover:bg-gray-200">
      <img className="res-logo" src={CDN_URL + restro.info.cloudinaryImageId} />
      <h3 className="font-bold py-2 text-lg ">{name}</h3>
      <h4>{avgRating}</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.slaString}</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    <div>
      <label>New</label>
      <RestaurantCard {...props} />
    </div>;
  };
};

export default RestaurantCard;
