"use client"

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ShoppingCart } from "lucide-react";
// import { useParams } from "next/navigation";

export default function CheckoutPage() {
    // const params = useParams();
    // const productId = params._id as string;

    return (
        <div className="max-w-6xl mx-auto p-6">
            {/* Left - Billing Form grid md:grid-cols-2 gap-6*/}
            <Card>
                <CardHeader>
                    <CardTitle>Billing Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <Label htmlFor="firstName">First Name</Label>
                            <Input id="firstName" placeholder="John" />
                        </div>
                        <div>
                            <Label htmlFor="lastName">Last Name</Label>
                            <Input id="lastName" placeholder="Doe" />
                        </div>
                    </div>
                    <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="john@example.com" />
                    </div>
                    <div>
                        <Label htmlFor="address">Address</Label>
                        <Input id="address" placeholder="123 Main St" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <Label htmlFor="city">City</Label>
                            <Input id="city" />
                        </div>
                        <div>
                            <Label htmlFor="zip">ZIP Code</Label>
                            <Input id="zip" />
                        </div>
                    </div>

                    {/* <div>
            <Label>Payment Method</Label>
            <RadioGroup defaultValue="card" className="mt-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="card" id="card" />
                <Label htmlFor="card" className="flex items-center space-x-1">
                  <CreditCard className="w-4 h-4" />
                  <span>Credit Card</span>
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="paypal" id="paypal" />
                <Label htmlFor="paypal" className="flex items-center space-x-1">
                  <DollarSign className="w-4 h-4" />
                  <span>PayPal</span>
                </Label>
              </div>
            </RadioGroup>
          </div> */}

                    <Button className="w-full mt-4">
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Complete Purchase
                    </Button>
                </CardContent>
            </Card>

            {/* Right - Order Summary */}
            {/* <Card>
                <CardHeader>
                    <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex justify-between">
                        <span>Product A</span>
                        <span>$25.00</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Product B</span>
                        <span>$15.00</span>
                    </div>
                    <hr />
                    <div className="flex justify-between font-semibold">
                        <span>Total</span>
                        <span>$40.00</span>
                    </div>
                </CardContent>
            </Card> */}
        </div>
    );
}
