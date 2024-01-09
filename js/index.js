var ProductName=document.getElementById("ProductName");
var Productprice=document.getElementById("Productprice");
var ProductCategory=document.getElementById("ProductCategory");
var ProductDesc=document.getElementById("ProductDesc");
//var buttonSearch=document.getElementById("search")
var mainBtn=document.getElementById("mainbtn")
var productcontainer;

if(localStorage.getItem('products')==null){
    productcontainer=[]
}
else{
    productcontainer=JSON.parse(localStorage.getItem("products"));
    displayproduct(productcontainer)
}



function addproduct(){

   
        var products={
            proName:ProductName.value,
            proPrice:Productprice.value,
            proCategory:ProductCategory.value,
            proDesc:ProductDesc.value,
            
        }
        productcontainer.push(products);//add object value to array
        localStorage.setItem("products",JSON.stringify(productcontainer))
        displayproduct(productcontainer);
       clearForm()

  
   
}

function displayproduct(productList){
    cartona=``;
    for(var i=0 ;i<productList.length;i++){
        cartona+=`<tr>
        <td>${i}</td>
        <td>${productList[i].proName}</td>
        <td>${productList[i].proPrice}</td>
        <td>${productList[i].proCategory}</td>
        <td>${productList[i].proDesc}</td>
        <td><button class="btn btn-warning" onclick="updateproduct(${i})">Update</button></td>
        <td><button class="btn btn-danger" onclick="deletProduct(${i})">Delete</button></td>

    </tr>`
    };
    document.getElementById("tablerow").innerHTML=cartona
}
function clearForm(){
    ProductName.value='';
    Productprice.value='';
    ProductCategory.value='';
    ProductDesc.value='';

}


function deletProduct(proNumber){
    productcontainer.splice(proNumber,1);
    localStorage.setItem("products",JSON.stringify(productcontainer));

    displayproduct(productcontainer);
}


   function searchproducts(term){
    
    var searchList=[];

    for(i=0;i<productcontainer.length;i++)
    {
         if(productcontainer[i].proName.toLowerCase().includes(term.toLowerCase()) == true)

         {
        
    searchList.push(productcontainer[i])

    }
    

    }
    displayproduct(searchList);
} 

function updateproduct(index){
    ProductName.value=productcontainer[index].proName;
    Productprice.value=productcontainer[index].proPrice;
    ProductCategory.value=productcontainer[index].proCategory;
    ProductDesc.value=productcontainer[index].proDesc;
    mainBtn.innerHTML="update product";
    deletProduct(index);

}



