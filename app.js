function but1()
{
  const element = document.getElementById('sub');
  const newDiv = document.createElement('div');
  const newText = document.createElement('p');
  newText.innerHTML = "hammad"
  newDiv.appendChild(element);
  newDiv.appendChild(newText);
  html2pdf()
  .from(element)
  .save();
}




