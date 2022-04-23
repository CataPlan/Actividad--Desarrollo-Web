function f1()
        {
            let s1 = document.getElementById("sable1");
            s1.style.transform="scaleY(1)";
            let fter = document.getElementById("footer");
            fter.style.transform="scaleY(1)";
        }   
        let m1=document.getElementById("mango1") ;
        m1.onclick=f1;
        

        function f2()
        {
            let s1 = document.getElementById("sable1");
            s1.style.transform="scaleY(0)";
            let fter = document.getElementById("footer");
            fter.style.transform="scaleY(0)";
            
        }
        let offsaable =document.getElementById("sable1");
        offsaable.onclick =f2;
        
        
        function f3()
        {
            let s1 = document.getElementById("sable2");
            s1.style.transform="scaleY(1)";
            
        }   
        let m2=document.getElementById("mango2");
        m2.onclick=f3;

        function f4(){
            let s1 = document.getElementById("sable2");
            s1.style.transform="scaleY(0)";
        }
        let s2 = document.getElementById("sable2");
        s2.onclick = f4;