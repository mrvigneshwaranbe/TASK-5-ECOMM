let b=[]
let total=0;
let sp=document.getElementById("price")

function dis(){
    if(b.length<1)
    alert("Your cart is Empty!")
    else
    alert("Your order is placed")
}

function calculateTot(pdrt,qtn){
    total=total+(pdrt*qtn)
    
    sp.innerText=total
}

function reduceamt(pdrt,qtn){
    total=total-(pdrt*qtn)
    sp.innerText=total
}

function add(imglink,prdname,rateshw,rate,id)
  {
    if(b.indexOf(id)==-1)
    {
        b.push(id)
        let parentitem=document.getElementById("products")                       
        let divitem=document.createElement('div')
        divitem.className="border border-3 p-2"
        let countprd=0
        divitem.id="prd_"+countprd++
        let img=document.createElement('img')
        img.src=imglink
        img.style.width="15%"                                                  
        img.style.float="left"
        parentitem.appendChild(divitem)
        divitem.appendChild(img)
        let span=document.createElement('span')
        span.innerText=prdname
        divitem.appendChild(span)
        let span1=document.createElement('span')
        divitem.appendChild(document.createElement('br'))
        rateshw="₹ "+rateshw
        span1.innerText=rateshw
        divitem.appendChild(span1)
        divitem.appendChild(document.createElement('br'))
        let prdqnt=document.createElement('input')
        prdqnt.type="number"
        prdqnt.id=id
        prdqnt.max=500
        prdqnt.min=1
        prdqnt.value="1"
        prdqnt.style.width="15%"
        divitem.appendChild(prdqnt)
        let q=Number(document.getElementById(id).value)
        calculateTot(rate,q)
        let quantity=1
        prdqnt.addEventListener('change',()=>{
            if(quantity<prdqnt.value){
                calculateTot(rate,(prdqnt.value)-quantity)
            }else if(quantity>prdqnt.value){
                reduceamt(rate,quantity-(prdqnt.value))
            }  
            quantity=prdqnt.value
        })
        let delbtn=document.createElement('a')
        delbtn.onclick=remove
        function remove(){
            parentitem.removeChild(divitem)
            let c=b.indexOf(id)
            b.splice(c,1)
            reduceamt(rate,prdqnt.value)
    
    
        }
        let img1=document.createElement('img')
        img1.src="img/recycle-bin.png"
        delbtn.appendChild(img1)
        img1.style.width="5%"
        img1.style.float="right"
        divitem.appendChild(delbtn)
        console.log("hi i am working")
    }
   else
    {
        alert("Your item is already in the cart")
    }
  }