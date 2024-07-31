import { useState, useEffect } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Footer from "./Footer";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [RestaurantList, setRestaurantList] = useState([]);
  const [FilteredData, setFilteredData] = useState([]);
  const [Searchtext, setSearchText] = useState("");
  const PromotedRestaurant = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);

    setRestaurantList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredData(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return <h1>looks like yore online, please check internet connection!</h1>;

  return RestaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter m-4 p-4">
        <div className="input-cont flex">
          <div>
            <input
              type="text"
              className="search-bar border border-solid border-black rounded-md"
              value={Searchtext}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />

            <button
              className="search-btn rounded-lg border-s-black bg-gray-400 m-4 px-4 py-2"
              onClick={() => {
                const FilteredData = RestaurantList.filter((rest) => {
                  return rest.info.name
                    .toLowerCase()
                    .includes(Searchtext.toLowerCase());
                });
                setFilteredData(FilteredData);
              }}
            >
              Search
            </button>
          </div>
          <div />
          <button
            className="filter-btn rounded-lg border-s-black bg-blue-400 m-4 px-4 py-2"
            onClick={() => {
              const filteredList = RestaurantList.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredData(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="res-cont flex flex-wrap">
          {FilteredData.map((restaurant) => (
            <Link
              className="text-link"
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              {restaurant.info.isNewlyOnboarded ? (
                <PromotedRestaurant restro={restaurant} />
              ) : (
                <RestaurantCard restro={restaurant} />
              )}
            </Link>
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Body;
