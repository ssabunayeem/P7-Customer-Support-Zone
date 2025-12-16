import React from "react";

const ReadyCard = ({ order }) => {
  return (
    <div className="shadow p-5 bg-white rounded-xl">
      <h3 className="text-lg font-bold">{order.order_title}</h3>
      <p className="text-green-500 font-bold">✅ Completed</p>
    </div>
  );
};

export default ReadyCard;
