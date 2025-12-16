const CookingCard = ({ order, handleCooking }) => {
  // Mock data

  return (
    <div className="rounded-xl p-5 bg-white shadow hover:shadow-2xl cursor-pointer scale-95 transition-all hover:scale-100">
      {/* Title */}
      <h3 className="text-xl font-bold mb-2">
        {order.order_title}
      </h3>

      <button onClick={() => handleCooking(order)} className="btn btn-success text-white w-full">
        Completed
      </button>
    </div>
  );
};

export default CookingCard;
