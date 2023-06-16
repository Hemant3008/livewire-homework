class School {
    constructor(schoolname,schooladdress){
        this.schoolname= schoolname;
        this.schooladdress=schooladdress;
    }
}

let sch= new School("Montfort","Nagpur")
console.log(sch);


class Students extends School{
    constructor(studentsname,rollno,std,engmarks,hinmarks,sst,schoolname,schooladdress){
        super(schoolname,schooladdress)
        this.studentsname=studentsname;
        this.rollno=rollno;
        this.std=std;
        this.engmarks=engmarks;
        this.hinmarks=hinmarks;
        this.sst=sst;
        this.scoolname=schoolname;
        this.schooladdress=schooladdress;
    }   
    
}
  let Stud=new Students("hemant","7","10","75","81","63","Montfort","Nagpur") 
 console.log(Stud)


//  create a class name Sbibank  which includes bank name , bank address, bank branch, bank ifsc code
// create a class name custmer which inherit class Sbibank and  its properties and which contains customer detials 
// as customer name , customer address, customer account number, customer balance etc .
// print the object of class customer

class Sbibank{
    constructor(bname,badd,bbranch,bifsccode){
        this.bankname=bname;
        this.bankaddress=badd;
        this.bankbranch=bbranch;
        this.ifsccode=bifsccode;
    }
}
 
class Customer extends Sbibank{
    constructor(cname,cadd,caccno,custbal,panno,acctype,bname,badd,bbranch,bifsccode){
        super(bname,badd,bbranch,bifsccode)
        this.customername=cname;
        this.customeraddress=cadd;
        this.customeraccountnumber=caccno;
        this.customerbalance=custbal;
        this.customerpanno=panno;
        this.customeracctype=acctype;
       
    }
}
let cust = new Customer("Hemant","Hingna","789456123","3245","ckcog0711f","saving","SBI","Hingna T-point","T-point","ifsc0123")
console.log(cust)