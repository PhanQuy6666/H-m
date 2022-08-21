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
        <td><button onclick="moreById(${index})">More</button></td>
        <td><button onclick="lessById(${index})">Less</button></td>
        </tr>
        
        `;
    }
    document.getElementById("listProduct").innerHTML = content;
    document.getElementById("numProduct").innerHTML = listProduct.length + " product";
}
showAllProduct();




function add(){
    let newProduct = document.getElementById("newProduct").value;
    let newPrice = document.getElementById("newPrice").value;
    listProduct.push([newProduct, newPrice]);
    showAllProduct();

    
    
}
function deleteById(index){
    listProduct.splice(index,1);
    showAllProduct();
} 
function editById(index){
    let nameEdit = prompt("Moi nhap lai san pham :", listProduct[index][0]);
    listProduct[index][0] = nameEdit;
    let priceEdit = prompt("Moi nhap lai gia :", listProduct[index][1]);
    listProduct[index][1] = priceEdit;
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
            <td><button onclick="moreById(${index})">More</button></td>
            <td><button onclick="lessById(${index})">Less</button></td>
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
//         for (let index1=listProduct.length-1; index1 >= index; index1--){
//             let priceLast = listProduct[index1][1];
//             if (price > priceLast ){
//                 let temp = listProduct[index];
//                 listProduct[index] = listProduct[index1];
//                 listProduct[index1] = temp;
//             }
            
//         }
//         content += `
//                 <tr>
//                 <td>${listProduct[index][0]}</td>
//                 <td><button onclick="editById(${index})">Edit</button></td>
//                 <td value="listProduct[index][1]">${listProduct[index][1]}</td>
//                 <td><button onclick="deleteById(${index})">Delete</button></td>
//                 </tr>
                
//                 `;
        
//     }
//     document.getElementById("listProduct").innerHTML = content;
//     document.getElementById("numProduct").innerHTML = listProduct.length + " product";
// }

function Ascending(){
    listProduct.sort((first,second)=>{return first[1]-second[1]});
    showAllProduct()
}
function decrease(){
    listProduct.sort((first,second)=>{return second[1]-first[1]});
    showAllProduct()
}

 
let listCart = [];
let numCart = [];
let count = 0;
function moreById(index){
    count++;
    document.getElementById("numCart").innerHTML = "Cart " + "(" + count + ")";
    let check = listCart.indexOf(listProduct[index]);
    if (check == -1){
        listCart.push(listProduct[index]);
        numCart.push(1);
    }   
    else{
        numCart[check]++;
    }
    
    
}
function lessById(index){
    count--
    listCart.splice(index,1);
    document.getElementById("numCart").innerHTML = "Cart " + "(" + count + ")";
    
    
}


function cart(){
    let content = "";
    for (let indexCart=0; indexCart<listCart.length; indexCart++){
        content += `
        <tr>
        <td colspan="2">${listCart[indexCart][0]}</td>
        
        <td value="listProduct[index][1]">${listCart[indexCart][1]}</td>
        <td><button onclick="deleteById(${indexCart})">Delete</button></td>
        <td>${numCart[indexCart]}</td>
        </tr>
        
        `;
    }
    document.getElementById("listProduct").innerHTML = content;
    document.getElementById("numProduct").innerHTML = listCart.length + " product";
    document.getElementById("buy").innerHTML = "So luong";
    
    
}
function deleteById(indexCart){
    listCart.splice(indexCart,1);
    cart();
}





