document.getElementById('download').addEventListener('click', async () => {
  console.log('download');

  const users = await (await fetch('http://localhost:5001/api/report')).json();

  const sheetData = users.data.map(row => Object.values(row));

  const workbook = XLSX.utils.book_new();
  const worksheet = XLSX.utils.aoa_to_sheet(sheetData);
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Reporte');

  const excelBuffer = window.XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${new Date()}.xlsx`;
  link.click();
  window.URL.revokeObjectURL(url);
});
