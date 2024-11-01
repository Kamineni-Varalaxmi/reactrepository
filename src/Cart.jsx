import { useDispatch, useSelector } from "react-redux"
import { decreament, increment, remove } from "./store"
import { useState } from "react"

function Cart(){
    const dispatch=useDispatch()
    const items=useSelector(state=>state.cart)

    const [diAmount,setdiAmount] = useState(0);
    const [couponCode,setCouponCode]=useState("");
    const [couponDiscountPercentage, setCouponDiscountPercentage]=useState(0);
    
    const handleApplyCoupon=()=>{
        switch (couponCode) {
            case 'RATAN10':
                setCouponDiscountPercentage(10);
                break;
            case 'RATAN20':
                setCouponDiscountPercentage(20);
                break;
            default:
                alert('invalid coupon code');
                setCouponDiscountPercentage(0);
        }
    }


    const handleApplyDiscount= (disValue)=>{setdiAmount(disValue)}
    const calculateTotal =()=>{
        let total= items.reduce((sum,item)=>sum+item.price*item.quantity,0);
        let discount=(total*diAmount)/100;
        let couponDiscountAmount=(total*couponDiscountPercentage)/100;
       let netAmount=total-discount-couponDiscountAmount;

        return{
            totalotal:parseFloat(total.toFixed(2)),
            finalDisAmount:parseFloat(discount.toFixed(2)),
            finalTotal:parseFloat(netAmount.toFixed(2)),
            couponDisAmount:parseFloat(total*couponDiscountAmount.toFixed(2)),
        }
    }
    const {total, finalDisAmount, finalTotal,couponDisAmount}=calculateTotal();
     
    
    return (
        <>
        <h1>Your cart</h1>
        {items.length === 0 ? (
            <p>The cart is empty</p>
        ) : (
            <ul>
                {items.map((item) => (
                    <li key={item.name}>
                        {item.name} - ${item.price} - Quantity: {item.quantity}
                        
                        <button onClick={() => dispatch(increment({ name: item.name }))}>+</button>
                        <button onClick={() => dispatch(decreament({ name: item.name }))}>-</button>
                        <button onClick={() => dispatch(remove({ name: item.name }))}>Remove</button>
                    </li>
                ))}
            </ul>
        )}
        

       <>
            <p>Total before dicounts:${total}</p>
                <button onClick={() => handleApplyDiscount(10)}>Apply 10% Discount</button>
                <button onClick={() => handleApplyDiscount(20)}>Apply 20% Discount</button>
                <button onClick={() => handleApplyDiscount(30)}>Apply 30% Discount</button>
                <>
                <input
                    type="text"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    placeholder="Enter coupon code"
                />
                <button onClick={handleApplyCoupon}>Apply Coupon</button>
            </>

                <p>Discount Percentage Applied: ${diAmount}%</p>
            <p>Discount Amount: ${finalDisAmount}</p>
            <p>Final Amount after Discount: ${finalTotal}</p>
            <p>Coupon Discount Amount: ${couponDisAmount}</p>

        </>
    
</>
    )
}
export default Cart