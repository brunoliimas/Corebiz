export const formatNumber = number => {
   return new Intl.NumberFormat('pt-br', {  style: 'currency', currency: 'BRL' }).format(number);
}
