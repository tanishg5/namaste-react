import { RestaurantCard } from "./RestaurantCard";
import { useState, useEffect } from "react";
import { Shimmer } from "./Shimmer";

export const Body = () => {
  const [listofRestaurants, SetListofRestaurants] = useState([]);
  const [filteredRestaurant , setfilteredRestaurent] = useState([]);

  const [searchText, setsearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9124&lng=75.7873&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    const restaurants = json?.data?.cards?.find(
      (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
    )?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    console.log(restaurants);
    SetListofRestaurants(restaurants);
    setfilteredRestaurent(restaurants);
  };

  // console.log("body rendered");

  //conditional rendering

  return listofRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="Body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
              console.log(searchText);
            }}
          />
          <button
            onClick={() => {
              //Filter the restaurant cards and update the UI
              //searchText
              // next time i will filter it will filter from the list of restaurants only.....
             const filteredRestro =  listofRestaurants.filter((res) => res.info?.name.toLowerCase().includes(searchText.toLowerCase()));
             console.log(filteredRestro);
             setfilteredRestaurent(filteredRestro);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            // filter logic
            const filteredLists = listofRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setfilteredRestaurent(filteredLists);
          }}
        >
          Top Rated Restaurants{" "}
        </button>
      </div>
      <div className="res-container">
        {/* Try to make dynamic card if there are multiple restaurants eg. meghana foods , kfc etc.. */}
        {/* How can we make 2nd card for kfc ? - Props comes in picture (properties) */}
        {/* Passing propes to a component */}
        {/* config driven ui changes based on data being sent from Backend */}
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
