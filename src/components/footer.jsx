const Footer = () => {
  const CurrentYear = new Date().getFullYear();
  return (
    <div className="text-center py-4 bg-black text-white fixed bottom-0 left-0 w-full">
      <p>&copy;{CurrentYear} @ Shopping-cart. All rights reserved</p>
    </div>
  );
};

export default Footer;
