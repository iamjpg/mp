export function formatNumber(num) {
  if (num > 999 && num < 1000000) {
    return (num / 1000).toFixed(1) + 'K';
  } else if (num > 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  } else {
    return num;
  }
}
