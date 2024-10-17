import React, { useState, useEffect } from 'react';
import useAxios from '../../../../routes/useAxios';
import { useSelector } from 'react-redux';
import { 
  Box, Typography, IconButton, Button, FormControl, 
  InputLabel, Select, MenuItem, TextField, Table, 
  TableBody, TableCell, TableContainer, TableHead, 
  TableRow, Paper 
} from '@mui/material';
import UploadFile from '@mui/icons-material/UploadFile';
import ArrowUpward from '@mui/icons-material/ArrowUpward';
import ArrowDownward from '@mui/icons-material/ArrowDownward';

import { styled } from '@mui/material/styles';  // Import styled

function TradersIdea() {
  const api = useAxios();
  const { user } = useSelector((state) => state.auth);
  const [message, setMessage] = useState('');
  const [traderIdea, setTraderIdea] = useState(null);
  const [traderIdeaUrl, setTraderIdeaUrl] = useState(null);
  const [tradeSignal, setTradeSignal] = useState('');
  const [currencyPair, setCurrencyPair] = useState('');
  const [postDateTime, setPostDateTime] = useState('');
  const [publisherTrader, setPublisherTrader] = useState('');
  const [traderPlatform, setTraderPlatform] = useState('');
  const [submittedData, setSubmittedData] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('user', user.id);
    formData.append('trader_idea', traderIdea);
    formData.append('trade_signal', tradeSignal);
    formData.append('currency_pair', currencyPair);
    formData.append('post_date_time', postDateTime);
    formData.append('publisher_trader', publisherTrader);
    formData.append('trader_platform', traderPlatform);

    try {
      const response = await api.post('/newidea/traderideas/', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      if (response.status === 201) {
        setMessage('Trader Idea submitted successfully!');
        setTraderIdea(null);
        setTraderIdeaUrl(null);
        setTradeSignal('');
        setCurrencyPair('');
        setPostDateTime('');
        setPublisherTrader('');
        setTraderPlatform('');

        // Add the submitted data to the state
        setSubmittedData(prevData => [
          ...prevData, 
          {
            traderIdeaUrl,
            tradeSignal,
            currencyPair,
            postDateTime,
            publisherTrader,
            traderPlatform
          }
        ]);

      } else {
        setMessage('Error submitting Trader Idea. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting Trader Idea:', error);
      setMessage(`Error submitting Trader Idea: ${error.response?.data?.detail || error.message}`);
    }
  };

  const handleTraderIdeaChange = (event) => {
    const file = event.target.files[0];
    setTraderIdea(file);
    setTraderIdeaUrl(URL.createObjectURL(file));
  };

  useEffect(() => {
    return () => {
      if (traderIdeaUrl) {
        URL.revokeObjectURL(traderIdeaUrl); // Clean up URL
      }
    };
  }, [traderIdeaUrl]);

  // Styled TableHead for customization
  const StyledTableHead = styled(TableHead)(({ theme }) => ({
    backgroundColor: theme.palette.info.light, 
    '& .MuiTableCell-root': {  // Style all cells within the header
      fontWeight: 'bold',
      border: '1px solid #ddd', // Add a border to each header cell
    }
  }));
  

  return (
    <Box sx={{ m: 9 }} component="form" onSubmit={handleSubmit}>
      <h1>Add Trading Idea</h1>

      {user && <p>Logged in as: {user.username}</p>}
      {message && <div className="alert alert-info">{message}</div>}

      <Box sx={{ mr: 4 }}>
        <FormControl fullWidth sx={{ mt: 2 }}>
          <InputLabel>Currency Pair</InputLabel>
          <Select value={currencyPair} onChange={(e) => setCurrencyPair(e.target.value)}>
          <MenuItem value="AUDCAD">AUDCAD</MenuItem>
            <MenuItem value="AUDUSD">AUDUSD</MenuItem>
            <MenuItem value="AUDCHF">AUDCHF</MenuItem>
            <MenuItem value="AUDNZD">AUDNZD</MenuItem>
            <MenuItem value="AUDJPY">AUDJPY</MenuItem>
            <MenuItem value="BTCUSD">BTCUSD</MenuItem>
            <MenuItem value="CADJPY">CADJPY</MenuItem>
            <MenuItem value="CHFJPY">CHFJPY</MenuItem>
            <MenuItem value="EURAUD">EURAUD</MenuItem>
            <MenuItem value="EURCAD">EURCAD</MenuItem>
            <MenuItem value="EURUSD">EURUSD</MenuItem>
            <MenuItem value="EURCHF">EURCHF</MenuItem>
            <MenuItem value="EURNZD">EURNZD</MenuItem>
            <MenuItem value="EURJPY">EURJPY</MenuItem>
            <MenuItem value="EURCAD">EURCAD</MenuItem>
            <MenuItem value="GBPAUD">GBPAUD</MenuItem>
            <MenuItem value="GBPCAD">GBPCAD</MenuItem>
            <MenuItem value="GBPCHF">GBPCHF</MenuItem>
            <MenuItem value="GBPJPY">GBPJPY</MenuItem>
            <MenuItem value="GBPNZD">GBPNZD</MenuItem>
            <MenuItem value="GBPUSD">GBPUSD</MenuItem>
            <MenuItem value="NZDCAD">NZDCAD</MenuItem>
            <MenuItem value="NZDJPY">NZDJPY</MenuItem>
            <MenuItem value="NZDUSD">NZDUSD</MenuItem>
            <MenuItem value="USDCAD">USDCAD</MenuItem>
            <MenuItem value="USDCHF">USDCHF</MenuItem>
            <MenuItem value="USDJPY">USDJPY</MenuItem>
            <MenuItem value="USOIL">USOIL</MenuItem>
            <MenuItem value="XAGUSD">XAGUSD</MenuItem>
            <MenuItem value="XAUUSD">XAUUSD</MenuItem>
            <MenuItem value="JUMP75">JUMP75</MenuItem>
            <MenuItem value="Vix10">Vix10</MenuItem>
          </Select>
        </FormControl>

        <Typography variant="subtitle1" sx={{ mb: 2, mt: 2 }}>
          Trading Idea Image
        </Typography>
        {traderIdeaUrl && (
          <img
            src={traderIdeaUrl}
            alt="Trading Idea"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              borderRadius: 4,
              border: '2px solid #ccc',
              objectFit: 'cover',
            }}
          />
        )}
        <input
          accept="image/*"
          style={{ display: 'none' }}
          id="trader-idea-input"
          type="file"
          onChange={handleTraderIdeaChange}
        />
        <label htmlFor="trader-idea-input">
          <IconButton color="primary" aria-label="upload trading idea" component="span">
            <UploadFile />
          </IconButton>
        </label>

        <FormControl fullWidth sx={{ mt: 2 }}>
          <InputLabel>Trade Signal</InputLabel>
          <Select value={tradeSignal} onChange={(e) => setTradeSignal(e.target.value)}>
            <MenuItem value="buy">
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <ArrowUpward color="primary" fontSize="small" />
                <Typography variant="body2" sx={{ ml: 1 }}>
                  Buy
                </Typography>
              </Box>
            </MenuItem>
            <MenuItem value="sell">
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <ArrowDownward color="error" fontSize="small" />
                <Typography variant="body2" sx={{ ml: 1 }}>
                  Sell
                </Typography>
              </Box>
            </MenuItem>
          </Select>
        </FormControl>

        <TextField
          id="post-date-time"
          label="Post Date and Time"
          type="datetime-local"
          fullWidth
          variant="outlined"
          value={postDateTime}
          onChange={(event) => setPostDateTime(event.target.value)}
          margin="normal"
          InputLabelProps={{
            shrink: true
          }}
        />

        <TextField
          id="publisher-trader"
          select
          label="Publisher Trader"
          fullWidth
          variant="outlined"
          value={publisherTrader}
          onChange={(e) => setPublisherTrader(e.target.value)}
          margin="normal"
        >
          {['FX_Elite_Club', 'Golden Engine', 'Mobbie_zw', 'Mjuni Fx', 'KhabiFx', 'Sir Drapo', 'SetupFx', 'StockSniper', 'TransparentFx', 'Other Trader'].map((platform) => (
            <MenuItem key={platform} value={platform}>
              {platform}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          id="trader-platform"
          select
          label="Trader Platform"
          fullWidth
          variant="outlined"
          value={traderPlatform}
          onChange={(e) => setTraderPlatform(e.target.value)}
          margin="normal"
        >
          {['Trading View', 'YouTube', 'Whatsapp' ].map((platform) => (
            <MenuItem key={platform} value={platform}>
              {platform}
            </MenuItem>
          ))}
        </TextField>
      </Box>

      <Button variant="contained" color="primary" type="submit">
        Submit Trader Idea
      </Button>
      {message && <div className="alert alert-info">{message}</div>}

      {/* Display Submitted Data */}
      {submittedData.length > 0 && (
        <TableContainer component={Paper} sx={{ mt: 4 }}>
          <Table>
            <StyledTableHead>
              <TableRow>
                <TableCell>Trading Idea</TableCell>
                <TableCell>Trade Signal</TableCell>
                <TableCell>Currency Pair</TableCell>
                <TableCell>Post Date and Time</TableCell>
                <TableCell>Publisher Trader</TableCell>
                <TableCell>Trader Platform</TableCell>
              </TableRow>
            </StyledTableHead>
            <TableBody>
              {submittedData.map((data, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <img src={data.traderIdeaUrl} alt="Trading Idea" style={{ width: '100px', height: 'auto' }} />
                  </TableCell>
                  <TableCell>{data.tradeSignal}</TableCell>
                  <TableCell>{data.currencyPair}</TableCell>
                  <TableCell>{data.postDateTime}</TableCell>
                  <TableCell>{data.publisherTrader}</TableCell>
                  <TableCell>{data.traderPlatform}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
}

export default TradersIdea;
