
let membersData =[
  { name : 'John' , age : 23 , married : 'Yes'},
  { name : 'Mick' , age : 46 , married : 'Yes'},
  { name : 'Adam' , age : 33 , married : 'No'},
  { name : 'Sandy' , age :28 , married : 'No'},
  { name : 'Monica' , age : 53 , married : 'Yes'},
  { name : 'Jack' , age : 18 , married : 'No'},
  { name : 'Lesley' , age : 30 , married : 'Yes'},
  { name : 'Coby' , age : 60 , married : 'Yes'},

];

//Inject the data
window.onload = () =>{
  loadTableData(membersData)
};


function loadTableData(membersData){
  const tableBody = document.getElementById('tableData');
  let dataHtml = ' ';

  for(let members of membersData){
    dataHtml += `<tr><td>${members.name}</td><td class='mem_age'>${members.age}</td><td class='mem_maried'>${members.married}</td></tr>`;
  }

  tableBody.innerHTML =dataHtml;
}
//Button btnAv

document.getElementById('btnAv').onclick = function(){
  
  let sum = 0;
  let i;

  for( i = 0 ; i < membersData.length ; i++){
    
    sum = sum + membersData[i].age;
    
  }
  let avg = sum / membersData.length;
 alert('The avarage is : '+ avg);
}

document.getElementById('btnCount').onclick = function(){
  
  let sum = 0;
  let i = 0;

  membersData.filter(data =>{
    if(data.married.includes('Yes')){
      i++
     
    }
    
  })
  alert('Number of people who are married are' + ' ' + i);
 
}


