import * as yup from 'yup';

export let searchSchema = yup.object().shape({
  searchQuery: yup.string().trim().matches(/^[A-Za-z0-9 ]+$/gm, 'Invalid characters in a string, please use only letters and numbers. Empty string is not valid')
});
