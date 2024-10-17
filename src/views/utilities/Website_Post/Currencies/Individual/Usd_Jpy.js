import React, { useState } from 'react';
import TradeTable from '../TradeData';
import ImageGrid from '../ImageGrid';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import TradersIdea from '../../TradersIdea/TradersIdeas';
import TradeForm from '../TradeForm';
import MgiStrategy from '../../MgiCandles/MgiStategy';

const Usd_Jpy = () => {
  const [componentToShow, setComponentToShow] = useState(null);

  const handleButtonClick = (component) => {
    setComponentToShow(component);
  };

  return (
    <div>
      <h1>Trade Data Table</h1>
      <Button
        variant="contained"
        color="inherit"
        startIcon={<AddIcon />}
        sx={{ textTransform: 'none' }}
        onClick={() => handleButtonClick('newIdea')}
      >
        New Idea
      </Button>

      <Button
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        sx={{ textTransform: 'none' }}
        onClick={() => handleButtonClick('newEntry')}
      >
        New Entry
      </Button>

      <Button
        variant="contained"
        color="secondary"
        startIcon={<AddIcon />}
        sx={{ textTransform: 'none' }}
        onClick={() => handleButtonClick('mgiStrategy')}
      >
        MGI Strategy
      </Button>
      
      <TradeTable />

      <h1>Trade Images</h1>
      <ImageGrid />

      {/* Conditionally render the components based on the button clicked */}
      {componentToShow === 'newIdea' && <TradersIdea />}
      {componentToShow === 'newEntry' && <TradeForm />}
      {componentToShow === 'mgiStrategy' && <MgiStrategy />}
    </div>
  );
};

export default Usd_Jpy;
