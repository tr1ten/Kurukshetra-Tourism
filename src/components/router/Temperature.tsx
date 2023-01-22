import { useEffect, useState } from "react";
import { FaCloudSun } from "react-icons/fa";
function Temperature() {
    const [temperature, setTemperature] = useState(0);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch("https://api.weatherapi.com/v1/current.json?key=51441fed7c4c42288dc63014232201&q=Haryana&aqi=no").then(res => res.json()).then(data => {
            setTemperature(data.current.temp_c);
            setLoading(false);
        });
    },[])
    return (
        <div className="flex items-center justify-center gap-2 mx-2">
            <FaCloudSun className="text-xl text-yellow-500" />
            <p className="">{loading ? "Loading..." : temperature} &#x2103; </p>
        </div>

    );
}

export default Temperature;