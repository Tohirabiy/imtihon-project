import { useEffect, useState } from "react";

import "./style.scss";
import ServicCard from "../../components/UI/ServiceCard";
import serviceApi from "./../../service/services/index";

const index = () => {
  const [service, setService] = useState([]);

  useEffect(() => {
    serviceApi
      .getAll()
      .then((res) => {
        setService(res.data.services);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <section id="services">
      <div className="container">
        <div className="all">
          <div className="top-ser">
       
            <div className="top-text">
              <h1 className="h_one">Services</h1>
              <p className="p_one">What our student say about us</p>
            </div>
          </div>

          <div className="service_cards">
            {service.map((e) => {
              return <ServicCard key={e._id} state={e} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
