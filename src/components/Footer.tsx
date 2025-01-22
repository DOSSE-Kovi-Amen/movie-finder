const Footer = () => {
    return (
      <footer className="bg-black text-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Movie<i className="text-red-600">Finder</i> . Tous droits réservés.</p>
          <div className="flex justify-center space-x-6 mt-3">
            <a href="#" className="hover:text-red-500 transition duration-300">Mentions légales</a>
            <a href="#" className="hover:text-red-500 transition duration-300">Confidentialité</a>
            <a href="#" className="hover:text-red-500 transition duration-300">Contact</a>
          </div>
          <div className="mt-3 flex justify-center space-x-4">
            <a href="#" className="hover:text-red-500 transition duration-300">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="hover:text-red-500 transition duration-300">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-red-500 transition duration-300">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  