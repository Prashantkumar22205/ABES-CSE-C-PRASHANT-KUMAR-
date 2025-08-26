# include <iostream>

using namespace std;

int main(){
    
    int a[5] ;
    int s =0;
    int l= 4;
   
    for(int i=0 ;i<5 ; i++){
        cout<<"enter the number"<<i <<":";

        cin>>a[i];

    }

    int f;
    cout<<"enter the number";
    cin>>f;

   while(s<l ){
    int mid = l+(l-s)/2;
    if(mid == f){
        cout<<"found the element"<< f;
    }
    else if(mid > f){
        l= mid -1;
       
    }
    else if( mid < f){
        s= mid +1;
     
    }

   }
    
    
    
    return 0 ;
}