import React, { useState } from 'react';
import { BpkCode } from '@skyscanner/backpack-web/bpk-component-code';
import BpkButton from '@skyscanner/backpack-web/bpk-component-button';
import BpkText from '@skyscanner/backpack-web/bpk-component-text';
import BpkCalendar, { CALENDAR_SELECTION_TYPE } from '@skyscanner/backpack-web/bpk-component-calendar';
import { cssModules } from '@skyscanner/backpack-web/bpk-react-utils';

import STYLES from './App.scss';

const getClassName = cssModules(STYLES);

const DAYS_OF_WEEK = [
  { name: 'Sunday',    nameAbbr: 'Sun', index: 0, isWeekend: true },
  { name: 'Monday',    nameAbbr: 'Mon', index: 1, isWeekend: false },
  { name: 'Tuesday',   nameAbbr: 'Tue', index: 2, isWeekend: false },
  { name: 'Wednesday', nameAbbr: 'Wed', index: 3, isWeekend: false },
  { name: 'Thursday',  nameAbbr: 'Thu', index: 4, isWeekend: false },
  { name: 'Friday',    nameAbbr: 'Fri', index: 5, isWeekend: false },
  { name: 'Saturday',  nameAbbr: 'Sat', index: 6, isWeekend: true },
];

const App = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className={getClassName('App')}>
      <header className={getClassName('App__header')}>
        <div className={getClassName('App__header-inner')}>
          <BpkText tagName="h1" textStyle="xxl" className={getClassName('App__heading')}>Flight Schedule</BpkText>
        </div>
      </header>
      <main className={getClassName('App__main')}>
        <BpkCalendar
          id="calendar"
          onDateSelect={date => setSelectedDate(date)}
          selectionConfiguration={{
            type: CALENDAR_SELECTION_TYPE.single,
            date: selectedDate,
          }}
          minDate={new Date()}
          maxDate={new Date(new Date().setFullYear(new Date().getFullYear() + 1))}
          daysOfWeek={DAYS_OF_WEEK}
          weekStartsOn={1}
          formatMonth={date => date.toLocaleString('default', { month: 'long', year: 'numeric' })}
          formatDateFull={date => date.toDateString()}
        />
        {selectedDate && (
          <BpkText tagName="p" className={getClassName('App__text')}>
            Selected: {selectedDate.toDateString()}
          </BpkText>
        )}
        <BpkButton onClick={() => alert('It works!')}>Click me</BpkButton>
      </main>
    </div>
  );
};

export default App;
