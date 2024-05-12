import React from 'react'
import { Button } from '@/components/ui/button'




const PaymentPage = () => {
  return (
    <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto w-10/12 flex justify-center mt-9'>

<div className='bg-pink-100 w-10/12 rounded-xl mt-9 overflow-hidden'>
<div className='h-9  w-full bg-gray-900 flex'>
<div className='h-6 w-6 bg-red-500 ml-8 my-auto rounded-full'></div>
<div className='h-6 w-6 bg-green-500 ml-4 my-auto rounded-full'></div>
<div className='h-6 w-6 bg-yellow-300 ml-4 my-auto rounded-full'></div>
</div>

{/* logos of paytm & mastercard */}

<div className='w-3/12 h-36 border-2 border-red-400'></div>
{/* payment headings */}

<div className='w-6/12  bg-gray-100 my-auto border-[1px] border-red-300 rounded-xl flex justify-center mt-2 flex-wrap'>

<h1 className='text-red-500 text-2xl font-semibold mx-auto mt-5'>PAYMENT FORM</h1>

<h2 className='text-xl text-gray-600 flex w-11/12 mt-16 border-b-[1px] border-gray-900 font-semibold border-dotted'>PAYMENT INFORMATION</h2>

{/* payment form */}
<form action="" className='w-full mt-8 flex justify-center flex-wrap'>
<div className='flex flex-col w-6/12'>
<label className='text-lg font-semibold ' htmlFor="">Select a Payment Methord</label>
    <select name="" id="" className='w-full p-3 rounded-xl mx-auto border-[1px] border-gray-600 '>
        <option value="">--select--</option>
    </select>
</div>

<div className='flex flex-col w-4/12 ml-6 '>
<label className='text-lg font-semibold ' htmlFor="">Expiration Date</label>
    <input type="text" placeholder='MM/YY'  className='w-full py-3 rounded-xl px-2 border-[1px] border-gray-600'/>
</div>

<div className='flex flex-col w-6/12 ml-2 mt-5  '>
<label className='text-lg font-semibold ' htmlFor="">Card Number</label>
    <input type="text" placeholder='MM/YY'  className='w-full p-3 rounded-xl border-[1px] border-gray-600'/>
</div>

<div className='flex flex-col w-4/12 ml-6 mt-5  '>
<label className='text-lg font-semibold ' htmlFor="">Security Code</label>
    <input type="text" placeholder='MM/YY'  className='w-full py-3 rounded-xl px-2 border-[1px] border-gray-600'/>
</div>


{/* Billing information */}

<h2 className='text-xl text-gray-600 flex w-11/12 mt-10 border-b-[1px] border-dotted border-gray-900 font-semibold'>BILLING INFORMATON</h2>

<div className='flex flex-col w-6/12 ml-2 mt-5  '>
<label className='text-lg font-semibold ' htmlFor="">Full Name</label>
    <input type="text" placeholder=''  className='w-full p-3 rounded-xl border-[1px] border-gray-600'/>
</div>

<div className='flex flex-col w-4/12 ml-6 mt-5  '>
<label className='text-lg font-semibold ' htmlFor="">Country</label>
    <select className='w-full py-3 px-2 rounded-xl border-[1px] border-gray-600 ' name="" id="">
        <option value="">--country--</option>
    </select>
</div>

<div className='flex flex-col w-6/12 ml-2 mt-5  '>
<label className='text-lg font-semibold ' htmlFor="">Billing Address</label>
    <input type="text" placeholder=''  className='w-full p-3 rounded-xl border-[1px] border-gray-600'/>
</div>

<div className='flex flex-col w-4/12 ml-6 mt-5  '>
<label className='text-lg font-semibold ' htmlFor="">State</label>
    <select className='w-full py-3 px-2 rounded-xl border-[1px] border-gray-600 ' name="" id="">
        <option value="">--state--</option>
    </select>
</div>

<div className='flex flex-col w-6/12 ml-2 mt-5  '>
<label className='text-lg font-semibold ' htmlFor="">Phone Number</label>
<input type="text" placeholder=''  className='w-full p-3 rounded-xl border-[1px] border-gray-600'/>
</div>

<div className='flex flex-col w-4/12 ml-6 mt-5  '>
<label className='text-lg font-semibold ' htmlFor="">Postal Code</label>
<input type="text" placeholder='code'  className='w-full p-3 rounded-xl border-[1px] border-gray-600'/>
</div>


{/* remember me option */}
   <div className=' w-full flex justify-center  mt-6 '>
<div className='w-6 h-6 border-2 border-red-400 my-auto' >
</div>
<span className='text-lg font-medium ml-2 '>Remember Me</span>
   </div>



{/* submit button */}

<Button className="w-10/12 my-4 px-2 py-5 rounded-2xl bg-rose-600 text-xl">
    Continue
</Button>


</form>


</div>


</div>
    </div>
  )
}

export default PaymentPage