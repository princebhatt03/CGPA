document.addEventListener('DOMContentLoaded', function () {
  const cgpaCells = document.querySelectorAll('tbody tr td:last-child');
  let totalCGPA = 0;

  cgpaCells.forEach(cell => {
    totalCGPA += parseFloat(cell.textContent);
  });

  const aggregateCGPA = (totalCGPA / cgpaCells.length).toFixed(2);
  console.log('Aggregate CGPA:', aggregateCGPA);
});
