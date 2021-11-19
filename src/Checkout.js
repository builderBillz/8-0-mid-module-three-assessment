const Checkout = () => {
return <form id='checkout'>
    <h2>Checkout</h2>
    <label>First Name
        <input
          type="text" 
          onChange 
        />
      </label>
      <label>Last Name
     <input
          type="text" 
          onChange 
        />
      </label>
      <label>Email
     <input
          type="text" 
          onChange 
        />
      </label>
      <label>Credit Card
     <input
          type="text" 
          onChange 
        />
      </label>
      <label>Zip Code
     <input
          type="text" 
          onChange 
        />
      </label>
      <button>Buy Now</button>
</form>
};

export default Checkout
