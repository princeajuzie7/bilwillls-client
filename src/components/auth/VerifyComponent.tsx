"use client"
import React from 'react'
import { useSearchParams } from 'next/navigation';
import { redirect } from 'next/navigation';
import { apiResponse } from '@/utils';
import HashLoader from "react-spinners/HashLoader";
import { useRouter } from 'next/navigation';
export  function VerifyComponent() {
   const { get} = useSearchParams()
  const Emailtoken = get('token')
  const email = get('email')
  const [loading, setLoading] = React.useState(false)
const [verifymeesage, setverifymessage] = React.useState(false)
const [error, setError]  = React.useState("")
const router = useRouter()
  React.useEffect(() => {
    // window.location.reload()
    const verifyEmail = async () => {
    try {
      
      setLoading(true)
      const response = await apiResponse.post(`auth/verifyemail`, {verificationToken: Emailtoken, email:email}, {withCredentials: true})
      
      const data =  response.data
  
      if (Emailtoken) {
        console.log("data", data)
     
        setverifymessage(data?.isverified)
        router.push("/onboarding/setuporganization");
        window.location.reload()
        return
      } else {
      
        alert(data.message)
      }

    } catch (error: any) {
      console.log(error)

      setTimeout(() => {
        
          setError(error?.response?.data.message)
      }, 200);
    } finally {
            setLoading(false);
    }
    }
    


   verifyEmail()
   
  },[Emailtoken,router])
  return (
    <div>
{   loading? <div className='flex justify-center items-center'><HashLoader color="#2563EB" size={50}  style={{width: "100px", height: "100px"}} />
</div> : 

    verifymeesage? <p className='text-2xl text-green-500 text-center justify-center items-center'>Email Verified Successfully.</p>  :
<p className='text-2xl text-red-600 text-center justify-center items-center'> {error}  please double check your verification link</p>
        }

    </div>
  )
}

export default VerifyComponent;
