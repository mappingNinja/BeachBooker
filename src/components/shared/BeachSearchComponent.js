import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import { useCallback, useEffect, useState } from 'react';
import { getBeachSearchData } from 'src/services/api/user.api';
import { Box, ListItem, ListItemAvatar, ListItemButton, ListItemText } from '@mui/material';
import axios from 'axios';

export default function BeachSearchComponent({ handleOnchangeCustomer, label, style, setCity, setCityId }) {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([{ names: { fr: 'Around Me', value: 'around_me' } }]);
  const [newInputValue, setNewInputValue] = useState(null);
  const loading = open && options.length === 0;

  const aroundMeUrl = 'https://www.freeiconspng.com/thumbs/location-icon-png/location-icon-24.png';
  useEffect(() => {
    beachSearchData();
  }, [newInputValue]);

  const beachSearchData = async () => {
    let results = await getBeachSearchData(newInputValue);
    if (results) {
      setOptions((prevStat) => [...prevStat, ...results]);
    }
    return;
  };

  const handleInputChange = useCallback((value) => {
    setNewInputValue(value);
    const cityValue = value?.replace(' ', '-');
    setCity(cityValue);
    if (!value) {
      setCityId('');
    }
  }, []);

  useEffect(() => {
    if (!open) {
      // setOptions([]);
    }
  }, [open]);

  return (
    <Autocomplete
      id="customer-asynchronous-demo"
      fullWidth
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      sx={{
        ...style,
      }}
      size="small"
      options={options}
      loading={loading}
      onChange={handleOnchangeCustomer}
      onInputChange={async (event, newInputValue) => {
        handleInputChange(newInputValue);
      }}
      getOptionLabel={(option) => (option.names ? option.names?.fr : '')}
      renderOption={(props, option, { selected }) => {
        const { imageFiles = [], names, city } = option;

        const imageUrl = (imageFiles || [])[0]?.url;

        return (
          <ListItem
            {...props}
            key={option.id}
            disablePadding
            disableGutters
            dense={true}
            sx={{ height: '60px', borderRadius: '14px' }}
          >
            <ListItemButton onClick={() => setCityId(option?.id)}>
              <ListItemAvatar>
                <Box
                  sx={{
                    width: '43px',
                    height: '43px',
                    borderRadius: '4px',
                  }}
                  component="img"
                  alt={names?.fr}
                  src={imageUrl || aroundMeUrl}
                />
              </ListItemAvatar>
              <ListItemText sx={{ color: '#06133a' }} id={option.id} primary={names?.fr} secondary={city?.name} />
            </ListItemButton>
          </ListItem>
        );
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          sx={{
            background: '#fff',
            borderRadius: '19px',
          }}
          label={label}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
    />
  );
}
