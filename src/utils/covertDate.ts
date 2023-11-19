function convertDateToBrazilianFormat(date: string) {
    const dateParts = date.split('-');
  
    if (dateParts.length !== 3) {
      return 'Invalid Date';
    }
  
    const year = dateParts[0];
    const month = dateParts[1];
    const day = dateParts[2];
  
    const formattedDate = `${day}/${month}/${year}`;
  
    return formattedDate;
  }
  
  export { convertDateToBrazilianFormat };