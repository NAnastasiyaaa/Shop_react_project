import React from "react";

require("./style.css");

const imgstl = {
  stl: {
    width: 400,
    paddingLeft: 140,
    marginBottom: 100,
  },
};

const txtstl = {
  stl1: {
    fontSize: 35,
    marginRigth: 100,
  },
};

export function Item1() {
  return (
    <div>
      <img src="/images/1.jpg" align="left" style={imgstl.stl} />
      <button id="btn1">Description 1</button>
      <button id="btn2">Description 2</button>
      <h1 style={txtstl.stl1}>⠀⠀⠀Coat warm wool Premium - Limited edition</h1>
      <p className="txt">
        Warm coat made of high quality mixed woolen fabric with lapels and long
        sleeves. Fastens with hidden buttons.
      </p>
      <p className="txt">Countable field</p>
      <input></input>
      <p className="txt2">Selectable Field</p>

      <select class="box">
        <option>S</option>
        <option>XS</option>
        <option>M</option>
        <option selected>none</option>
      </select>

      <button id="btn3">Go back</button>
      <button id="btn4">Add to cart</button>
      <strong>
        <h2>Price: 5299 UAH</h2>
      </strong>
    </div>
  );
}

export function Item2() {
  return (
    <div>
      <img src="/images/2.jpg" align="left" style={imgstl.stl} />
      <button id="btn1">Description 1</button>
      <button id="btn2">Description 2</button>
      <h1 style={txtstl.stl1}>⠀⠀⠀Shirt with leaves</h1>
      <p className="txt">
        Standard satin shirt with Italian collar, short sleeves and side slits
        at the bottom. Fastens with buttons on the front.
      </p>
      <p className="txt">Countable field</p>
      <input></input>
      <p className="txt2">Selectable Field</p>

      <select class="box">
        <option>S</option>
        <option>XS</option>
        <option>M</option>
        <option selected>none</option>
      </select>

      <button id="btn3">Go back</button>
      <button id="btn4">Add to cart</button>
      <strong>
        <h2>Price: 1499 UAH</h2>
      </strong>
    </div>
  );
}

export function Item3() {
  return (
    <div>
      <img src="/images/3.jpg" align="left" style={imgstl.stl} />
      <button id="btn1">Description 1</button>
      <button id="btn2">Description 2</button>
      <h1 style={txtstl.stl1}>⠀⠀⠀Lightweight basic t-shirt</h1>
      <p className="txt">
        Lightweight basic T-shirt with a round collar and short sleeves. Made of
        cotton.⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
      </p>
      <p className="txt">Countable field</p>
      <input></input>
      <p className="txt2">Selectable Field</p>

      <select class="box">
        <option>S</option>
        <option>XS</option>
        <option>M</option>
        <option selected>none</option>
      </select>

      <button id="btn3">Go back</button>
      <button id="btn4">Add to cart</button>
      <strong>
        <h2>Price: 499 UAH</h2>
      </strong>
    </div>
  );
}

export function Item4() {
  return (
    <div>
      <img src="/images/4.jpg" align="left" style={imgstl.stl} />
      <button id="btn1">Description 1</button>
      <button id="btn2">Description 2</button>
      <h1 style={txtstl.stl1}>⠀⠀⠀Striped t-shirt Premium</h1>
      <p className="txt">
        T-shirt with a round collar in the hem and long sleeves. Consignment
        note front pocket.⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
      </p>
      <p className="txt">Countable field</p>
      <input></input>
      <p className="txt2">Selectable Field</p>

      <select class="box">
        <option>S</option>
        <option>XS</option>
        <option>M</option>
        <option selected>none</option>
      </select>

      <button id="btn3">Go back</button>
      <button id="btn4">Add to cart</button>
      <strong>
        <h2>Price: 299 UAH</h2>
      </strong>
    </div>
  );
}
