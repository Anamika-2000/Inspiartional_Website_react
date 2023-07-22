import axios from "axios";
import { useEffect, useState } from "react";

function Inspirations() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8800/api/getInspirations");
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching data:", error);
        setError("Failed to fetch data. Please try again later.");
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-8">
      {data.length === 0 ? (
        <div>No data available.</div>
      ) : (
        <>
          <h1 className="text-3xl font-bold text-center mb-8">Inspirations List:</h1>
          <ul className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {data.map((item) => (
              <li key={item._id} className="bg-white p-4 rounded-lg shadow">
                <div className="mb-2">
                  <strong>Name:</strong> {item.firstName}
                </div>
                <div>
                  <strong>Inspiration:</strong> {item.inspiration}
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default Inspirations;
