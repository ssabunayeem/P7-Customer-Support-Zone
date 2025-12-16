
const OrderCard = ({ order, handleOrder }) => {
  // Static data (mock order)
  //   console.log(order);

  const priorityColor = {
    High: 'text-red-600',
    Medium: 'text-amber-500',
    Low: 'text-green-600'
  };

  return (
    <div onClick={() => handleOrder(order)}
      className="bg-white p-5 rounded-xl shadow-xl relative space-y-3 hover:shadow-2xl cursor-pointer scale-95 transition-all hover:scale-100">


      {/* Order Title */}
      <h2 className="text-xl flex items-center gap-2 font-semibold">
        {order.quantity} {order.order_title}
      </h2>

      {/* Special Instruction */}
      <div className="mt-3 text-xs">
        <h4 className="text-gray-500 text-lg">{order.description}</h4>
      </div>

      {/* Table Number Badge */}
      <div className={`absolute -right-5 md:right-2 -top-8 md:top-2 w-30 h-10 flex justify-center items-center ${order.status == 'Open' ? 'bg-green-300' : 'bg-amber-300'} rounded-full opacity-80`}>
        {order.status}
      </div>

      <div className="lg:flex justify-between text-gray-600">
        <div className="flex gap-5">
          <p>#{order.id}</p>
          <p className={priorityColor[order.priority]}>
            {order.priority}
          </p>
        </div>

        <div className="flex gap-5">
          <p>{order.customer}</p>
          <p>{order.createdAt}</p>
        </div>
      </div>

    </div>
  );
};

export default OrderCard;
