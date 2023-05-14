import { TextField } from '@mui/material';
import moment from 'moment';
import { useCallback } from 'react';
import { useState } from 'react';
import { Calendar } from 'react-date-range';
import * as locales from 'react-date-range/dist/locale';

export default function DatePickerComponent({ handleChangeDate, date, className, style, setDate }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  const handleOpen = useCallback(() => {
    setOpen((prevState) => !prevState);
  }, []);

  const handleChangeDatePicker = useCallback(
    (value) => {
      console.log(value, 'value is here');
      setValue(value);
      setOpen(false);
      handleChangeDate && handleChangeDate(value);
      setDate(moment(value).format('YYYY-MM-DD'))
    },
    [handleChangeDate]
  );

  return (
    <>
      <TextField
        fullWidth
        onClick={handleOpen}
        size="small"
        label="Quand"
        value={value ? moment(value).format('DD MMMM') : ''}
        sx={{
          ...style
        }}
      />
      {open && (
        <Calendar
          className={className}
          showMonthAndYearPickers={false}
          onChange={handleChangeDatePicker}
          locale={locales['fr']}
          date={date}
        />
      )}
    </>
  );
}
