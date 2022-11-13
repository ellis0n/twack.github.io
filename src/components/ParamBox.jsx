import React from 'react'

const ParamBox = () => {

  //TODO: pass through parameters for onChange and value and integrate into application
    
  return (
     <div className="wrapper">
    <form action ="/ads" method = "post" onSubmit={handleClick}>
      <fieldset>
        <label>Province: </label>
          <select multiple = {false} value={params} name="location" id="location" onChange = {handleLocation}>
            <option value= {9008}>Newfoundland & Labradaor</option>
            <option value={9002}>Nova Scotia</option>
            <option value={9007}>British Columbia</option>
            <option value={9003}>Alberta</option>
            <option value={9004}>Ontario</option>
            <option value={9011}>Prince Edward Island</option>
            <option value={9001}>Quebec</option>
            <option value={9010}>Territories</option>
            <option value={9009}>Saskatchewan</option>
            <option value={9005}>New Brunswick</option>
            <option value={9006}>Manitoba</option>
          </select>
          <br/>
          <br/>
          <label>Category: </label>
          <select multiple = {false} name={params} id="category" onChange={handleCategory}>
            <option value={12}>Arts & Collectibles</option>
            <option value={767}>Audio Equipment</option>
            <option value={253}>Baby & Family</option>
            <option value={644}>Bikes</option>
            <option value={109}>Books</option>
            <option value={29659003}>Business & Industrial</option>
            <option value={103}>Cameras</option>
            <option value={104}>CDs, DVDs & Blu-Ray</option>
            <option value={274}>Clothing</option>
            <option value={16}>Computers</option>
            <option value={128}>Computer Accessories</option>
            <option value={17220001}>Free Stuff</option>
            <option value={235}>Furniture</option>
            <option value={638}>Garage Sales</option>
            <option value={140}>Health & Special Needs</option>
            <option value={139}>Hobbies & Crafts</option>
            <option value={107}>Home Appliances</option>
            <option value={717}>Home Indoor</option>
            <option value={19}>Home Outdoor & Garden</option>
            <option value={727}>Home Renos</option>
            <option value={133}>Jewelry & Watches</option>
            <option value={17}>Music Gear</option>
            <option value={132}>Phones</option>
            <option value={111}>Sporting Goods</option>
            <option value={110}>Tools</option>
            <option value={108}>Toys & Games</option>
            <option value={15093001}>TV & Video</option>
            <option value={141}>Video Games</option>
            <option value={26}>Other</option>
            
          </select>
          <br/>

          <br/>
          <input value="submit"  type="submit"></input>
      </fieldset>
    </form></div>
  )
}

export default ParamBox