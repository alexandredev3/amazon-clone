interface RCF {
  renderText: (value) => void;
  decimalScale: number;
  value: any;
  displayType: string;
  thousandSeparator: boolean;
  prefix: string;
}

declare module 'react-currency-format' {
  var reactcurrencyformat: RFC;

  export = reactcurrencyformat;
}