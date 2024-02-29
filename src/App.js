import React, {useEffect, useState} from "react"
import './App.css';
function App() {
  useEffect(()=>{
    const results = (a, b) => {
      const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
          if(typeof a !== 'number' || typeof b !== 'number'){
            reject("kiểu dữ liệu không hợp lệ")
          }else{
            resolve(a + b)
          }
        }, 3000);
      })
      return promise
    }
    results(5,10)
    .then(res => {
      console.log("Kết quả: ", res)
    })
    .catch(err => {
      console.log(err)
    })

      // const sum = (a, b) => {
      //   const myPromise = new Promise((resolve, reject)=>{
      //     setTimeout(()=>{
      //       if(typeof a !== 'number' || typeof b !== 'number'){
      //         reject("Kiểu dữ liệu không phải dạng số")
      //       }else{
      //         resolve(a + b)
      //       }
      //     }, 2000)
      //   })
      //   return myPromise
      // }
      // sum(10, 5)
      // .then((res) => {
      //   console.log("Kết quả = ", res)
      // })
      // .catch((err) => {
      //   console.log("err", err)
      // })


      // const devide = (a, b) => {
      //   const myPromise = new Promise((resolve, reject) => {
      //     setTimeout(() => {
      //       if(typeof a !== 'number' || typeof b !== 'number'){
      //         reject("Kiểu dữ liệu không phải dạng sô")
      //       }else if(b === 0){
      //         reject("Không chia được cho 0")
      //       }else{
      //         resolve(a / b)
      //       }
      //     }, 2000);
      //   })
      //   return myPromise
      // }
      // devide(10, 5)
      // .then((res) => {
      //   console.log("Kết quả = ", res)
      // })
      // .catch((err) => {
      //   console.log(err)
      // })
      
      // const multiply = (a, b) => {
      //   const myPromise = new Promise((resolve, reject) => {
      //     setTimeout(()=>{
      //       if(typeof a !== 'number' || typeof b !== 'number'){
      //         reject("Kiểu dữ liệu không phải dạng số")
      //       }else{
      //         resolve(a * b)
      //       }
      //     }, 2000)
      //   })
      //   return myPromise
      // }
      // multiply(20, 5)
      // .then((res) => {
      //   console.log("Kết quả = ", res)
      // })
      // .catch((err) => {
      //   console.log("err", err)
      // })

      // const areas = (a, b, c) => {
      //   const myPromise = new Promise((resolve, reject) => {
      //     setTimeout(()=>{
      //       if(typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number'){
      //         reject("Kiểu dữ liệu không phải dạng số")
      //       }else{
      //         resolve((a + b) / c)
      //       }
      //     }, 2000)
      //   })
      //   return myPromise
      // }
      // areas(50, 50, 2)
      // .then(res => {
      //   console.log("Kết quả = ", res)
      // })
      // .catch(err => {
      //   console.log("err", err)
      // })

      // const area = (a, b, c) => {
      //   setTimeout(()=>{
      //     sum(a,b)
      //     .then(res => devide(res, c))
      //     .then(res => {
      //       console.log("Kết quả = ", res)
      //     })
      //     .catch(err => {
      //       console.log("err", err)
      //     })
      //   }, 2000)
      // }
      // area(50, 5, 4)
      
      // const squares = (a, b, c) => {
      //   const myPromise = new Promise((resolve, reject) => {
      //     setTimeout(() => {
      //       if(typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number'){
      //         reject("Kiểu dữ liệu không phải dạng số")
      //       }else{
      //         resolve(((a + b) * c) / 2)
      //       }
      //     }, 2000)
      //   })
      //   return myPromise
      // }
      // squares(20, 10, 2)
      // .then(res => {
      //   console.log("Kết quả squares = ", res)
      // })
      // .catch(err => {
      //   console.log("err", err)
      // })

      // const square = (a, b, c) =>{
      //   setTimeout(() => {
      //     sum(a, b)
      //     .then(res => multiply(res, c))
      //     .then(res => devide(res, 2))
      //     .then(res => {
      //       console.log("Kết quả square = ", res)
      //     })
      //     .catch((err) => {
      //       console.log("err", err)
      //     })
      //   }, 2000);
      // }
      // square(20, 10, 2)


      // const isDaddyHappy = true;
      // const myPromise = new Promise((resolve, reject)=>{
      //   if(isDaddyHappy){
      //     resolve("Bố đã mua cho con bộ đồ chơi Ô TÔ rồi")
      //   }else{
      //     reject("Bỗ chưa mua cho con bộ đồ chơi")
      //   }
      // })
      // myPromise.then((response)=>{
      //   console.log(response)
      // }).catch((err)=>{
      //   console.log(err)
      // })

      
      // const sum = (a, b) => {
      //   const myPromise = new Promise((resolve, reject)=>{
      //     setTimeout(()=>{
      //       if(typeof a !== 'number' || typeof b !== 'number'){
      //         reject("Kiểu dữ liệu không phải dạng sô 01")
      //       }else{
      //         resolve(a + b)
      //       }
      //     }, 1000)
      //   })
      //   return myPromise
      // }
      
      // const divide = (a, b) => {
      //   const myPromise = new Promise((resolve, reject)=>{
      //     setTimeout(()=>{
      //       if(typeof a !== 'number' || typeof b !== 'number'){
      //         reject("Kiểu dữ liệu không phải dạng sô 02")
      //       }else if(b === 0){
      //         reject("Không chia hết cho 0")
      //       }else(
      //         resolve(a / b)
      //       )
      //     }, 1000)
      //   })
      //   return myPromise
      // } 

      // const multiply = (a, b) => {
      //   const myPromise = new Promise((response, reject) => {
      //     setTimeout(()=>{
      //       if(typeof a !== 'number' || typeof b !== 'number'){
      //         reject("Kiểu dữ liệu không phải dạng số 03")
      //       }else{
      //         response(a * b)
      //       }
      //     }, 1000)
      //   })
      //   return myPromise
      // }

      // Promise.all([sum(1,4), divide(10, 5), multiply("g", 5)])
      // .then(res => {
      //   console.log("res = ", res)
      // })
      // .catch(err => {
      //   console.log("err = ", err)
      // })

      // Promise.race([sum("aaa",4), divide(10, 5), multiply(5, 5)])
      // .then(res => {
      //   console.log("res = ", res)
      // })
      // .catch(err => {
      //   console.log("err = ", err)
      // })

      // const square = async(a, b, h) => {
      //   try{
      //     const total = await sum(a, b)
      //     console.log("totla = ", total)
      //     const multiplys = await multiply(total, h)
      //     console.log("totla = ", multiplys)
      //     const divides = await divide(multiplys, 2)
      //     console.log("devide", divides)
      //   }catch(err){
      //     console.log("err", err)
      //   }
      // }
      // square(5, 6, 7)
      
      // const url = () => {
      //   return fetch('https://api.github.com/search/repositories?q=stars%3A%3E1%20language&fbclid=IwAR3BDrRwTVb2KFWD80PX88DsRU8eMJBIGP3cch5pelGcYP2txCFa7G3f13U')
      // }
      // const callApi = async() =>{
      //   try{
      //     const res = await url();
      //     const ress = await res.json()
      //     console.log("res = ",ress)
      //   }catch(err){
      //     console.log("err", err)
      //   }
      // }
      // callApi()

      // const url = (`https://api.github.com/search/repositories?q=stars%3A%3E1%20language&fbclid=IwAR3BDrRwTVb2KFWD80PX88DsRU8eMJBIGP3cch5pelGcYP2txCFa7G3f13U`)
      // fetch(url)
      // .then(res => res.json())
      // .then(res => {
      //   console.log(res)
      // })
      // .catch(err => {
      //   console.log(err)
      // })

      // const callApiGetCountry = () => {
      //   return fetch('https://restcountries.com/v2/all')
      // }
    
      // callApiGetCountry()
      // .then(res => {
      //   console.log("res ====", res)
      //   return res.json()
      // })
      // .then(res => {
      //   console.log("res ====", res)
      // })
      // .catch(err => {
      //   console.log("err ===", err)
      // })
    
      // const getList = async() => {
      //   try{
      //     const res = await callApiGetCountry()
      //     console.log("res = ", res)
      //     const result = await res.json()
      //     console.log("res ===", result)
      //   }catch(err){
      //     console.log("err = ", err)
      //   }
      // }
      // getList()

      // const square = (a, b, c) => {
      //   setTimeout(()=>{
      //     sum(a,b)
      //     .then((res) => {
      //       console.log("=== Sum ===", res)
      //       divide(res, 2)
      //       .then((res)=>{
      //         console.log("=== Divide ===", res)
      //         multiply(res, c)
      //         .then((res)=>{
      //           console.log("=== Multiply ===", res)
      //         })
      //         .catch((err)=>{
      //           console.log("err", err)
      //         })
      //       })
      //       .catch((err)=>{
      //         console.log("err", err)
      //       })
      //     })
      //     .catch((err)=>{
      //       console.log("err", err)
      //     })
      //   }, 3000)
      // }
      // square(10, 5, 2)
      
      // const square = (a, b, c) =>{
      //   setTimeout(()=>{
      //     sum(a,b)
      //     .then(res => divide(res, 2))
      //     .then(res => multiply(res, c))
      //     .then(res => {
      //       console.log("square = ", res)
      //     })
      //     .catch(err =>{
      //       console.log("err", err)
      //     })
      //   }, 1000)
      // } 
      // square(10, 5, 2)
      
    // const Sum = (a, b) => {
    //   const myPromise = new Promise((resolve, reject) => {
    //     setTimeout(()=>{
    //       if(typeof a !== 'number' || typeof b !== 'number'){
    //         reject("Kiểu dữ liệu không phải dạng số")
    //       }else{
    //         resolve(a + b)
    //       }
    //     }, 3000)
    //   })
    //   return myPromise;
    // }
    // Sum(5, 5)
    // .then(res => {
    //   console.log("Kết quả a + b = ", res)
    // })
    // .catch(err => {
    //   console.log("err = ", err)
    // })

    // const devide = (a, b) => {
    //   const myPromise = new Promise((resolve, reject) => {
    //     setTimeout(()=>{
    //       if(typeof a !== 'number' || typeof b !== 'number'){
    //         reject("Kiểu dữ liệu không phải dạng số")
    //       }else if(b === 0){
    //         reject("Không chia được cho 0")
    //       }else{
    //         resolve(a / b)
    //       }
    //     }, 3000)
    //   })
    //   return myPromise
    // }
    // devide(10, 5)
    // .then(res => {
    //   console.log("Kết quả a / b = ", res)
    // })
    // .catch(err => {
    //   console.log("err", err)
    // })

    // const multiply = (a, b) => {
    //   const myPromise = new Promise ((resolve, reject)=>{
    //     setTimeout(()=>{
    //       if(typeof a !== 'number' || typeof b !== 'number'){
    //         reject("Kiểu dữ liệu không phải dạng sô")
    //       }else{
    //         resolve(a * b)
    //       }
    //     }, 3000)
    //   })
    //   return myPromise
    // }
    // multiply(10, 3)
    // .then(res => {
    //   console.log("Kết quả a * b = ", res)
    // })
    // .catch(err => {
    //   console.log("err", err)
    // })

    // const area = (a, b, c) => {
    //   const myPromise = new Promise((resolve, reject) => {
    //     setTimeout(()=>{
    //       if(typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number'){
    //         reject("Kiểu dữ liệu không phải dạng số")
    //       }else{
    //         resolve((a * b) / c)
    //       }
    //     },3000)
    //   })
    //   return myPromise
    // }
    // area(10, 3, 3)
    // .then(res => {
    //   console.log("Kết quả (a * b) / c = ", res)
    // })
    // .catch(err => {
    //   console.log("err", err)
    // })

    // const area = (a, b, c) => {
    //   multiply(a, b)
    //   .then(res => devide(res, c))
    //   .then(res => {
    //     console.log("Kết quả = ", res)
    //   })
    //   .catch(err => {
    //     console.log("err", err)
    //   })
    // }
    // area(10, 20, 4)

    // const testSum = (a, b) => {
    //   const myPromise = new Promise((resolve, reject) => {
    //     if(typeof a !== 'number' || typeof b !== 'number'){
    //       reject("Kiểu dữ liệu không phải dạng sô")
    //     }else{
    //       resolve(a + b)
    //     }
    //   })
    //   return myPromise
    // }
    // testSum(10, 5)
    // .then(res => {
    //   console.log("Response Sum = ", res)
    // })
    // .catch(err => {
    //   console.log(err)
    // })

    // const devide = (a, b) => {
    //   const myPromise = new Promise((resolve, reject)=>{
    //     if(typeof a !== 'number' || typeof b !== 'number'){
    //       reject("Kiểu dữ liệu không phải dạng số")
    //     }else{
    //       resolve(a / b)
    //     }
    //   })
    //   return myPromise
    // }
    // devide(20, 10).then(res => {
    //   console.log("Response Devide =", res)
    // })
    // .catch(err => {
    //   console.log(err)
    // })

    // const multiply = (a, b) => {
    //   const myPromise = new Promise((resolve, reject) => {
    //     if(typeof a !== 'number' || typeof b !== 'number'){
    //       reject("Kiểu dữ liệu không phải dạng số")
    //     }else if(b === 0){
    //       reject("Kiểu dữ liệu phải khác 0, không thực hiện được phép tính")
    //     }else{
    //       resolve(a * b)
    //     }
    //   })
    //   return myPromise
    // }
    // multiply(10, 4).then(res => {
    //   console.log("Multiply Response = ", res)
    // })
    // .catch(err => {
    //   console.log(err)
    // })

    // (a * b) / c
    // const are = (a, b, c) => {
    //   multiply(a,b)
    //   .then(res => devide(res, c))
    //   .then(res => {
    //     console.log("Are Response =", res)
    //   })
    //   .catch(err => {
    //     console.log(err)
    //   })
    // }
    // are(10, 3, 2)

    // ((a + b) * c ) / 2
    // const trapezoidalArea = (a, b, c) => {
    //   testSum(a,b)
    //   .then(res => multiply(res, c))
    //   .then(res => devide(res, 2))
    //   .then(res => {
    //     console.log("TrapezoidalArea Response =", res)
    //   })
    //   .catch(err => {
    //     console.log(err)
    //   })
    // }
    // trapezoidalArea(10, 10, 2)
  },[])
  
  return (
    <div className="App">
      <div className="lds-ripple">
        <div>
        </div><div>
        </div>
      </div>
    </div>
  );
}

export default App;
