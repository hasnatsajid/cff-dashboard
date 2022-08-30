import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src="/images/logo.svg" alt="CFF logo" />
      </div>

      <div className="sidebar-items">
        <Link to="/">
          <div className="item">
            <img src="/images/business.svg" alt="my business" />
            <p>Business</p>
          </div>
        </Link>
        <Link to="/customer">
          <div className="item">
            <img src="/images/customer.png" alt="my business" />
            <p>Customer</p>
          </div>
        </Link>
        <Link to="/">
          <div className="item">
            <img src="/images/vehicles.svg" alt="my business" />
            <p>Vehicles</p>
          </div>
        </Link>
        <Link to="/">
          <div className="item">
            <img src="/images/drivers.svg" alt="my business" />
            <p>Drivers</p>
          </div>
        </Link>
        <Link to="/">
          <div className="item">
            <img src="/images/coverage.svg" alt="my business" />
            <p>Coverage</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
