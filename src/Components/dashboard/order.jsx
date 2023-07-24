import React, { useState, useEffect } from "react";
import { BsEmojiSmile } from "react-icons/bs";
import topCustomer from "../../assets/topCustomer.png";

function Order() {
  const [orderData, setOrderData] = useState([]);

  // Simulate fetching data from API
  useEffect(() => {
    const fetchedData = [
      // Sample data, replace with actual API response
      {
        id: 1,
        type: "Squad",
        orderNumber: "25064",
        customer: "Tommy Hatcher",
        zipCode: "50480",
        orderTime: "09:30 AM",
        vendors: "Vendor A",
        rider: "Bill Cohen",
        orderAmount: "$100.00",
        performance: "Good",
      },
      {
        id: 2,
        type: "Normal",
        orderNumber: "ORD-002",
        customer: "Jane Smith",
        zipCode: "67890",
        orderTime: "01:45 PM",
        vendors: "Vendor B",
        rider: "Rider 2",
        orderAmount: "$50.00",
        performance: "Excellent",
      },
      {
        id: 3,
        type: "Normal",
        orderNumber: "ORD-002",
        customer: "Jane Smith",
        zipCode: "67890",
        orderTime: "01:45 PM",
        vendors: "Vendor B",
        rider: "Rider 2",
        orderAmount: "$50.00",
        performance: "Excellent",
      },
      {
        id: 4,
        type: "Normal",
        orderNumber: "ORD-002",
        customer: "Jane Smith",
        zipCode: "67890",
        orderTime: "01:45 PM",
        vendors: "Vendor B",
        rider: "Rider 2",
        orderAmount: "$50.00",
        performance: "Excellent",
      },
      {
        id: 4,
        type: "Squad",
        orderNumber: "25064",
        customer: "Tommy Hatcher",
        zipCode: "50480",
        orderTime: "09:30 AM",
        vendors: "Vendor A",
        rider: "Bill Cohen",
        orderAmount: "$100.00",
        performance: "Good",
      },
      {
        id: 5,
        type: "Squad",
        orderNumber: "25064",
        customer: "Tommy Hatcher",
        zipCode: "50480",
        orderTime: "09:30 AM",
        vendors: "Vendor A",
        rider: "Bill Cohen",
        orderAmount: "$100.00",
        performance: "Good",
      },
      {
        id: 6,
        type: "Squad",
        orderNumber: "25064",
        customer: "Tommy Hatcher",
        zipCode: "50480",
        orderTime: "09:30 AM",
        vendors: "Vendor A",
        rider: "Bill Cohen",
        orderAmount: "$100.00",
        performance: "Good",
      },
    ];
    setOrderData(fetchedData);
  }, []);

  return (
    <section className="mt-[25px]">
      {/************************** Nav **********************/}
      <h3 className="heading">Active Orders</h3>
      {/************************** Table **********************/}
      <div className="w-[95%] mt-[25px] bg-white">
        <table>
          <thead className="nav">
            <tr>
              <th className="">Type </th>
              <th>Order # </th>
              <th>Customer </th>
              <th>Zip Code </th>
              <th>Order Time </th>
              <th>Vendors </th>
              <th>Rider </th>
              <th>Order Amount </th>
              <th>Performance </th>
            </tr>
          </thead>
          <tbody className="px-[25px]">
            {orderData.map((orderItem) => (
              <tr key={orderItem.id} className="row">
                <td> {orderItem.type === 'Normal' ? <div className="type-normal">{orderItem.type}</div> :  <div className="type-squad">{orderItem.type}</div> }</td>
                <td>{orderItem.orderNumber}</td>
                <td>
                  <div className="flex gap-4">
                    <div>
                      <img src={topCustomer} alt="" width={60} />
                    </div>
                    <div>
                      {orderItem.customer}
                      <p className="text-[#C8C8C8] text-[14px]">Eau Claire, WI 54701</p>
                      <p className="text-[#C8C8C8] text-[14px]">+1 916-349-9169</p>
                    </div>
                  </div>
                </td>
                <td>{orderItem.zipCode}</td>
                <td>{orderItem.orderTime}</td>
                <td>{orderItem.vendors}</td>
                <td>{orderItem.rider}</td>
                <td><div className="bg-[#82F89D] rounded-[25px] p-[7px] text-center">{orderItem.orderAmount}</div></td>
                <td><div><BsEmojiSmile style={{margin: 'auto', color:'green'}}/></div></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Order;
