import { RestaurantCard } from "./RestaurantCard";
import { restaurantList } from "../utils/mockData";
import { useState } from "react"; 
export const Body = () => {
  
  const [listofRestaurants , SetListofRestaurants] = useState(restaurantList);
  
  return (
    <div className="Body">
      <div className="filter">
        <button className="filter-btn" onClick={() => {
          // filter logic 
          const filteredLists = listofRestaurants.filter(res => res.data?.avgRating > 4);
          SetListofRestaurants(filteredLists);
        }}>
          Top Rated Restaurants{" "}
        </button>
      </div>
      <div className="res-container">
        {/* Try to make dynamic card if there are multiple restaurants eg. meghana foods , kfc etc.. */}
        {/* How can we make 2nd card for kfc ? - Props comes in picture (properties) */}
        {/* Passing propes to a component */}
        {/* config driven ui changes based on data being sent from Backend */}
        {listofRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
