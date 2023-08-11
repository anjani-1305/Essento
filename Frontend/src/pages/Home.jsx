import React from 'react';
import HeaderComponent from '../components/Header';

const Home = () => {
  const backgroundImageUrl = 'https://coolbackgrounds.io/images/backgrounds/index/compute-ea4c57a4.png';

  return (
    <div
      style={{
        position: 'relative', // Add a relative positioning to the container
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', // Adjust the height according to your content
        backdropFilter: 'blur(5px)', // Add the blur effect (adjust the value as needed)
        WebkitBackdropFilter: 'blur(5px)', // For Safari support
        backgroundColor: 'rgba(255, 255, 255, 0.5)', // Set a slight transparency for the blur effect
      }}
    >
      <HeaderComponent />
      <div style={{ paddingTop: '60px' }}>
        {/* Add your content for the home page here */}
      </div>
    </div>
  );
};

export default Home;
