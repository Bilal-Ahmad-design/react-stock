const Home = () => {
  const shares = 'The share price is: ';
  const price = 12;
  return (
    <div className='data'>
      <p className='overview'>The KSE100 index todays performance</p>
      <p>
        {shares} {price}
      </p>
    </div>
  );
};

export default Home;
