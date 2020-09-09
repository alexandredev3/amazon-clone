interface RCF {
  renderText: (value) => void;
  decimalScale: number;
  velue: any;
  displayType: string;
  thousandSeparator: boolean;
  prefix: string;
}

declare module 'react-currency-format' {
  var reactcurrencyformat: RFC;

  export = reactcurrencyformat;
}