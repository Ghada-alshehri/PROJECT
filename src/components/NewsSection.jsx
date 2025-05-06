import React, { useEffect, useState } from "react";

// This component shows latest news from UN Volunteers RSS feed
function NewsSection() {
  const [articles, setArticles] = useState([]); // store fetched articles
  const [loading, setLoading] = useState(true); // loading state

  /*
State manage:
- articles: stores the fetched list of news articles.
- loading: tracks whether the data is still loading.
Props--> None
  */
  
  // This runs once when the component mounts
  useEffect(() => {
    // Fetch RSS data from the API
    fetch("https://api.rss2json.com/v1/api.json?rss_url=https://www.unv.org/rss.xml")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.items.slice(0, 5)); // take first 5 articles only
        setLoading(false); // stop loading after data fetched
      })
      .catch((error) => {
        console.error("Error fetching RSS feed:", error); // show error if request fails
        setLoading(false);
      });
  }, []);

  return (
    <section style={{ padding: "2rem" }}>
      {/* Section heading */}
      <h2 style={{ textAlign: "center" }}>Global Volunteering Updates</h2>

      {/* Show loading message if data is not yet loaded */}
      {loading ? (
        <p style={{ textAlign: "center" }}>Loading...</p>
      ) : (
        // Horizontal scroll container
        <div
          style={{
            display: "flex",
            overflowX: "auto",
            gap: "1rem",
            paddingTop: "1rem",
            scrollSnapType: "x mandatory", // for smooth horizontal scrolling
          }}
        >
          {/* Loop through each article */}
          {articles.map((article, index) => (
            <div
              key={index}
              style={{
                minWidth: "300px",
                backgroundColor: "#fff",
                borderRadius: "10px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                padding: "1rem",
                scrollSnapAlign: "start",
                flexShrink: 0,
              }}
            >
              {/* Show image if article has thumbnail */}
              {article.thumbnail && (
                <img
                  src={article.thumbnail}
                  alt={article.title}
                  style={{
                    width: "100%",
                    height: "180px",
                    objectFit: "cover",
                    borderRadius: "8px",
                    marginBottom: "0.5rem",
                  }}
                />
              )}

              {/* Show article title */}
              <h4 style={{ fontSize: "16px", marginBottom: "0.5rem" }}>
                {article.title}
              </h4>

              {/* Show short description without HTML tags */}
              <p style={{ fontSize: "14px", color: "#555" }}>
                {article.description?.replace(/<[^>]+>/g, "").slice(0, 100)}...
              </p>

              {/* Article link (can add "Read More" text here if needed) */}
              <a
                href={article.link}
                target="_blank"
                rel="noreferrer"
                style={{ color: "#007BFF", fontSize: "14px" }}
              >
                {/* You can write "Read more" inside this tag if needed */}
              </a>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default NewsSection;
