import React, { useState, useEffect } from "react";
import "./App.css";

const SWIGGY_API =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.6244&page_type=DESKTOP_WEB_LISTING";
const PROXY_URL = `https://api.allorigins.win/raw?url=${encodeURIComponent(SWIGGY_API)}`;
const IMAGE_CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

// Sub-Component: Restaurant Card
const RestaurantCard = ({ resData }) => {
  const {
    name,
    cloudinaryImageId,
    cuisines,
    avgRatingString,
    sla,
    costForTwo,
    locality,
  } = resData;

  const isHighRating = parseFloat(avgRatingString) >= 4.0;

  return (
    <div className="res-card">
      <div className="res-img-wrapper">
        <img
          className="res-img"
          src={`${IMAGE_CDN_URL}${cloudinaryImageId}`}
          alt={name}
          loading="lazy"
        />
        <span className={`rating-badge ${isHighRating ? "good" : "average"}`}>
          ⭐ {avgRatingString || "NEW"}
        </span>
      </div>

      <div className="res-details">
        <h3 className="res-name">{name}</h3>

        <div className="res-meta-row">
          <span>{sla?.slaString}</span>
          <span className="meta-separator">•</span>
          <span>{costForTwo}</span>
        </div>

        <p className="res-cuisines">{cuisines ? cuisines.join(", ") : ""}</p>

        <div className="res-locality">📍 {locality}</div>
      </div>
    </div>
  );
};

// Main Component
const App = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(PROXY_URL);
        if (!response.ok) throw new Error("Failed to reach Swiggy API streams");

        const json = await response.json();
        const cards = json?.data?.cards || [];
        let resList = [];

        // Scrape array structures to reliably locate the dynamic target object container
        for (const card of cards) {
          const potentialList =
            card?.card?.card?.gridElements?.infoWithStyle?.restaurants;
          if (potentialList) {
            resList = potentialList;
            break;
          }
        }

        setRestaurants(resList);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading)
    return <div className="status-message">Loading Swiggy Restaurants...</div>;
  if (error) return <div className="status-message error">Error: {error}</div>;

  return (
    <div className="app-wrapper">
      <h1 className="app-title">Restaurants Near You ({restaurants.length})</h1>

      <div className="restaurant-container">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
        ))}
      </div>
    </div>
  );
};

export default App;
