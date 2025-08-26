# include <iostream>

using namespace std;

int main(){
    
    int a[5] ;
    for(int i=0 ;i<5 ; i++){
        cout<<"enter the number"<<i <<":";

        cin>>a[i];

    }

    int f;
    cout<<"enter the number";
    cin>>f;

    for(int i=0 ;i<5;i++){
             if(a[i]== f){
                cout<<" found the element"<< f;
             }
    }
    
    
    
    return 0 ;
}