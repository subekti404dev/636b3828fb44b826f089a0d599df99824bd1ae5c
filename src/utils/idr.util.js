const idr = (value) => {
  let reverse = value.toString().split('').reverse().join('');
  let ribuan = reverse.match(/\d{1,3}/g);
  ribuan = ribuan.join('.').split('').reverse().join('');
  return `Rp ${ribuan}`;
}

export { idr }