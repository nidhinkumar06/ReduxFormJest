import moment from 'moment';

export const Gender: object[] = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Other', value: 'other' },
  ];

export const CurrentDate = moment().format('YYYY-MM-DD');  