export const name = (value: string) => value && value.charAt(0).toUpperCase() + value.slice(1);

export const mobile = (value: string) => value.replace(/[^\d]/g, '').slice(0, 10);

export const mobileNumber = (value: string) =>
  value && !/^([6-9]\d{9})$/.test(value) ? 'Invalid mobile number, must be 10 digits' : undefined;

  export const accountNumber = (value: string) =>
  value
    .toUpperCase()
    .replace(/[^0-9]/g, '')
    .slice(0, 16);  