export const formatCurrency = (amount) =>
  new Intl.NumberFormat('ko-KR', {
    style: 'currency',
    currency: 'KRW'
  }).format(amount);

export const formatDate = (date) => {
  if (!date) return '날짜 정보 없음';
  if (date instanceof Date === false && typeof date.toDate === 'function') {
    date = date.toDate();
  }
  const d = new Date(date);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')} ${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
};
