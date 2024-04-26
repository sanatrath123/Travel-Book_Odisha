import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Button } from "@/components/ui/button"

  import React from 'react'
  
  const PropertyCard = () => {
    return (
       
     <Card className="lg:w-2/12 md:w-3/12 w-full mx-4">
        <img src="public/home-logo.png" className="w-full h-60"alt="" />
        <CardTitle>2BHK in Bhubaneswar</CardTitle>
        <CardDescription>RS: $8000</CardDescription>
        <CardContent>
          <p>2BHK in Bhubaneswar</p>
        </CardContent>
        <CardFooter className="flex justify-between"><Button className="w-3/5  ">ADD TO CART</Button>
        <img src="public/favicon.png" className="w-12 h-12 " alt="" />
        </CardFooter>
      </Card>
      
      
      
       
    )
  }
  export default PropertyCard