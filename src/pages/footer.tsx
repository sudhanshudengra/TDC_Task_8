const Footer: React.FC = () => {
    return (
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} My AirWays</p>
          <p className="text-sm text-gray-100 sm:ml-4 sm:pl-4 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4"><b>Head Office: </b>™ <br />Plot-1 Sapetia Road <br /> Udaipur, Rajasthan 313001</p>
          </div>
      </footer>
    );
  };
  
  export default Footer;