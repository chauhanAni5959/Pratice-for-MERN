import { useState, useEffect } from "react";
import React from "react";  
const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchSwiggyData = async () => {
    try {
      // Replace with your proxy or backend Express API URL
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.4316598&lng=80.3155655&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
      );
      if (!response.ok) {
        throw new Error("Failed to fetch restaurant dashboard data");
      }

      const json = await response.json();

      // DYNAMICALLY FIND THE RESTAURANT GRID CARD (Safest production method)
      const restaurantCardObj = json?.data?.cards?.find(
        (c) =>
          c?.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget" &&
          c?.card?.card?.id === "restaurant_grid_listing_v2",
      );

      // DRILL DOWN INTO THE ARRAY
      const extractedRestaurants =
        restaurantCardObj?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];

      setRestaurants(extractedRestaurants);
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  const filterTop = () => {};

  useEffect(() => {
    fetchSwiggyData();
  }, []);

  if (loading) return <div>Loading Kanpur Restaurants...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <button onClick={filterTop()}>Top rated</button>
      <h1>Top Restaurants in Kanpur</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {restaurants.slice(0, 10).map((item) => {
          const {
            id,
            name,
            avgRating,
            cuisines,
            cloudinaryImageId,
            costForTwo,
          } = item.info;

          return (
            <div
              key={id}
              style={{
                border: "1px solid #ddd",
                padding: "15px",
                borderRadius: "8px",
              }}
            >
              {/* Swiggy uses a CDN base URL for its images combined with the id */}
              <img
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
                alt={name}
                style={{
                  width: "100%",
                  height: "150px",
                  objectFit: "cover",
                  borderRadius: "6px",
                }}
              />
              <h3 style={{ margin: "10px 0 5px 0" }}>{name}</h3>
              <p style={{ margin: "0", color: "#666", fontSize: "14px" }}>
                {cuisines.join(", ")}
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "10px",
                  fontWeight: "bold",
                }}
              >
                <span style={{ color: avgRating >= 4 ? "green" : "orange" }}>
                  ⭐ {avgRating}
                </span>
                <span>{costForTwo}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
