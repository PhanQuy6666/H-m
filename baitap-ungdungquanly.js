let listProduct = [["Sony Xperia", 10],
                     ["Samdung Galaxy", 20],
                     ["Iphone 13 Pro Max", 30] ,
                     ["Iphone 13 Pro ", 35] ,
                     ["Iphone 13 ", 19],
                     ["Nokia 6300", 6],
                     ["Bphone", 9],
                   ]; 
listProduct.sort();
function showAllProduct(){
    let content = "";
    for (let index=0; index<listProduct.length; index++){
        content += `
        <tr>
        <td>${listProduct[index][0]}</td>
        <td><button onclick="editById(${index})">Edit</button></td>
        <td value="listProduct[index][1]">${listProduct[index][1]}</td>
        <td><button onclick="deleteById(${index})">Delete</button></td>
        </tr>
        
        `;
    }
    document.getElementById("listProduct").innerHTML = content;
    document.getElementById("numProduct").innerHTML = listProduct.length + " product";
}
showAllProduct();




function add(){
    let newProduct = document.getElementById("newProduct").value;
    listProduct.push(newProduct);
    showAllProduct();

    
    
}
function deleteById(index){
    listProduct.splice(index,1);
    showAllProduct();
} 
function editById(index){
    let nameEdit = prompt("Moi nhap lai :", listProduct[index]);
    listProduct[index] = nameEdit;
    showAllProduct();
}
function searchByName(){
    let nameSearch = document.getElementById("name").value;
    let content = "";
    let count = 0;
    for (let index=0; index<listProduct.length; index++){
        
        if (listProduct[index][0].search(nameSearch) != -1)
        {
        
        content += `
        <tr>
        <td>${listProduct[index][0]}</td>
        <td><button onclick="editById(${index})">Edit</button></td>
        <td value="listProduct[index][1]">${listProduct[index][1]}</td>
        <td><button onclick="deleteById(${index})">Delete</button></td>
        </tr>
        
        `;
        document.getElementById("listProduct").innerHTML = content;
        count++;
        }

        
    }
    document.getElementById("numProduct").innerHTML = count + " product";
    document.getElementById("nameProduct").innerHTML = "Search Results " + nameSearch;
    
    
}
// function Ascending(){
//     let content = "";
//     for (let index=0; index<listProduct.length; index++){
//         let price = listProduct[index][1];
//         console.log(price);
//         for (let index1=listProduct.length; index1 >= index; index1--){
            
//             let priceLast = listProduct[index1][1];
//             if (price > priceLast ){
//                 let temp = listProduct[index][index];
//                 listProduct[index][index] = listProduct[index1][index1];
//                 listProduct[index1][index1] = temp;
//                 let temp1 = listProduct[index+1][index+1];
//                 listProduct[index+1][index+1] = listProduct[index1+1][index1+1];
//                 listProduct[index1+1][index1+1] = temp1;
//             }
            
//         }
//         content += `
//                 <tr>
//                 <td>${listProduct[index][index]}</td>
//                 <td><button onclick="editById(${index})">Edit</button></td>
//                 <td value="listProduct[index][index+1]">${listProduct[index][index+1]}</td>
//                 <td><button onclick="deleteById(${index})">Delete</button></td>
//                 </tr>
                
//                 `;
        
//     }
//     document.getElementById("listProduct").innerHTML = content;
//     document.getElementById("numProduct").innerHTML = listProduct.length + " product";
// }





