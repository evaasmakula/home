import React from "react";

function Navbar() {
  return (
    <div className="absolute top-10 right-10 flex items-end justify-center flex-col text-xs">
      <Menu name="About" state={true} />
      <Menu name="Works" state={false} />
      <Menu name="Contacts" state={false} />
    </div>
  );
}

export default Navbar;

function Menu({ name, state }) {
  return (
    <a href="#">
      <div className="flex items-center justify-center h-3 bg-white m-[2px]">
        <p
          style={{
            display: state ? "block" : "none",
            marginRight: "10px",
          }}
        >
          {name}
        </p>
        <div
          style={{
            width: state ? "50px" : "20px",
          }}
          className=" h-[1px] bg-[#B8C1EC] mt-1"
        >
          &nbsp;
        </div>
      </div>
    </a>
  );
}
