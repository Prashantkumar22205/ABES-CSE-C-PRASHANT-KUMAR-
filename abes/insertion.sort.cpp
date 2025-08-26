# include <iostream>

using namespace std;

int main(){
    
    int a[5] ;
    for(int i=0 ;i<5 ; i++){
        cout<<"enter the number"<<i <<":";
        cin>>a[i];
    }
     int key;

    for(int i=0;i<4;i++){
       int j =i;
       while( j>0 && a[j-1]> a[j]){
          int temp =a[j-1]; 
         a[j-1]= a[j];
         a[j]= temp;
         j--;
       }

    }

    for(int i=0;i< 5;i++){
        cout<<a[i]<<",";
    }

   
    
    
    
    return 0 ;
}