import './Home.css';
import BarChart from '../BarChart/BarChart';
import { FaDollarSign, FaCoins, FaShoppingCart, FaUsers } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="Home">
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-5 mx-auto flex flex-wrap">
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <BarChart />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <div className="rounded flex p-4 h-full items-center justify-center box sameBox orangeBox">
                  <div className="text-center">
                    <FaDollarSign className="icon" />
                    <p>Sales Today</p>
                    <p>$120</p>
                  </div>
                </div>
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <div className="rounded flex p-4 h-full items-center justify-center box sameBox pinkBox">
                  <div className="text-center">
                    <FaCoins className="icon" />
                    <p>Total Earning</p>
                    <p>$81,020</p>
                  </div>
                </div>
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <div className="rounded flex p-4 h-full items-center justify-center box sameBox blueBox">
                  <div className="text-center">
                    <FaShoppingCart className="icon" />
                    <p>Total Orders</p>
                    <p>102</p>
                  </div>
                </div>
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <div className="rounded flex p-4 h-full items-center justify-center box sameBox greenBox">
                  <div className="text-center">
                    <FaUsers className="icon" />
                    <p>Visitor Today</p>
                    <p>81,020</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
