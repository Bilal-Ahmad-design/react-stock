import { useState } from 'react';
const Home = () => {
  const [share, setShare] = useState('Top share price is : ');
  const [price, setPrice] = useState(13);

  function priceF() {
    setPrice(price + 2);
  }

  return (
    <div className='data'>
      <p className='overview'>The KSE100 index todays performance</p>
      <p>
        {share} {price}
      </p>
      <button onClick={priceF}>Trending Price</button>
      <div id='content'></div>
    </div>
  );
};

export default Home;
