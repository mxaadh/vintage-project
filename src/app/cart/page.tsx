import BannerThree from "@/components/BannersThree";

const Cart = () => {
  return (
    <div>
      <BannerThree name={"Cart"} />
      <div className="w-[1440px] h-[525px] relative ml-[240px]">
        <div className="w-[1440px] h-[525px] left-0 top-0 absolute bg-white" />
        <div className="w-[1240px] h-[390px] left-[100px] top-[72px] absolute">
          <div className="w-[817px] h-[215px] left-0 top-0 absolute">
            <div className="w-[573px] h-[25px] left-[142px] top-[150px] absolute">
              <div className="left-[461px] top-0 absolute text-black text-base font-normal font-['Poppins']">
                Rs. 250,000.00
              </div>
              <div className="left-0 top-[1px] absolute text-[#9f9f9f] text-base font-normal font-['Poppins']">
                Asgaard sofa
              </div>
              <div className="left-[177px] top-[1px] absolute text-[#9f9f9f] text-base font-normal font-['Poppins']">
                Rs. 250,000.00
              </div>
            </div>
            <div className="w-[817px] h-[215px] left-0 top-0 absolute">
              <div className="w-[817px] h-[55px] left-0 top-0 absolute bg-[#f9f1e7]" />
              <div className="w-[792px] h-[200px] left-0 top-[15px] absolute">
                <div className="left-[142px] top-0 absolute text-black text-base font-medium font-['Poppins']">
                  Product
                </div>
                <div className="left-[319px] top-0 absolute text-black text-base font-medium font-['Poppins']">
                  Price
                </div>
                <div className="left-[496px] top-0 absolute text-black text-base font-medium font-['Poppins']">
                  Quantity
                </div>
                <div className="left-[602px] top-0 absolute text-black text-base font-medium font-['Poppins']">
                  Subtotal
                </div>
                <div className="w-[108px] h-[105px] left-0 top-[95px] absolute">
                  <div className="w-[105px] h-[105px] left-[3px] top-0 absolute bg-[#b88e2f]/20 rounded-[10px]" />
                  <div className="w-[105px] h-[105px] left-0 top-0 absolute">
                    <div className="w-[105px] h-[105px] left-0 top-0 absolute bg-[#d9d9d9] rounded-[10px]" />
                  </div>
                </div>
                <div className="w-8 h-8 left-[515px] top-[132px] absolute">
                  <div className="w-8 h-8 left-0 top-0 absolute rounded-[5px] border border-[#9f9f9f]" />
                  <div className="left-[13px] top-[4px] absolute text-black text-base font-normal font-['Poppins']">
                    1
                  </div>
                </div>
                <div className="w-7 h-7 left-[764px] top-[133px] absolute  overflow-hidden" />
              </div>
            </div>
          </div>
          <div className="w-[393px] h-[390px] left-[847px] top-0 absolute">
            <div className="w-[393px] h-[390px] left-0 top-0 absolute bg-[#f9f1e7]" />
            <div className="left-[96px] top-[15px] absolute text-black text-[32px] font-semibold font-['Poppins']">
              Cart Totals
            </div>
            <div className="left-[75px] top-[124px] absolute text-black text-base font-medium font-['Poppins']">
              Subtotal
            </div>
            <div className="left-[75px] top-[179px] absolute text-black text-base font-medium font-['Poppins']">
              Total
            </div>
            <div className="left-[206px] top-[124px] absolute text-[#9f9f9f] text-base font-normal font-['Poppins']">
              Rs. 250,000.00
            </div>
            <div className="left-[174px] top-[179px] absolute text-[#b88e2f] text-xl font-medium font-['Poppins']">
              Rs. 250,000.00
            </div>
            <div className="w-[222px] h-[58.95px] left-[86px] top-[251px] absolute">
              <div className="w-[222px] h-[58.95px] left-0 top-0 absolute rounded-[15px] border border-black" />
              <div className="left-[59px] top-[14px] absolute text-black text-xl font-normal font-['Poppins']">
                Check Out
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
